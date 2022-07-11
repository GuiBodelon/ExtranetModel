<template>
    <section class="px-4">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mb-5 items">
            <div class="md:col-span-3 sm:col-span-1 text-center my-3">
                <h4>Assessoria Médica</h4>
            </div>
            <div>
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center border-radius-xl iconLeft absolute">
                            <i class='bx bxs-bar-chart-alt-2'></i>
                        </div>
                        <div class="text-center w-full">
                            <span class="mb-0 text-bold fs-4">891</span>
                            <p class="text-sm mb-0 text-capitalize">Total de Beneficiários Inscritos em Programas</p>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-1 flex align-content-center">
                        <p class="mb-1"><span class="text-positive text-bold">+12% </span>do que na semana passada</p>
                    </div>
                </div>
            </div>            
            <div>
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center iconLeft absolute">
                            <i class='bx bxs-pie-chart-alt-2'></i>
                        </div>
                        <div class="text-center w-full">
                            <span class="mb-0 text-bold fs-4">-55</span>
                            <p class="text-sm mb-0 text-capitalize">Beneficiários em Atendimento Domiciliar</p>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-1 flex align-content-center">
                        <p class="mb-1"><span class="text-negative text-bold">-27% </span>do que na semana passada</p>
                    </div>
                </div>
            </div> 
            <div>
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center iconLeft absolute">
                            <i class='bx bxs-phone-call'></i>
                        </div>
                        <div class="text-center w-full">
                            <span class="mb-0 text-bold fs-4">248</span>
                            <p class="text-sm mb-0 text-capitalize">Quantidade de Ligações realizadas</p>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-1 flex align-content-center">
                        <p class="mb-1"><span class="text-positive text-bold">+19% </span>do que na semana passada</p>
                    </div>
                </div>
            </div> 
        </div>
        <!-------------------------------------------->
        <hr class="dark horizontal my-0">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mb-5 my-5">
            <div class="md:col-span-3  sm:col-span-1 text-center my-3">
                <h4>Auditoria</h4>
            </div>
            <div>
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center iconLeft absolute">
                            <i class='bx bx-bar-chart-square' ></i>
                        </div>
                        <div class="container">
                            <div class="row">
                                <p class="mb-0 w-full q-pt-md text-left fs-3">Média diária de guias para análise nos ultimos dias</p>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="flex w-full items-baseline mb-3 ">
                                    <span class="mr-auto text-bold">14 Dias atrás</span>
                                    <span class="mr-3">783 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-down text-bold text-negative" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex w-full items-baseline mb-3">
                                    <span class="mr-auto text-bold">7 Dias atrás</span>
                                    <span class="mr-3">821 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-down text-bold text-positive" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex w-full items-baseline">
                                    <span class="mr-auto text-bold">Hoje</span>
                                    <span class="mr-3">528 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-down text-bold text-negative" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-2 flex align-content-center justify-center">
                        <p class="mb-3 text-bold">Faltam <span class="fs-4 px-2">3</span> dias para finalização da contagem</p>
                    </div>
                </div>
            </div> 
            <div class="grid grid-rows-2 grid-flow-col gap-4">
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center border-radius-xl iconLeft absolute">
                            <i class='bx bxs-bar-chart-alt-2'></i>
                        </div>
                        <div class="text-center w-full">
                            <span class="mb-0 text-bold fs-4">13</span>
                            <p class="text-sm mb-0 text-capitalize">Quantidade de Guias pendentes para Análise</p>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-1 flex align-content-center">
                        <p class="mb-0"><a class="float-right flex text-decoration-none text-bold">Visualizar&nbsp;<i class='bx bx-show pl' style="font-size: 1.4rem;"></i></a></p>
                    </div>
                </div>                         
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center iconLeft absolute">
                            <i class='bx bxs-pie-chart-alt-2'></i>
                        </div>
                        <div class="text-center w-full">
                            <span class="mb-0 text-bold fs-4">-55</span>
                            <p class="text-sm mb-0 text-capitalize">Beneficiários em Atendimento Domiciliar</p>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-1 flex align-content-center">
                        <p class="mb-1"><span class="text-negative text-bold">-27% </span>do que na semana passada</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="card">
                    <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center iconLeft absolute">
                            <i class='bx bx-bar-chart-square' ></i>
                        </div>
                        <div class="container">
                            <div class="row">
                                <p class="mb-0 w-full q-pt-md text-left fs-3">Média diária de guias analisada nos ultimos dias</p>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="flex w-full items-baseline mb-3">
                                    <span class="mr-auto text-bold">14 Dias atrás</span>
                                    <span class="mr-3">783 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-down text-bold text-negative" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex w-full items-baseline mb-3">
                                    <span class="mr-auto text-bold">7 Dias atrás</span>
                                    <span class="mr-3">821 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-up text-bold text-positive" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex w-full items-baseline">
                                    <span class="mr-auto text-bold">Hoje</span>
                                    <span class="mr-3">528 Guias</span>     
                                    <div class="icon icon-lg icon-shape bg-gradient-metric text-center">
                                        <i class="fa-solid fa-arrow-trend-down text-bold text-negative" style="font-size:2rem;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="dark horizontal my-0">
                    <div class="card-footer px-3 py-2 flex align-content-center justify-center">
                        <p class="mb-3 text-bold">Faltam <span class="fs-4 px-2">3</span> dias para finalização da contagem</p>
                    </div>
                </div>
            </div>            
            <div class="card">
                <div class="card-header p-3 pt-2">
                    <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center border-radius-xl iconLeft absolute">
                        <i class='bx bxs-bar-chart-alt-2'></i>
                    </div>
                    <div class="text-center w-full">
                        <span class="mb-0 text-bold fs-4">13</span>
                        <p class="text-sm mb-0 text-capitalize">Quantidade de Guias pendentes para Análise</p>
                    </div>
                </div>
                <hr class="dark horizontal my-0">
                <div class="card-footer px-3 py-1 flex align-content-center">
                    <p class="mb-0"><a class="float-right flex text-decoration-none text-bold">Visualizar&nbsp;<i class='bx bx-show pl' style="font-size: 1.4rem;"></i></a></p>
                </div>
            </div>
        </div>
        <!-------------------------------------------->
        <hr class="dark horizontal my-0">
        <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mb-5 my-5">
            <div class="md:col-span-3  sm:col-span-1 text-center my-3">
                <h4>Autorização</h4>
            </div>
            <div class="card">
                <div class="card-header p-3 pt-2">
                    <div class="icon icon-lg icon-shape bg-gradient-dark shadowIcon text-center border-radius-xl iconLeft absolute">
                        <i class='bx bxs-bar-chart-alt-2'></i>
                    </div>
                    <div class="text-center w-full">
                        <span class="mb-0 text-bold fs-4">13</span>
                        <p class="text-sm mb-0 text-capitalize">Quantidade de Guias pendentes para Análise</p>
                    </div>
                </div>
                <hr class="dark horizontal my-0">
                <div class="card-footer px-3 py-1 flex align-content-center">
                    <p class="mb-0"><a class="float-right flex text-decoration-none text-bold">Visualizar&nbsp;<i class='bx bx-show pl' style="font-size: 1.4rem;"></i></a></p>
                </div>
            </div>

            Média diária de guias para análise nos ultimos dias

            Média de guias analisada por dia nos ultimo dias

            Tempo médido de análise de guia de SADT

            Tempo médido de análise de guia de Internação
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'DashboardAssessoriaMedica',

})
</script>

