module.exports = function(app) {
 
    const presenca = require('../controllers/presenca.controller.js');
  
    app.post('/api/presenca', presenca.create);
    
    app.get('/api/pessoa/:idAtividade/:idAgenda/:idEvento/:CPF', presenca.findById);

    app.get('/api/presencas', presenca.findAll);
  
    app.delete('/api/presenca', presenca.delete); 
}
  