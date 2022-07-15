import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
//import Guard from '../services/middleware'
import Cookies from 'js-cookie';
import { Notify } from 'quasar';

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
import ManutencaoUsuariosSIG from '../views/Aplicativo/TI/ManutencaoUsuariosSIG.vue'

//IMPORTS TREINAMENTO
import Treinamento from '../views/Aplicativo/Treinamento/Treinamento.vue'
import DashboardTreinamento from '../views/Aplicativo/Treinamento/DashboardTreinamento.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requireAuth: false //Necessita estar autenticado pra acessar rota?
    },
    children: [
      {
        path: '/',
        name: 'LoginForm',
        component: LoginForm,
        meta: {
          requireAuth: false,
          transition: 'slide-left'
        },
      },
      {
        path: 'esqueceu-a-senha',
        name: 'Esqueceu a Senha',
        component: EsqueceuSenha,
        meta: {
          requireAuth: false,
          transition: 'slide-right'
        },
      },
    ]
  },

  /////ROTAS DO APLICATIVO APÓS AUTENTICAÇÃO DO USUÁRIO
  {
    path: '/aplicativo',
    component: Aplicativo,
    meta: {
      requireAuth: true
    },
    children: [
      /////ROTA DASHBOARDS DO USUÁRIO
      {
        path: '/dashboards',
        name: 'Dashboards',
        component: Dashboards,
        meta: {
          requireAuth: true
        },
      },
      /////ROTA PERFIL DO USUÁRIO
      {
        path: '/perfil',
        name: 'Perfil',
        component: Perfil,
        meta: {
          requireAuth: true
        },
        props: true,
      },

      /////ROTAS ASSESSORIA MÉDICA
      {
        path: '/dashboards',
        name: 'Asessoria Médica',
        component: AssessoriaMedica,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-assessoria-medica',
            name: 'Dashboard Assessoria Medica',
            component: DashboardAssessoriaMedica,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS AUDITORIA
      {
        path: '/dashboards',
        name: 'Auditoria',
        component: Auditoria,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-auditoria',
            name: 'Dashboard Auditoria',
            component: DashboardAuditoria,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS AUTORIZAÇÃO
      {
        path: '/autorizacao',
        name: 'Autorização',
        component: Autorizacao,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-autorizacao',
            name: 'Dashboard Autorizacao',
            component: DashboardAutorizacao,
            meta: {
              requireAuth: true
            },
          }
        ]
      },

      /////ROTAS CADASTRO
      {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-cadastro',
            name: 'Dashboard Cadastro',
            component: DashboardCadastro,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS COMUNICAÇÃO
      {
        path: '/comunicacao',
        name: 'Comunicação',
        component: Comunicacao,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-comunicacao',
            name: 'Dashboard Comunicacao',
            component: DashboardComunicacao,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS CONTAS MÉDICAS
      {
        path: '/contas-medicas',
        component: ContasMedicas,
        meta: {
          requireAuth: true
        },
        name: 'Contas Médicas',
        children: [
          {
            path: '/dashboard-contas-medicas',
            name: 'Dashboard Contas Medicas',
            component: DashboardContasMedicas,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS CREDENCIAMENTO
      {
        path: '/credenciamento',
        name: 'Credenciamento',
        component: Credenciamento,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-credenciamento',
            name: 'Dashboard Credenciamento',
            component: DashboardCredenciamento,
            meta: {
              requireAuth: true
            },
          }
        ]
      },

      /////ROTAS Governanca
      {
        path: '/Governanca',
        name: 'Governança',
        component: Governanca,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-governanca',
            name: 'Dashboard Governanca',
            component: DashboardGovernanca,
            meta: {
              requireAuth: true
            },
          },
          {
            path: '/indicadores',
            name: 'Indicadores',
            component: Indicadores,
            meta: {
              requireAuth: true
            },
          },
          {
            path: '/teste',
            name: 'Teste',
            component: Teste,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS FINANCEIRO
      {
        path: '/financeiro',
        name: 'Financeiro',
        component: Financeiro,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-financeiro',
            name: 'Dashboard Financeiro',
            component: DashboardFinanceiro,
            meta: {
              requireAuth: true
            },
          },
          {
            path: '/registros-auxiliares',
            name: 'Registros Auxiliares',
            component: RegistrosAuxiliares,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS RECURSO DE GLOSA
      {
        path: '/recurso-de-glosa',
        name: 'Recurso de Glosa',
        component: RecursoDeGlosa,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-recurso-de-glosa',
            name: 'Dashboard Recurso de Glosa',
            component: DashboardRecursoDeGlosa,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS RECURSOS HUMANOS
      {
        path: '/rh',
        name: 'RH',
        component: RH,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-rh',
            name: 'Dashboard RH',
            component: DashboardRH,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS SABE
      {
        path: '/sabe',
        name: 'SABE',
        component: SABE,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-sabe',
            name: 'Dashboard SABE',
            component: DashboardSABE,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS T.I.
      {
        path: '/ti',
        name: 'T.I.',
        component: TI,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-ti',
            name: 'Dashboard TI',
            component: DashboardTI,
            meta: {
              requireAuth: true
            },
          },
          {
            path: '/manutencao-menus',
            name: 'Manutenção Menus',
            component: ManutencaoMenus,
            meta: {
              requireAuth: true
            },
          },
          {
            path: '/usuarios-sig',
            name: 'Manutenção Usuários SIG',
            component: ManutencaoUsuariosSIG,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

      /////ROTAS TREINAMENTO
      {
        path: '/treinamento',
        name: 'Treinamento',
        component: Treinamento,
        meta: {
          requireAuth: true
        },
        children: [
          {
            path: '/dashboard-treinamento',
            name: 'Dashboard Treinamento',
            component: DashboardTreinamento,
            meta: {
              requireAuth: true
            },
          },
        ]
      },

    ]
  },
  {
    path: '/*',
    component: Login,
    meta: {
      requireAuth: false
    },
  },
  {
    path: '/:catchAll(.*)*',
    component: Login,
    meta: {
      requireAuth: false
    },
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const token = Cookies.get("authorizerToken")
  if (to.matched.some(record => record.meta.requireAuth) && !token) {
    next({ name: 'LoginForm', query: { next: to.fullPath } })
    Notify.create({
      textColor: 'white',
      icon: 'error',
      color: 'red-6',
      message: 'Você precisa estar autenticado para acessar esta página.'
    })
  } else {
    next()
  }
})

export default router
