<template>
  <div class="nav-bar-shadow"></div>
  <div class="nav-bar justify-end items-center" :style="{ left: activeLeft }">
    <q-btn @click="forceUpdate" icon="refresh" class="refreshIcon" size="1.6em" dense round flat>
      <q-tooltip>Recarregar conteúdo da página</q-tooltip>
    </q-btn>
    <q-btn icon="fa-solid fa-bell" class="notificationIcon" dense round flat>
      <q-tooltip>Notificações</q-tooltip>
      <q-badge color="red" floating>2</q-badge>
      <q-menu :offset="[0, 20]" >
        <q-list bordered class="rounded-borders" style="max-width: 500px">
          <q-item-label header>Notificações</q-item-label>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="dark" text-color="white">S</q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1" class="text-weight-bold">Sistema</q-item-label>
                <q-item-label caption lines="3">Registro Oficial - Eventos Pagos (03/2022) já se encontra disponível para download.</q-item-label>
              </q-item-section>              
              <q-item-section side>
                <q-item-section top class="q-mb-sm">
                  3 min. atrás
                </q-item-section>
                <q-btn outline dense color="green-9" icon="download">Baixar</q-btn>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-avatar color="dark" text-color="white">S</q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label lines="1" class="text-weight-bold">Sistema</q-item-label>
                <q-item-label caption lines="3">Registro Oficial - Eventos Recuperados (03/2022) já se encontra disponível para download.</q-item-label>
              </q-item-section>              
              <q-item-section side>
                <q-item-section top class="q-mb-sm">
                  5 min. atrás
                </q-item-section>
                <q-btn outline dense color="green-9" icon="download">Baixar</q-btn>
              </q-item-section>
            </q-item>
        </q-list>
      </q-menu>
    </q-btn>    
    <!--<i v-if="darkModeActive == true" class='bx bxs-sun navIcon' @click="alterarTema(darkModeActive)"></i>
    <i v-else class='bx bxs-moon navIcon' @click="alterarTema(darkModeActive)"></i>-->
    <q-toggle v-model="darkModeActive" @update:model-value="alterarTema(darkModeActive)" icon="nightlight" unchecked-icon="light_mode" size="lg" :color="darkModeActive ? 'indigo-12' : 'grey-2' " keep-color>
      <q-tooltip>Ativar ou desativar modo escuro</q-tooltip>
    </q-toggle>

    <q-avatar class="menuProfile">{{ usuario.nomeUsuario?.charAt(0) }}
    <q-tooltip>Perfil</q-tooltip>
      <q-menu :offset="[0, 14]" style="min-width:360px">
        <div class="row no-wrap q-pa-md justify-around">
          <div class="column">
            <div class="text-h6 q-mb-sm">Configurações</div>
            <q-list dense>
              <q-item clickable v-ripple to="/perfil">
                <q-item-section avatar>
                  <q-icon name="fa-solid fa-user"></q-icon>
                </q-item-section>
                <q-item-section>Perfil</q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>Lorem ipsum</q-item-section>
              </q-item>
            </q-list>
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar color="dark" text-color="white" size="72px" rounded>{{ usuario.nomeUsuario?.charAt(0) }}</q-avatar>

            <div class="text-subtitle1 q-mt-md q-mb-xs">{{ usuario.nomeUsuario }}</div>

            <q-btn color="dark" label="Sair" @click="logout()" outline icon="fa-solid fa-arrow-right-from-bracket" size="sm" v-close-popup />
          </div>
        </div>
      </q-menu>
    </q-avatar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Cookies from "js-cookie";
import axiosInstance from "../../axios";
import router from '../../router';

export default defineComponent({
  name: "Navbar",

  emits: ['onThemeChange', 'onForceUpdate', 'onForceUpdateSidebar'],

  data(){
      return{
        mensagemLogout: '',
        appKey: 0,
      }
  },

  methods: {
    alterarTema(val) {
      this.$emit('onThemeChange', this.darkModeActive)
      //this.$q.dark.set(val)
    },
    logout() {
      axiosInstance({
        method: "post",
        url: "logout",
        headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
      }).then((response) => {
        router.push('/');
        this.mensagemLogout = response.data.menssagem;
        Cookies.remove("authorizerToken");
        Cookies.remove("nomeUsuario");
        Cookies.remove("emailUsuario");
        Cookies.remove("cargoUsuario");
        Cookies.remove("setorUsuario");
      });
    },
    forceUpdate(name) {
      this.$emit('onForceUpdate', this.appKey++)
    },
  },

  props: {
    activeLeft: {
      type: String,
      default: '348px'
    },
  },

  setup(){
    const usuario = {
      nomeUsuario : Cookies.get('nomeUsuario'),
      emailUsuario : Cookies.get('emailUsuario'),
      setorUsuario : Cookies.get('setorUsuario'),
      cargoUsuario : Cookies.get('cargoUsuario')?.toLowerCase()
    }

    return { 
      usuario,
      darkModeActive: ref(false)
     };
  }
});

</script>

<style>
.nav-bar{
  z-index: 100;
  display: flex;
  position: fixed;
  height: 65px;
  top: 10px;
  right: 20px;  
  padding: 1rem 1rem;
  border-radius: 0.428rem;
  background: var(--sidebar-primary);
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  transition: all 0.3s ease;
  left: 348px;
}
.nav-bar i:hover, .bx-menu:hover, .nav-bar li .navIcon:hover{
  color: var(--nav-icon-hover)!important;
  cursor: pointer;
}
.nav-bar .navIcon{
    transition: 0.3s;
    font-size: 2.3em;
    cursor: pointer;
    color: var(--sidebar-text-primary);
    padding-right: 10px;
    cursor: pointer;
}
.notificationIcon{
    transition: 0.3s;
    font-size: 1.1em!important;
    cursor: pointer;
    color: var(--sidebar-text-primary)!important;
}
.refreshIcon{
    transition: 0.3s;
    font-size: 1.4em!important;
    cursor: pointer;
    color: var(--sidebar-text-primary)!important;
}
.menuProfile:hover {
 cursor: pointer;
}
.nav-bar-shadow{
    display: block;
    min-width: 100vw;
    height: 102px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background: var(--nav-bar-top-shadow);
}
.q-avatar{
  background: var(--avatar-bg-color);
  color: var(--avatar-text-color);
}

@media (max-width: 400px){
    .nav-bar{
        position: relative;
    }
}
</style>