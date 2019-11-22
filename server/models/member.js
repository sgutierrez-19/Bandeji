module.exports = function (sequelize, DataTypes) {

  var Member = sequelize.define("Member", {
    memberName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
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

  Member.associate = function (models) {
    Member.belongsToMany(models.Band, {
      through: models.BandMember
    });
    Member.hasMany(models.lfg);
    Member.belongsTo(models.User);
    Member.belongsToMany(models.Instrument, {
      through: models.MemberInstrument
    });
  };

  return Member;
};

    // Candle.associate = function (models) {
    //   Candle.belongsTo(models.User);
    // }
