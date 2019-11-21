module.exports = function(sequelize, DataTypes) {

    var lfg = sequelize.define("lfg", {
      youtubeLink: {
          type: DataTypes.STRING,
          allowNull: true
      },
      location: {
          type: DataTypes.STRING,
          allowNull: false
      },
      distance: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      ad: {
          type: DataTypes.STRING(2000),
          allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE
      }, 
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE
      } 
    }, {
        freezeTableName: true
      });

      lfg.associate = function (models) {
        lfg.belongsTo(models.Instrument);
        lfg.belongsTo(models.Member)
      }
  
    return lfg;
    }