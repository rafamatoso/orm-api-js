var express = require('express');
var router = express.Router();
var model = require('../models/index')

/* GET Alunos */
router.get('/', function (req, res, next) {
  model.Aluno.findAll({})
      .then(alunos => res.json({
          error: false,
          data: alunos
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});

/* Post New Aluno */
router.post('/', function (req, res, next) {
  const {
      nome,
      matricula,
      cpf,
      dn
  } = req.body;
  model.Aluno.create({
          nome: nome,
          matricula: matricula,
          cpf: cpf,
          dn: dn
      })
      .then(aluno => res.status(201).json({
          error: false,
          data: aluno,
          message: 'Novo Aluno foi criado.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});

/* Update Aluno data */
router.put('/:id', function (req, res, next) {
  const aluno_id = req.params.id;
  const { nome, matricula, cpf, dn } = req.body;
  model.Aluno.update({
          nome: nome,
          matricula: matricula,
          cpf: cpf,
          dn: dn
      }, {
          where: {
              id: aluno_id
          }
      })
      .then(user => res.status(201).json({
          error: false,
          message: 'Dados do Aluno foi atualizado'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

/* Delete Aluno data */
router.delete('/:id', function (req, res, next) {
      const aluno_id = req.params.id;
      model.Aluno.destroy({ where: {
          id: aluno_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'Aluno foi deletado'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;
