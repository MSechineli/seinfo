import axios from 'axios';
import listagem from '../../atividades/listagem/listagem.vue';
import moment from 'moment';
moment.locale('pt-br');

export default {
  data() {
    return {
      dataRoute: [],
      res: []

    };
  },
  components: {
    listagem
  },

  methods: {
    renderData(data){
      return moment(data).format("DD/MM/YYYY")
    },

    renderHora(data){
      return moment(data).format("HH:mm")
    },

    getEvento() {

      //this.dataRoute = this.$route.params.data;
      axios
        .get("http://localhost:3000/api/atividade/" + this.$route.params.id)
        .then(response => {
          this.res = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      axios
        .get("http://localhost:3000/api/evento/" + this.$route.params.id)
        .then(response => {
          this.dataRoute = response.data;
          console.log(this.daraRoute);
        })
        .catch(function (error) {
          console.log(error);
        });
        

      if (this.dataRoute == null) {
        this.$router.replace("/adm/eventos");
        location.reload();
      }
    },
  },

  beforeCreated() {
  },

  mounted() {
    this.getEvento();
  },

};