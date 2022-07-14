const keys = require('../config/keys');
const ProductDaoMysql = require('./products/ProductDaoMysql')
const ProductDaoSqlite  = require('./products/ProductDaoSqlite')
const ProductDaoFile = require('./products/ProductDaoFile')
const ShoppingCartDaoMysql = require('./shoppingCart/ShoppingCartDaoMysql')
const ShoppingCartDaoSqlite = require('./shoppingCart/ShoppingCartDaoSqlite')
const ShoppingCartDaoFile = require('./shoppingCart/ShoppingCartDaoFile')

class DaoFactory{

  static getProduct(){
    switch (keys.driverClassName) {    
      case 'mysql':
          return new ProductDaoMysql();
      case 'sqlite':
          return new ProductDaoSqlite(); 
      case 'file':
          return new ProductDaoFile();
    }               
  }

  static getShoppingCart(){
    switch (keys.driverClassName) {    
      case 'mysql':
          return new ShoppingCartDaoMysql();
      case 'sqlite':
          return new ShoppingCartDaoSqlite(); 
      case 'file':
          return new ShoppingCartDaoFile();          
    }               
  }  

}

module.exports = DaoFactory