<style scoped>
h4{
    color: var(--text-primary);
}
hr{
    color: var(--text-primary)
}
a{
    color: var(--card-font-color);
}
a:hover{
    filter: invert(100%);
}
.card{
    border-radius: 0.75rem;
    color: var(--card-font-color);
    background: var(--card-bg);
    box-shadow: var(--card-shadow);
}
.card-header{
    margin-bottom: 0;
    background-color: transparent;
    border-bottom: 0 solid rgba(0,0,0,.125);
}
.card-header:first-child {
    border-radius: 0.75rem 0.75rem 0 0;
}
.card-footer{
    background-color: transparent;
}
.card-footer:last-child {
    border-radius: 0 0 0.75rem 0.75rem;
}
.border-radius-xl {
    border-radius: 0.75rem;
}
.icon-shape {
    width: 48px;
    height: 48px;
    background-position: 50%;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.bg-gradient-primary {
    background-image: linear-gradient(195deg,#ec407a,#d81b60);
}
.bg-gradient-dark {
    background-image: linear-gradient(195deg,#42424a,#191919);
}
.bg-gradient-metric {
    box-shadow: var(--card-shadow);
}
.shadowIcon{
    box-shadow: var(--card-shadow);
}
.bg-gradient-success {
    background-image: linear-gradient(195deg,#66bb6a,#43a047);
}
.bg-gradient-info {
    background-image: linear-gradient(195deg,#49a3f1,#1a73e8);
}
.iconRight {
    margin-top: -1.5rem!important;
    margin-right: 1.5rem;
    right: 0;
}
.iconLeft {
    margin-top: -1.5rem!important;
}

.icon{
    display: inline-block;
}
.icon-lg i,.icon-lg svg {
    font-size: 1.5rem;
    top: 31%;
}
.icon-shape i, .icon-shape svg {
    color: #fff;
    opacity: .8;
    top: 11px;
    position: relative;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>