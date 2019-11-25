module.exports = function (sequelize, DataTypes) {

  var lfm = sequelize.define("lfm", {
    youtubeLink: {
      type: DataTypes.STRING,
      allowNull: true
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
    ad: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    instrument: {
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

  lfm.associate = function (models) {
    // code present before deletion of instrument table in DB
    // lfm.belongsTo(models.Instrument);
    lfm.belongsTo(models.Band)
    lfm.belongsTo(models.Member);
  }

  return lfm;
}