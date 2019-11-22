module.exports = function(sequelize, DataTypes) {

  var Band = sequelize.define("Band", {
    bandName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
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

  Band.associate = function(models) {
    Band.belongsToMany(models.Member, {
        through: models.BandMember
    });
    Band.hasMany(models.lfm);
};

  return Band;
};