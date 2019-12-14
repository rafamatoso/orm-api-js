"use strict";
module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define(
    "disciplinas",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      turno: DataTypes.STRING,
      cod_disc: DataTypes.STRING
    },
    {}
  );
  Disciplina.associate = function(models) {
    // Associations can be defined here
  };
  return Disciplina;
};
