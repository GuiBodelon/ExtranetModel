<template>
    <section>
        <div class="justify-center">
            <form id="formulario" name="formulario" class="mb-5 text-center">
                <div class="grid gap-6 justify-center" style="padding-top: 2%;">
                    <p class="text-bold text-h6"><em>Selecione o tipo de Registro que deseja consultar:</em></p>
                    <!--SELECT: TIPO DE OPERAÇÃO-->
                    <Transition name="slide-fade">
                        <div v-if="options" class="col-md-6">
                            <div class="row q-gutter-x-md justify-center">
                                <b class="col-md-12">Tipo do Registro:</b>
                                <q-select class="selectTipoOperacao col-md-8" filled v-model="tipoOperacao"
                                    :options="options" label="Selecione o Registro"
                                    @update:model-value="displayGerarRegistro()" style="min-width:500px" />
                            </div>
                        </div>
                    </Transition>
                    <!--FIM SELECT-->
                    <!---DATEPICKER: MÊS DE REFERÊNCIA-->
                    <Transition name="slide-fade">
                        <div v-if="tipoOperacao" class="col-md-6">
                            <div class="row justify-center">
                                <div class="col-md-9">
                                    <b class="float-left">Mês de Referência:</b>
                                </div>
                                <q-input filled v-model="mesrefRegistrosAuxiliares"
                                    :date="['mesrefRegistrosAuxiliares']" mask="##/####" class="mesrefInput col-md-4">
                                    <template v-slot:append>
                                        <q-icon name="event" class="cursor-pointer">
                                            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                                <q-date v-model="mesrefRegistrosAuxiliares" mask="MM/YYYY"
                                                    color="green-9" :locale="myLocale" today-btn default-view="Years">
                                                    <div class="row items-center justify-end">
                                                        <q-btn v-close-popup label="Fechar" color="primary" flat />
                                                    </div>
                                                </q-date>
                                            </q-popup-proxy>
                                        </q-icon>
                                    </template>
                                </q-input>
                                <!---BOTÃO GERAR--->
                                <q-btn
                                    @click.prevent="consultarRegistros(tipoOperacao.value, mesrefRegistrosAuxiliares)"
                                    color="green-9" label="Consultar Registros"
                                    icon-right="fa-solid fa-magnifying-glass" class="col-md-5 q-ml-md" />
                            </div>
                        </div>
                    </Transition>
                    <!---FIM DATEPICKER-->
                    <div class="col-md-6">
                        <div class="row q-gutter-x-lg justify-center">
                            <q-btn color="primary" :disabled="!showGerarBtn" class="col-md-9" icon-right="add_box"
                                label="Gerar Novo Registro" no-caps @click="gerarRegistro()" />
                        </div>
                    </div>
                </div>
            </form>

            <div class="q-pa-md">
                <Transition name="slide-fade">
                    <q-table v-if="rows.length > 0" class="my-sticky-header-table" title="Registros Auxiliares"
                        :rows="rows" :columns="columns" row-key="name" :loading="loadingTable"
                        no-data-label="Sem dados disponíveis. Selecione alguma opção acima para filtrar os dados.">
                        <template v-slot:loading>
                            <q-inner-loading showing color="primary" />
                        </template>
                        <template v-slot:top-right>
                            <q-btn color="primary" icon="refresh" label="Atualizar Tabela" outline no-caps
                                @click="consultarRegistros(tipoOperacao.value, mesrefRegistrosAuxiliares)" />
                        </template>
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="lote" :props="props">
                                    {{ props.row.lote }}
                                </q-td>
                                <q-td key="descricao" :props="props">
                                    {{ props.row.descricao }}
                                </q-td>
                                <q-td key="mesref" :props="props">
                                    {{ props.row.mesref }}
                                </q-td>
                                <q-td key="operador" :props="props">
                                    {{ props.row.operador }}
                                </q-td>
                                <q-td key="data_sistema" :props="props">
                                    {{ props.row.data_sistema }}
                                </q-td>
                                <q-td key="status" :props="props">
                                    <q-badge color="red"
                                        :class="(props.row.status == 'PROCESSAMENTO CONCLUÍDO') ? 'bg-green text-white' : (props.row.status == 'NOVO PROCESSO') ? 'bg-blue text-white' : (props.row.status == 'PROCESSAMENTO COM FALHA') ? 'bg-red text-white' : (props.row.status == 'EM PROCESSAMENTO') ? 'bg-orange text-white' : 'bg-black text-white'">
                                        {{ props.row.status }}
                                    </q-badge>
                                </q-td>
                                <q-td key="lote" :props="props" class="q-gutter-sm">
                                    <q-btn v-if="props.row.status == 'PROCESSAMENTO CONCLUÍDO'"
                                        @click="modalTotalizadorExcel = true; chamarModalTotalizadorExcel(props.row.lote)"
                                        dense color="green-9" icon="fa-solid fa-file-excel" :id="props.row.lote">
                                        <q-tooltip class="text-body2">Gerar Excel</q-tooltip>
                                    </q-btn>
                                    <q-btn v-if="props.row.status == 'PROCESSAMENTO CONCLUÍDO'" dense color="primary"
                                        icon="fa-solid fa-check" @click="gerarRegistroOficial(props.row.lote)">
                                        <q-tooltip class="text-body2">Aprovar como Registro Oficial</q-tooltip>
                                    </q-btn>
                                    <q-btn v-if="props.row.status == 'PROCESSAMENTO COM FALHA'" dense color="negative"
                                        icon="fa-solid fa-eye" :id="props.row.lote">
                                        <q-tooltip class="text-body2">Visualizar motivo da falha</q-tooltip>
                                    </q-btn>
                                </q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </Transition>
            </div>

            <q-dialog v-model="modalTotalizadorExcel" persistent transition-show="scale" transition-hide="scale">
                <q-card class="text-dark" style="min-width:30vw;max-width:50vw;min-height:40vh">
                    <q-card-section class="row items-center q-pb-none">
                        <div class="text-h5 row items-end">
                            <q-icon name="analytics" size="1.6em" class="q-mr-sm"></q-icon><span>Totalizadores</span>
                        </div>
                        <q-space />
                        <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>
                    <q-spinner-oval v-if="totalizadores.length == 0" color="#ccc" size="5em" class="absolute-center" />
                    <q-markup-table v-if="totalizadores.length !== 0">
                        <thead>
                            <tr>
                                <th class="text-left">Tipo de Evento</th>
                                <th class="text-left">Valor do Evento</th>
                                <th class="text-left">Valor Recuperado</th>
                                <th class="text-left">Valor Pagamento</th>
                                <th class="text-left">Valor da Glosa</th>
                            </tr>
                        </thead>
                        <tbody v-for="total in totalizadores" :key="totalizadores.tipo_evento">
                            <tr>
                                <td class="text-left">{{ total.tipo_evento }}</td>
                                <td class="text-left">{{ total.total_evento }}</td>
                                <td class="text-left">{{ total.total_recuperado }}</td>
                                <td class="text-left">{{ total.total_pagamento }}</td>
                                <td class="text-left">{{ total.total_glosas }}</td>
                            </tr>
                        </tbody>
                    </q-markup-table>
                    <q-card-actions class="row" v-if="totalizadores.length !== 0">
                        <div class="col-md-12">
                            <q-btn label="Gerar Excel" icon-right="download" color="primary" class="q-ma-sm float-right"
                                @click="gerarExcel(loteAtual)"></q-btn>
                            <q-btn label="Reportar Problema" icon-right="report" color="negative"
                                class="q-ma-sm float-right"></q-btn>
                        </div>
                    </q-card-actions>
                </q-card>
            </q-dialog>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import axiosInstance from "../../../axios"
