const ContenedorSqlite = require('../../contenedores/ContenedorSqlite')
const connection = require('../../connection/sqlite')

class ShoppingCartDaoSqlite extends ContenedorSqlite{
  constructor(){
    super(connection)
    super.setSource('shoppingCart')
  }

  async update(shoppingCartID,product){
    const shoppingCart = await super.getById(shoppingCartID)

    const productArray =  JSON.parse(shoppingCart.products);

    productArray.push(product)

    shoppingCart.products = JSON.stringify(productArray)

    await super.update(shoppingCart)

    const shoppingCartResponse = await super.getById(shoppingCartID)

    return {id: shoppingCartResponse.id, products : JSON.parse(shoppingCartResponse.products)}
  }

  async deleteItem(shoppingCartID,productoID){

    const shoppingCart = await super.getById(shoppingCartID)

    const products =  JSON.parse(shoppingCart.products);

    const idx = products.findIndex(p => p.id == productoID) 

    products.splice(idx , 1)

    shoppingCart.products = JSON.stringify(products)

    await super.update(shoppingCart)

    const shoppingCartResponse = await super.getById(shoppingCartID)

    return {id: shoppingCartResponse.id, products : JSON.parse(shoppingCartResponse.products)}

  }  

}

module.exports = ShoppingCartDaoSqlite