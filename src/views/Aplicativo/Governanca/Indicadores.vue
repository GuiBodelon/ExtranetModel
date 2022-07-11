<template>
  <section class="row items-start justify-center">
    <h3 class="text-center q-mt-md pageTitle col-12">Calculos de Indicadores</h3>
    <form>
      <div class="col-16 row justify-center items-end q-gutter-md q-mt-md">
        <!---INPUT MÊS DE REFERÊNCIA-->
        <div class="col-6 inputMesrefIndicadores">
          <label for="mesrefIndicadores"><b>Mês de Referência:</b></label>
          <q-input filled v-model="mesrefIndicadores" :date="['mesrefIndicadores']" class="mesrefInput">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover>
                        <q-date v-model="mesrefIndicadores" mask="MM/YYYY" color="green-9" :locale="myLocale" today-btn default-view="Years">
                        <div class="row items-center justify-end">
                            <q-btn v-close-popup label="Fechar" color="primary" flat />
                        </div>
                        </q-date>
                    </q-popup-proxy>
                </q-icon>
            </template>
          </q-input>
        </div>
        <div class="col-2">
          <q-btn :loading="loadingFormulas" outline color="green-9" @click.prevent="pesquisarFormulas" label="Pesquisar" class="btnPesquisarFormulas"/>
        </div>
      </div>
    </form>

    <div class="row justify-center items-center col-md-12 col-sm-6 q-mt-xl q-gutter-lg">
      <!--<div @click="downloadFile()" class="btn btn-dark">Teste de Exportação Excel</div>-->
      <transition name="slide-fade">
        <q-card v-if="responseFormulas.length !== 0" class="col-md-3 col-sm-12" style="min-height:45vh;max-height:45vh;overflow-y:scroll;overflow-x:hidden;">
          <q-card-section>
            <div class="text-h4">Indicadores</div>
          </q-card-section>
          <q-separator />
          <q-spinner-oval v-if="loadingFormulas" color="#ccc" size="5em" class="absolute-center"/>
          <transition name="nested" :duration="{ enter: 500, leave: 800 }">            
            <q-markup-table v-if="!loadingFormulas" class="outer">
              <div class="inner">
                <thead>
                  <tr>
                    <th class="text-left">Fórmula</th>
                    <th class="text-left">Valor</th>
                    <th class="text-right">Visulizar Detalhe</th>
                  </tr>
                </thead>
                <tbody v-for="formula in responseFormulas" :key="formula.id">
                  <td class="text-left">{{ formula.formula_sigla }}</td>
                  <td class="text-left">{{ formula.valor }}</td>
                  <td class="text-center"><q-btn flat icon="fa-solid fa-magnifying-glass" @click="pesquisarDetalheFormula(formula.formula_sigla, formula.formula_fk)"></q-btn></td>
                </tbody>
              </div>
            </q-markup-table>
          </transition>
        </q-card>
      </transition>

      <transition name="slide-fade">
        <q-card v-if="responseDetalheFormula.length !== 0" class="col-md-4 col-sm-12" style="min-height:45vh;max-height:45vh;overflow-y:scroll;overflow-x:hidden;">
          <q-card-section>
            <div class="text-h4">Fórmula utilizada:</div>
          </q-card-section>
          <q-separator />
          <q-spinner-oval v-if="loadingDetalheFormula" color="#ccc" size="5em" class="absolute-center"/>
          <transition name="nested" :duration="{ enter: 500, leave: 800 }">
            <q-card-section v-if="!loadingDetalheFormula" class="outer">
              <q-list dense separator class="inner">
                <q-list v-ripple v-for="item in responseDetalheFormula" :key="(item.id)">
                  <q-item><div class="text-subtitle2">{{ tituloFormula }}</div></q-item>
                  <q-item><div class="text-subtitle2">{{ calculoFormula }}</div></q-item>
                  <q-item><div class="text-subtitle2">Período de Apuração: {{ item.periodo_inicial }} até {{ item.periodo_final }}</div></q-item>
                </q-list>
                <q-separator />
                <q-list v-ripple v-if="!loadingDetalheFormula" v-for="(value, key) in responseWithoutLastFourColumns" :key="key">
                  <q-item>{{ key.toString().toUpperCase().replace('_',' ') }} = {{ value }}</q-item>
                </q-list>
              </q-list>
            </q-card-section>  
          </transition>
        </q-card>
      </transition>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue"
