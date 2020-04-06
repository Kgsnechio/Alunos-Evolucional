exports.up = function(knex) {
  return knex.schema.createTable('students', function (table){

    table.increments().primary()
    table.string('ra').notNullable()
    table.string('name').notNullable()
    table.string('degreeId').notNullable()
    table.string('classId').notNullable()

    table.foreign('degreeId').references('id').inTable('degrees')
    table.foreign('classId').references('id').inTable('classes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('students')
};
