module.exports = (sequelize, Sequelize) => {
    const Agenda = sequelize.define('agenda', {
      idAgenda: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'idAgenda'
      },
      dataHoraInicio: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'dataHoraInicio'
      },
      dataHoraFim: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'dataHoraFim'
      },
      local: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'local'
      },
      horasParticipacao: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: '00:00:00',
        field: 'horasParticipacao'
      },
      quantidadeVagas: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: '0',
        field: 'quantidadeVagas'
      }
  },
  { //Isso serve para não recriar a tabela e impedir de recriar esses atributos setados como false(timestamps,createdAt)
    tableName: 'agenda',
    timestamps: false,
    createdAt: false,
  });
  
  Agenda.associate = models=>{
    models.agenda.model.hasMany(
      //adiciona idAgenda na tabela agendamentoEvento
        models.agendamentoEvento.model,{
            foreignKey: 'idAgenda'
        },
        //adiciona idAgenda na tabela agendamentoAtividade
        models.agendamentoAtividade.model,{
            foreignKey: 'idAgenda'
        }
    )
  }

  return Agenda;
}
