import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//import Guard from '../services/middleware'
import Cookies from 'js-cookie';

//IMPORTS TELA DE LOGIN
import Login from '../views/Login.vue'
import LoginForm from '../views/Login/LoginForm.vue'
import EsqueceuSenha from '../views/Login/EsqueceuSenha.vue'

//IMPORTS APLICATIVO
import Aplicativo from '../views/Aplicativo.vue'
import Perfil from '../views/Aplicativo/Perfil.vue'

//////IMPORT DASHBOARDS
import Dashboards from '../views/Aplicativo/Dashboards.vue'

//IMPORTS ASSESSORIA MÉDICA
import AssessoriaMedica from '../views/Aplicativo/AssessoriaMedica/AssessoriaMedica.vue'
import DashboardAssessoriaMedica from '../views/Aplicativo/AssessoriaMedica/DashboardAssessoriaMedica.vue'

//IMPORTS AUDITORIA
import Auditoria from '../views/Aplicativo/Auditoria/Auditoria.vue'
import DashboardAuditoria from '../views/Aplicativo/Auditoria/DashboardAuditoria.vue'

//IMPORTS AUTORIZAÇÃO
import Autorizacao from '../views/Aplicativo/Autorizacao/Autorizacao.vue'
import DashboardAutorizacao from '../views/Aplicativo/Autorizacao/DashboardAutorizacao.vue'

//IMPORTS CADASTRO
import Cadastro from '../views/Aplicativo/Cadastro/Cadastro.vue'
import DashboardCadastro from '../views/Aplicativo/Cadastro/DashboardCadastro.vue'

//IMPORTS COMUNICAÇÃO
import Comunicacao from '../views/Aplicativo/Comunicacao/Comunicacao.vue'
import DashboardComunicacao from '../views/Aplicativo/Comunicacao/DashboardComunicacao.vue'

//IMPORTS CONTAS MÉDICAS
import ContasMedicas from '../views/Aplicativo/ContasMedicas/ContasMedicas.vue'
import DashboardContasMedicas from '../views/Aplicativo/ContasMedicas/DashboardContasMedicas.vue'

//IMPORTS CREDENCIAMENTO
import Credenciamento from '../views/Aplicativo/Credenciamento/Credenciamento.vue'
import DashboardCredenciamento from '../views/Aplicativo/Credenciamento/DashboardCredenciamento.vue'

//IMPORTS GOVERNANÇA
import Governanca from '../views/Aplicativo/Governanca/Governanca.vue'
import DashboardGovernanca from '../views/Aplicativo/Governanca/DashboardGovernanca.vue'
import Indicadores from '../views/Aplicativo/Governanca/Indicadores.vue'
import Teste from '../views/Aplicativo/Governanca/Teste.vue'

//IMPORTS FINANCEIRO
import Financeiro from '../views/Aplicativo/Financeiro/Financeiro.vue'
import DashboardFinanceiro from '../views/Aplicativo/Financeiro/DashboardFinanceiro.vue'
import RegistrosAuxiliares from '../views/Aplicativo/Financeiro/RegistrosAuxiliares.vue'

//IMPORTS RECURSO DE GLOSA
import RecursoDeGlosa from '../views/Aplicativo/RecursoDeGlosa/RecursoDeGlosa.vue'
import DashboardRecursoDeGlosa from '../views/Aplicativo/RecursoDeGlosa/DashboardRecursoDeGlosa.vue'

//IMPORTS RECURSOS HUMANOS
import RH from '../views/Aplicativo/RH/RH.vue'
import DashboardRH from '../views/Aplicativo/RH/DashboardRH.vue'

//IMPORTS SABE
import SABE from '../views/Aplicativo/SABE/SABE.vue'
import DashboardSABE from '../views/Aplicativo/SABE/DashboardSABE.vue'

//IMPORTS TI
import TI from '../views/Aplicativo/TI/TI.vue'
import DashboardTI from '../views/Aplicativo/TI/DashboardTI.vue'
import ManutencaoMenus from '../views/Aplicativo/TI/ManutencaoMenus.vue'

