const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect : 'sqlite',
    storage : __dirname + '/test.db'
})
const Tasks = db.define('task', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.DataTypes.INTEGER,
  
        
    },
  
})

module.exports = {
    db,Tasks
}
