
exports.up = function(knex) {
    return knex.schema.createTable('degrees', function (table){

        table.string('id').primary()
        table.string('degreeName').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('degrees')
};
