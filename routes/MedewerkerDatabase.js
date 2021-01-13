const {response} = require('express');
const express = require('express');
const router = express.Router();

const sql = require("mssql");
const DataBaseConnectieMEdewerker = require('../library/databaseMed.js');
const request = new sql.Request();





module.exports = (params) => {

    router.get("/", function (req, res, next) {
        request.query(
            "SELECT * FROM Medewerker ORDER By voornaam DESC FOR JSON AUTO",
            function (err, rows) {
                if (err) {
                    req.flash("error",err);
                    res.render("medewerkerDatabase/index.ejs", {pageTitle: "SQL Dataset", data: ""});
            } else {
                let newResults = [];
                for(let key in rows) {
                    if (key === "recordsets"){
                        rows[key].forEach((arr) => {
                            arr.forEach((obj) => {
                                Object.keys(obj).forEach((key) =>{
                                    newResults.push(obj[key]);
                                });
                            });
                        });
                    }
                }

                rows = JSON.parse(newResults);
                res.render("fietsm/index.ejs", {pageTitle: "SQL Data", data: "rows"});
            }
        )
    })
    }
}




