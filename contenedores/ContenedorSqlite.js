const knex = require('knex')

class ContenedorSqlite{

  constructor(options){
    this.knex = knex(options);
  }

  setSource(table){
    this.table = table
  }

  async getAll(){
    return await this.knex(this.table).select('*')
  }

  async deleteById(id) {
    const res = await this.knex(this.table)
      .where('id','=',id)
      .del()

    return res
  }

  async deleteAll() {
    const res = await this.knex(this.table)
    return res
  }  

  async getById(id){
    const item = await this.knex(this.table)
                .select('*')
                .where('id','=',id)
                
    return item[0]

  }

  async save(item){
    const response = await this.knex(this.table)
                        .insert(item)    

    const id = {id: response[0]}
    return id
  }

  async update(item){
    return await this.knex(this.table)
              .where('id','=',item.id)
              .update(item)
  }

  destroy(){
    this.knex.destroy()
  }

}

module.exports = ContenedorSqlite;