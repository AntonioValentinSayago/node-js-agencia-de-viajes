import  Sequelize  from "sequelize";

const db = new Sequelize('agencia_viajes_node_js', 'root', '123456789', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db