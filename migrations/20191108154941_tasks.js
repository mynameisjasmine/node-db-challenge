
exports.up = function(knex) {
return knex.schema 
.createTable('tasks', tbl => {
   tbl.increments();
   
   tbl.text('description', 255)
   .notNullable();
   
   tbl.text('notes', 255)
   
   tbl.boolean('completed').default(false)
})
};

exports.down = function(knex) {
return knex.schema.dropTableIfExists('tasks') 
};
