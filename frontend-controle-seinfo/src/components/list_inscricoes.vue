<template>
  <div>
    <h3>Meus eventos</h3>
    <div id="list" class="row">
      <div class="table-responsive col-md-12">
        <table class="table table-striped" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th style="width:35%">Nome</th>
              <th style="text-align: left;">Status</th>
              <th style="text-align:center" class="actions">Ações</th>
            </tr>
          </thead>
          <tbody v-for="(res/*,i*/) in res_localizar" :key="res.idEvento">
            <tr style="background-color:white;">
              <td>{{res.eventoInsc.nome}}</td>
              <td>
                <!-- <a-progress type="circle" :percent="100" status="success" :width="33" /> -->
                <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" style="font-size: 32px; margin-left: 5px;" />

              </td>
              <td style="text-align:center;" class="actions">
                <a-button type="button" class="ic" @click="redirectAtv(res.idEvento, CPF)" > VER ATIVIDADES </a-button>
                <!-- <a-button style="text-align:right" type="button" class="ic" @click="teste(res.idEvento)" >VER ATIVIDADES </a-button> -->
                <a-button type="button" class="dl" @click="showDeleteConfirm(res.idEvento)"> CANCELAR INSCRIÇÃO </a-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
const axios = require("axios");
const columns = [
  {
    title: "Nome do Evento",
    dataIndex: "nome",
    width: 200, //test
  },
  {
    title: "Data do Evento",
    dataIndex: "data",
    width: 200,
  },
  {
    title: "Status do Evento",
    dataIndex: "status",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 200,
    scopedSlots: { customRender: "action" },
  },
  {
    title: "Valor",
    dataIndex: "",
  },
];
const auth = require("../services/auth");
export default {
  mounted() {
    this.pegarPerfil();
    this.pegar_tabela();
  },
  methods: {
    redirectAtv(idEvento, CPF){
      //console.log(idEvento, CPF);
      this.$router.push({ path: `/usuario/atvHome/${idEvento}/${CPF}`})
    },
    exclusao(id) {
      axios
        .delete(`http://localhost:3000/api/inscEv/${id}/${this.CPF}`)
        .then((response) => {
          console.log(response.data);
          this.pegar_tabela("eventosD");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async pegarPerfil() {
      await auth.default.getUser().then(res => {
        this.CPF = res.CPF;
        this.pegar_tabela();
      })
      //console.log("USER:", user)
      //this.CPF = user.CPF;
    },
    showDeleteConfirm(id) {
        var cpfPessoa = this.CPF;
        this.$confirm({
        title: "Deseja remover sua inscrição?",
        content: "Essa ação não poderá ser desfeita!",
        okText: "Sim",
        okType: "danger",
        cancelText: "Voltar",
        onOk() {
          axios
            .delete(`http://localhost:3000/api/inscEv/${id}/${cpfPessoa}`)
            .then((response) => {
              console.log(response.data);
              document.location.reload(true);
            })
            .catch(function (error) {
              console.log(error);
            });
          
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    openModal(data) {
      this.modalData = data;
      this.modalVisible = true;
    },
    pegar_tabela() {
      axios
        .get(`http://localhost:3000/api/inscEvP/${this.CPF}`)
        .then((response) => {
          console.log("Listou ");
          console.log(response.data);
          this.res_localizar = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  data() {
    return {
      res_localizar: [],
      columns,
      tabelas: [],
      modalVisible: false,
      modalData: "",
      CPF: "",
    };
  },
};
</script>

<style scoped>
.ic {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(157, 211, 157, 0.5);
  border: 2px solid rgb(64, 212, 64);
  color: black;
  cursor: pointer;
}
.ic:hover {
  color: white;
  background-color: rgb(64, 212, 64);
}
.dl {
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(236, 69, 69, 0.5);
  border: 2px solid rgb(236, 69, 69);
  color: black;
  cursor: pointer;
  padding-top: 1.3px;
}
.dl:hover {
  color: white;
  background-color: rgb(236, 69, 69);
}
</style>