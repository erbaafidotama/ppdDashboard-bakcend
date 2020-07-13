'use strict';

var response = require('./res');
var connection = require('./conn');

exports.barang = function(req, res) {
    connection.query('SELECT * FROM ma_barang', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.pembelianSummary = function(req, res) {
    connection.query('SELECT p.*, d.kd_barang FROM pembelian p INNER JOIN pembelian_detail d ON p.no_transaksi = d.no_transaksi LIMIT 10', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};