module.exports = function(sequelize, DataTypes) {

    var lfm = sequelize.define("lfm", {
      youtubeLink: {
          type: DataTypes.STRING,
          allowNull: true
      },
      location: {
          type: DataTypes.STRING,
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

      lfm.associate = function (models) {
        lfm.belongsTo(models.Instrument);
        lfm.belongsTo(models.Band)
      }
  
    return lfm;
    }