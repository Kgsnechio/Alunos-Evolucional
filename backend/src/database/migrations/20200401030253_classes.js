
exports.up = function(knex) {
    return knex.schema.createTable('classes', function (table){

        table.string('id').primary()
        table.string('classeName').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('classes')
};
