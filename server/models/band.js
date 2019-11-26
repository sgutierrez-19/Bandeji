module.exports = function (sequelize, DataTypes) {

  var Band = sequelize.define("Band", {
    bandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandPicture: {
      type: DataTypes.STRING,
      allowNull: true,
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

  Band.associate = function (models) {
    Band.belongsToMany(models.Member, {
      through: models.BandMember
    });
    Band.hasMany(models.lfm);
    Band.belongsTo(models.User)
  };

  return Band;
};