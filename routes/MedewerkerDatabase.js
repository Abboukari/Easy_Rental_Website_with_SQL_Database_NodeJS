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

                            }
                        })
    })
}