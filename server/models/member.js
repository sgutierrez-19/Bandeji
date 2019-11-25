module.exports = function (sequelize, DataTypes) {

  var Member = sequelize.define("Member", {
    memberName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdByUserId: {
      allowNull: false,
      type: DataTypes.INTEGER
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
    // code present before deletion of instrument table in DB
    // Member.belongsToMany(models.Instrument, {
    //   through: models.MemberInstrument
    // });

    // code added after delection of instrument table in DB
    Member.hasMany(models.MemberInstrument);
    Member.hasMany(models.lfm)
  };

  return Member;
};