const ContenedorSqlite = require('../../contenedores/ContenedorSqlite')
const connection = require('../../connection/sqlite')

class ProductDaoSqlite extends ContenedorSqlite{
  constructor(){
    super(connection)
    super.setSource('products')
  }
}

module.exports = ProductDaoSqlite