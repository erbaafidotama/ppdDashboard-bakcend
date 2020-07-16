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

exports.penjualan = function(req, res) {
    connection.query('SELECT pd.kd_barang, COUNT(pd.kd_barang) as jumlah, p.tgl_penjualan, mb.nm_barang FROM penjualan_detail pd INNER JOIN penjualan p ON pd.no_transaksi = p.no_transaksi INNER JOIN ma_barang mb ON pd.kd_barang = mb.kd_barang GROUP BY kd_barang', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.stockbBarang = function(req, res) {
    connection.query('SELECT kd_barang as name, jumlah as value FROM stock_barang sb ORDER BY jumlah DESC LIMIT 10', function (error, rows, fields){
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