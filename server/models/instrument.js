module.exports = function(sequelize, DataTypes) {

    var Instrument = sequelize.define("Instrument", {
      instrumentName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]  
        }
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
  
    Instrument.associate = function (models) {
      Instrument.hasMany(models.lfg);
      Instrument.hasMany(models.lfm);
      Instrument.hasMany(models.GroupMember);
      Instrument.belongsToMany(models.Member, {
        through: models.MemberInstrument
      });
    }
  
    return Instrument;
  };
  
    // Candle.associate = function (models) {
    //   Candle.belongsTo(models.User);
    // }
  