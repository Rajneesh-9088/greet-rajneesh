const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/test.db'
})
const Tasks = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defautlValue: false
    }
})

module.exports = {
    db,Tasks
}
