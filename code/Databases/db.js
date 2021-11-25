const knex = require('knex')({
    client: 'mysql',
    connection: {
        host:'localhost',
        user:'root' ,
        database:'demo1'
    },
    useNullAsDefault: true
});
knex.schema.createTable("userdata1", (table) => {
    table.increments('id').primary();
    table.string('Name')
    table.string('email')
    table.string('password');
})
    .then((data) => {
        console.log("Table Created");
    })
    .catch((err) => {
        console.log("Table Already Exist!!");
    })

module.exports = knex;