import '@vuepic/vue-datepicker/dist/main.css'
import Cookies from 'js-cookie'
import { Notify } from 'quasar'

export default {
    name: 'RegistrosAuxiliares',
    data() {
        return {
            tipoRegistro: '',
            options: [],
            optionsResponse: {},
            tipoOperacao: '',
            showGerarBtn: false,
            rows: [],
            totalizadores: [],
            loteAtual: '',
        }
    },

    mounted() {
        this.feedDropdown()
    },

    methods: {
        feedDropdown() {
            this.options = []
            axiosInstance({
                method: 'get',
                url: 'financeiro/registros-auxiliares/inputs',
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken") },
            })
                .then(response => {
                    this.options = response.data.map(function (item) {
                        return {
                            'value': item.id,
                            'label': item.descricao,
                            'description': item.descricao
                        }
                    })
                    this.options.push({
                        'value': 'A',
                        'label': 'VISUALIZAR TODOS OS REGISTROS',
                        'description': 'VISUALIZAR TODOS OS REGISTROS',
                    })
                })
        },
        consultarRegistros(tipoOperacao, mesref) {
            if (tipoOperacao) {
                this.loadingTable = true
                const payload = {
                    tipoOperacao: tipoOperacao,
                    mesref: mesref
                }
                axiosInstance({
                    method: 'get',
                    url: 'financeiro/registros-auxiliares/tabela-lote',
                    headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken") },
                    params: payload
                })
                    .then(response => {
                        this.loadingTable = false
                        this.rows = response.data
                    })
            }
        },
        displayGerarRegistro() {
            if (this.tipoOperacao.value == 'A') {
                this.showGerarBtn = false;
            } else {
                this.showGerarBtn = true;
            }
        },
        gerarRegistro() {
            this.loadingTable = true
            const payload = {
                mesref: this.mesrefRegistrosAuxiliares,
                operacao: this.tipoOperacao.value
            };
            axiosInstance({
                method: 'post',
                url: 'financeiro/registros-auxiliares/gerar-registro',
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken") },
                params: payload
            }).then((response) => {
                if (response.data.result == true) {
                    Notify.create({
                        type: 'positive',
                        message: 'Novo registro gerado com sucesso!'
                    })
                    this.consultarRegistros(response.data.operacao, this.mesrefRegistrosAuxiliares)
                } else {
                    Notify.create({
                        type: 'negative',
                        message: 'Ocorreu um erro inesperado, por favor tente novamente.'
                    })
                }
            })
            this.loadingTable = false
        },
        chamarModalTotalizadorExcel(lote) {
            this.loteAtual = lote
            this.totalizadores = []
            const payload = {
                lote_fk: lote
            }
            axiosInstance({
                method: 'get',
                url: 'financeiro/registros-auxiliares/eventos-pagos/totalizador',
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken") },
                params: payload
            }).then((response) => {
                this.totalizadores = response.data
            })
        },
        gerarExcel(lote) {
            const notificacaoExcel = Notify.create({
                group: false,
                spinner: true,
                timeout: 0,
                message: 'O Excel esta sendo gerado, por favor aguarde.'
            })
            const payload = {
                lote_fk: lote
            }
            axiosInstance({
                method: 'get',
                url: 'financeiro/registros-auxiliares/eventos-pagos/gerar-excel/filename',
                headers: {
                    Authorization: 'Bearer ' + Cookies.get("authorizerToken")
                },
                params: payload
            })
                .then((response) => {
                    const filename = response.data.map(function (item) {
                        return item.descricao + ' - Mês de Referencia - ' + item.mesref + ' - Lote - ' + item.lote
                    })
                    axiosInstance({
                        method: 'get',
                        url: 'financeiro/registros-auxiliares/eventos-pagos/gerar-excel',
                        headers: {
                            Authorization: 'Bearer ' + Cookies.get("authorizerToken")
                        },
                        params: payload,
                        responseType: 'blob'
                    })
                        .then((response) => {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', filename + '.xlsx'); //or any other extension
                            document.body.appendChild(link);
                            link.click();
                            notificacaoExcel({
                                type: 'positive',
                                icon: 'done',
                                spinner: false,
                                message: 'Excel gerado com sucesso!',
                                timeout: 2500
                            })
                        })

                })
        },



        gerarRegistroOficial(lote) {
            const payload = {
                lote: lote
            }
            axiosInstance({
                method: 'post',
                url: 'financeiro/registros-auxiliares/gerar-registro-oficial',
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken") },
                params: payload
            }).then((response) => {
                if (response.data[0].registroExistente == 'true') {
                    Notify.create({
                        message: response.data[0].mensagem,
                        type: 'negative',
                        timeout: 10000,
                        progress: true,
                        actions: [
                            { label: 'Não', color: 'white', handler: () => { /* ... */ } },
                            { label: 'Sim', color: 'white', handler: () => { /* ... */ } }
                        ]
                    });
                } else {
                    Notify.create({
                        message: response.data[0].mensagem,
                        type: 'positive',
                    })
                }
            })
        },
    },

    setup() {
        const mesrefRegistrosAuxiliares = ref((new Date().getMonth() + 1).toString().padStart(2, '0') + '/' + new Date().getFullYear())

        const columns = [
            //{name: 'id', required: true, label: 'Lote', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true},
            { name: 'lote', required: true, align: 'left', label: 'Lote', field: 'lote', sortable: true },
            { name: 'descricao', align: 'left', label: 'Descrição', field: 'descricao', sortable: true },
            { name: 'mesref', align: 'center', label: 'Mês de Referência', field: 'mesref', sortable: true },
            { name: 'operador', align: 'left', label: 'Operador', field: 'operador', sortable: true },
            { name: 'data_sistema', align: 'center', label: 'Data Sistema', field: 'data_sistema', sortable: true },
            { name: 'status', align: 'left', label: 'Status', field: 'status', sortable: true },
            { name: 'acoes', align: 'center', label: 'Ações', field: 'acoes', sortable: false },
            //{ name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
        ]

        return {
            tipoRegistro: ref(null),
            registrosOptions: [
                {
                    label: 'Conferência',
                    value: 'C'
                },
                {
                    label: 'Oficiais',
                    value: 'O'
                }
            ],
            loadingTable: ref(false),
            columns,
            mesrefRegistrosAuxiliares,
            myLocale: {
                /* starting with Sunday */
                days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
                daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
                months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
                monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
                firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
                format24h: true,
                pluralDay: 'dias'
            },
            modalNovoRegistro: ref(false),
            modalTotalizadorExcel: ref(false)
        }
    }
}

</script>

<style scoped>
form {
    color: var(--text-primary);
}

.selectTipoOperacao,
.mesrefInput {
    background: var(--input-bg);
}

.btnGerarRegistro {
    color: var(--btn-color);
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
