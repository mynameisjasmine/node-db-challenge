
exports.up = function(knex) {
 return knex.schema
 .createTable('projects', tbl => {
   tbl.increments();

   tbl.text('name', 255)
   .notNullable();
   tbl.text('description', 255)
   
   tbl
   .integer('resourceId')
   .unsigned()
   .notNullable()
   .references(id)
   .inTable('resources')
   .onUpdate('cascade')
   .onDelete('cascade')

   tbl
   .integer('taskId')
   .unsigned()
   .notNullable()
   .references(id)
   .inTable('tasks')
   .onUpdate('cascade')
   .onDelete('cascade')
   
   tbl.boolean('completed').default(false)
 }) 
 
 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
