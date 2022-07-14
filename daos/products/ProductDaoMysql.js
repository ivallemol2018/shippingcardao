const ContenedorSqlite = require('../../contenedores/ContenedorMysql')
const connection = require('../../connection/mysqldb')

class ProductDaoMysql extends ContenedorSqlite{
  constructor(){
    super(connection)
    super.setSource('products')
  }
}

module.exports = ProductDaoMysql