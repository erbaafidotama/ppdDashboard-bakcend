'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/')
        .get(todoList.index);

    app.route('/barang')
        .get(todoList.barang);

    app.route('/pembelian/pembelianSummary')
        .get(todoList.pembelianSummary);

    app.route('/penjualan')
        .get(todoList.penjualan);

    app.route('/stockBarang')
        .get(todoList.stockbBarang);
};