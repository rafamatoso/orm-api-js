"use strict";
module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define(
    "alunos",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      matricula: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dn: DataTypes.DATE
    },
    {}
  );
  Aluno.associate = function(models) {
    // Associations can be defined here
  };
  return Aluno;
};