//IMPORTS TREINAMENTO
import Treinamento from '../views/Aplicativo/Treinamento/Treinamento.vue'
import DashboardTreinamento from '../views/Aplicativo/Treinamento/DashboardTreinamento.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    children: [
      {
        path: '/',
        name: 'LoginForm',
        component: LoginForm,
        meta: { transition: 'slide-left'},
      },
      {
        path: 'esqueceu-a-senha',
        name: 'Esqueceu a Senha',
        component: EsqueceuSenha,
        meta: { transition: 'slide-right'},
      },
    ]
  },

  /////ROTAS DO APLICATIVO APÓS AUTENTICAÇÃO DO USUÁRIO
  {
    path: '/aplicativo',
    component: Aplicativo,    
    children: [    
      /////ROTA DASHBOARDS DO USUÁRIO
      {
        path: '/dashboards',
        name: 'Dashboards',
        component: Dashboards,
        meta: { requiresAuth: true },
      },
      /////ROTA PERFIL DO USUÁRIO
      {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil,
        props: true,
      },

      /////ROTAS ASSESSORIA MÉDICA
      {
        path: '/dashboards',
        name: 'Asessoria Médica',
        component: AssessoriaMedica,
        children: [
          {
            path: '/dashboard-assessoria-medica',
            name: 'Dashboard Assessoria Medica',
            component: DashboardAssessoriaMedica
          },
        ]
      },

      /////ROTAS AUDITORIA
      {
        path: '/dashboards',
        name: 'Auditoria',
        component: Auditoria,
        children: [
          {
            path: '/dashboard-auditoria',
            name: 'Dashboard Auditoria',
            component: DashboardAuditoria
          },
        ]
      },

      /////ROTAS AUTORIZAÇÃO
      {
        path: '/autorizacao',
        name: 'Autorização',
        component: Autorizacao,
        children: [
          {
            path: '/dashboard-autorizacao',
            name: 'Dashboard Autorizacao',
            component: DashboardAutorizacao,
          }
        ]
      },

      /////ROTAS CADASTRO
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
        children: [
          {
            path: '/dashboard-cadastro',
            name: 'Dashboard Cadastro',
            component: DashboardCadastro
          },
        ]
      },

      /////ROTAS COMUNICAÇÃO
      {
        path: '/comunicacao',
        name: 'Comunicação',
        component: Comunicacao,
        children: [          
          {
            path: '/dashboard-comunicacao',
            name: 'Dashboard Comunicacao',
            component: DashboardComunicacao
          },
        ]
      },

      /////ROTAS CONTAS MÉDICAS
      {
        path: '/contas-medicas',
        component: ContasMedicas,
        name: 'Contas Médicas',
        children: [
          {
            path: '/dashboard-contas-medicas',
            name: 'Dashboard Contas Medicas',
            component: DashboardContasMedicas
          },
        ]
      },

      /////ROTAS CREDENCIAMENTO
      {
        path: '/credenciamento',
        name: 'Credenciamento',
        component: Credenciamento,        
        children: [
          {
            path: '/dashboard-credenciamento',
            name: 'Dashboard Credenciamento',
            component: DashboardCredenciamento
          }
        ]
      },
      
      /////ROTAS Governanca
      {
        path: '/Governanca',
        name: 'Governança',
        component: Governanca,
        children: [
          {
            path: '/dashboard-governanca',
            name: 'Dashboard Governanca',
            component: DashboardGovernanca,
          },
          {
            path: '/indicadores',
            name: 'Indicadores',
            component: Indicadores,
          },
          {
            path: '/teste',
            name: 'Teste',
            component: Teste,
          },
        ]
      },      

      /////ROTAS FINANCEIRO
      {
        path: '/financeiro',
        name: 'Financeiro',
        component: Financeiro,
        children: [  
          {        
            path: '/dashboard-financeiro',
            name: 'Dashboard Financeiro',
            component: DashboardFinanceiro
          },
          {        
            path: '/registros-auxiliares',
            name: 'Registros Auxiliares',
            component: RegistrosAuxiliares
          },
        ]
      },

      /////ROTAS RECURSO DE GLOSA
      {
        path: '/recurso-de-glosa',
        name: 'Recurso de Glosa',
        component: RecursoDeGlosa,
        children: [
          {
            path: '/dashboard-recurso-de-glosa',
            name: 'Dashboard Recurso de Glosa',
            component: DashboardRecursoDeGlosa
          },
        ]
      },

      /////ROTAS RECURSOS HUMANOS
      {
        path: '/rh',
        name: 'RH',
        component: RH,
        children: [
          {
            path: '/dashboard-rh',
            name: 'Dashboard RH',
            component: DashboardRH
          },
        ]
      },

      /////ROTAS SABE
      {
        path: '/sabe',
        name: 'SABE',
        component: SABE,
        children: [
          {
            path: '/dashboard-sabe',
            name: 'Dashboard SABE',
            component: DashboardSABE
          },
        ]
      },

      /////ROTAS T.I.
      {
        path: '/ti',
        name: 'T.I.',
        component: TI,
        children: [
          {
            path: '/dashboard-ti',
            name: 'Dashboard TI',
            component: DashboardTI
          },
          {
            path: '/manutencao-menus',
            name: 'Manutenção Menus',
            component: ManutencaoMenus
          },
        ]
      },

      /////ROTAS TREINAMENTO
      {
        path: '/treinamento',
        name: 'Treinamento',
        component: Treinamento,
        children: [
          {
            path: '/dashboard-treinamento',
            name: 'Dashboard Treinamento',
            component: DashboardTreinamento
          },
        ]
      },

    ]
  },
  { 
    path: '/*', 
    component: Login 
  },
  { 
    path: '/:catchAll(.*)*', 
    component: Login 
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    //Need to login
    /*var responseAxios = '';
    axiosInstance({
      method: "get",
      url: "checktoken",
    }).then((response) => {
        router.beforeEach((to, from, next) => {
          responseAxios = response.data
        })
    });*/
    if(!Cookies.get('authorizerToken') /*|| responseAxios == 'Unauthorized.'*/){
      next('/');
    }else{
      next();
    }
  }else{
    next();
  }
});

export default router
