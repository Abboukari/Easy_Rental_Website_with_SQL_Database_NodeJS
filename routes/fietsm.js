const express = require('express');
const router = express.Router();

const sql = require("mssql");
const dbConfig = require("../library/dbfiets");
const request = new sql.Request(); 

module.exports = (params) => {

    router.get("/", function (req, res, next) {
        request.query(
            "SELECT * FROM fiets ORDER BY modelfiets DESC FOR JSON AUTO",
            function (err, rows) {
                if (err) {
                    req.flash("error",err);
                    res.render("fietsm/index.ejs", {pageTitle: "SQL Data", data: ""});
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
};