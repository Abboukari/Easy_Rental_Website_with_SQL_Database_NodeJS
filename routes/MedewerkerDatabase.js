const {response} = require('express');
const express = require('express');
const router = express.Router();

const sql = require("mssql");
const DataBaseConnectie = require('../library/databaseMed.js');
const request = new sql.Request();

module.exports = (params)=>{

    router.get("/", function(req,res,next){
        request.query("SELECT * FROM Medewerker ORDER BY voornaam DESC", 
                        Function (err,rows){
                            if (err){
                                req.flash("error", err);

                                //render naar vieuws/pages/medewerkerDB
                                res.render('../views/pages/MedewerkerDB.ejs', {pageTitle:"SQL DataSet", data:""});
                            } else{ 
                                ///console.log(row)
                                let newResults =[];
                                for(let key in rows) {
                                    if (key === "recordsets"){
                                        rows[key].foreach((arr)=>{
                                            arr.forEach((obj)=>{
                                                Object.keys(obj).forEach((key)=>{
                                                    newResults.push(obj[key])
                                                });
                                            });
                                        });
                                    }
                                }
                                //check format output
                                rows= JSON.parse(newResults);

                                res.render("../views/pages/medewerkerDB.ejs", {pageTitle: "SQL DATA", data: rows})
                            }

                            }
                        })
    })
}