import axiosInstance from "../../../axios"
import Cookies from 'js-cookie'
import { ref } from 'vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import exportFromJSON from 'export-from-json'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { Notify } from 'quasar'

export default defineComponent({
  name: "Indicadores",

  components :{
    RingLoader,
    SyncLoader,
    Datepicker
  },

  data() {
    return {
      darkModeActive: false,
      loadingFormulas: false,
      loadingDetalheFormula: false,
      responseFormulas: [],
      responseDetalhe: [],
      responseDetalheFormula: [],
      responseWithoutLastFourColumns: [],
      rows: [],
      formulaFk: '',
      tituloFormula: '',
      calculoFormula: '',
      mesrefIndicadores: ''
    };
  },

  methods: {
    pesquisarFormulas: function () {
      this.loadingFormulas = true
      this.responseDetalheFormula = []
      const payload = {
        mesref: this.mesrefIndicadores
      }
      axiosInstance({        
        method: 'get',
        url: 'governanca/indicadores/formulas',
        headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
        params: payload
      }).then((response) => {        
          this.responseFormulas = response.data;
          this.rows = response.data;
          this.loadingFormulas = false;
          if(this.responseFormulas.length == 0){
            Notify.create({
              type: 'negative',
              message: 'Não foram encontrados Indicadores para o mês de referência informado.'
            })
          }
      });
    },
    pesquisarDetalheFormula(formula_sigla, formula_fk) {
      this.loadingDetalheFormula = true;
      axiosInstance({
        method: "get",
        url: "governanca/indicadores/"+ formula_sigla.toLowerCase().replace('_','') + '/' + formula_fk,
        headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
      }).then((response) => {
          this.responseDetalheFormula = response.data;
          this.responseDetalhe = response.data;
          this.responseWithoutLastFourColumns = this.responseDetalhe.map(({ detalhe_fk, periodo_final, periodo_inicial, ...item }) => item)[0];      
        axiosInstance({
          method: "get",
          url: "governanca/indicadores/detalhe/" + this.responseDetalhe[0]['detalhe_fk'],
          headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
        }).then((response) => {
          this.tituloFormula = response.data[0]['titulo']
          this.calculoFormula = response.data[0]['calculo']
          this.loadingDetalheFormula = false;
        })
      });
    },
    downloadFile() {
      const data = this.responseFormulas;
      const fileName = "np-data";
      const exportType = exportFromJSON.types.xls;
      if(data) exportFromJSON({ data, fileName, exportType });
    },
  },

  setup() {
      const mesrefIndicadores = ref((new Date().getMonth()+1).toString().padStart(2, '0') + '/' + new Date().getFullYear())
      const yourDateObject = ref((new Date().getMonth()+1).toString().padStart(2, '0') + '/' + new Date().getFullYear())

      const columns = [
        { name: 'fomula', label: 'Fórmula', field: 'Fórmula', sortable: true },
        { name: 'valor', label: 'Valor', field: 'Valor', sortable: true }
      ]
      
      return {
          mesrefIndicadores,
          myLocale: {
              /* starting with Sunday */
              days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
              daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
              months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
              monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
              firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
              format24h: true,
              pluralDay: 'dias',
              columns,
              yourDateObject
          }
      }
  },
});

</script>

<style scoped>
.mesrefInput{
  background: var(--input-bg);
}
.btnPesquisarFormulas{
  color: var(--btn-color);
}
.pageTitle {
  color: var(--text-primary);
}
.inputMesrefIndicadores {
  color: var(--text-primary);
}

.q-field--dense .q-field__after, .q-field--dense .q-field__append {
    padding-left: 16px!important;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


/* rules that target nested elements */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
/* delay enter of nested element for staggered effect */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}
</style>
