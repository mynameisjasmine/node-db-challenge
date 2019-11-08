const db = require('../data/dbConfig.js');



module.exports = {
  find,
  findById,
  add,
  update,
  remove  
};

function find() {
return db('projects')
}

function findById(id) {
 return db('projects')
 .where({ id: Number(id) })
 .first()  
}


function add(project) {
 return db('projects') 
 .insert(project)
 .then(id => {
 return findById(id[0])
 });  
}


function update(changes, id) {
return db('projects') 
.where({ id: Number(id) }) 
.update(changes)
}

function remove(id) {
 return db('projects') 
 .where('id', id) 
 .del(); 
}