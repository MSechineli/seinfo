import axios from 'axios'
import moment from "moment";
moment.locale("pt-br");
let id = 0;
let flag = 0;
export default {
  mounted(){ // v
    this.pegar_tabela ()
    },
  props: {
    disabled: Boolean
  },
  
  data () {
    return {
      res: [],
      active: false,
      data_ini_eve: "",
      data_fim_eve: "",
      hora_ini_eve: "",
      hora_fim_eve: "",
      local_eve: "",
      idEvento: "",
      descricao: "",
      pegou: false,
      modalVisible: false,
      modalVisible2: false,
      active: false,
      nomeEvento: "",
      modalData: {
        idEvento: "",
        nome: "",
        data_ini_eve: "",
        data_fim_eve: "",
        hora_ini_eve: "",
        hora_fim_eve: "",
        status: "",
        local_eve: "",
        descricao: ""
      },
      objeto_lote: [],
      formItemLayout: {
        labelCol: {
        },
        wrapperCol: {
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
        },
      },
       obj_Resource: {
        nome: "",
        data_ini: "",
        hora_ini: "",
        data_fim: "",
        hora_fim: "",
        local_eve: "",
        select_status: "",
        urlImagem: "",
        descricao: "",
      },
    };
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator('keys', { initialValue: [], preserve: true });
  },
    methods: {

    pegar_tabela() { // v
      axios
        .get("http://localhost:3000/api/eventos")
        .then(response => {
          // console.log(response.data);
          this.res = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

 
  },
  
};