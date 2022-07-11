<template>
  <main :class="{ 'dark': darkModeActive }" class="col-xs-12 col-sm-6 col-md-4">
    <div>
      <SideBar @onToggleSidebar="toggleSidebar"/>
        <section class="app-section" :key="appKey">        
          <div class="content-section">
            <div class="header-section">
              <Navbar @onThemeChange="changeTheme" @onForceUpdate="forceUpdate" :active-left="activeLeft"/>
              <Breadcrumb class="breadcrumbComponent" :crumbs="crumbs" :actualCrumb="actualCrumb"/>
            </div>            
            <router-view v-slot="{ Component }">
              <transition name="scale-app" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </section>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../components/SideBar.vue";
import Breadcrumb from "../components/shared/Breadcrumb.vue";
import Navbar from "../components/shared/Navbar.vue";

export default defineComponent({
  name: "Dashboard",

  components: {
    SideBar,
    Breadcrumb,
    Navbar,
  },

  data() {
    return {
      darkModeActive: false,
      activeLeft: '348px', 
      actualCrumb: '',
      crumbs: Array<string | object>(),
      appKey: 0
    };
  },

  watch:{
    $route(){
      this.getRoute();
    }
  },

  mounted(){
    this.getRoute();
  },

  methods: {
    getRoute(){
      this.crumbs = this.$route.matched.slice(1)
      this.actualCrumb = this.$route.name as string;
    },
    changeTheme(darkModeActive: boolean){
      this.darkModeActive = darkModeActive
    },
    toggleSidebar(activeLeft: string){
      this.activeLeft = activeLeft;
    },
    forceUpdate(name) {
      this.appKey++
    }
  },

});
</script>

<style>
main{
  background: var(--bg-primary);
}
.app-section{
  position: relative;
  min-height: 100vh;
  left: 338px;
  width: calc(100% - 338px);
  transition: all 0.3s ease;  
}
.header-section{
  min-height: 156px;
}
.vsm_collapsed ~ .app-section{
  left: 78px;
  width: calc(100% - 78px);
}
.app-section .content-section .text{
  font-size: 26px;
  font-weight: 600;
}
/*ROUTER ANIMATED TRANSITION*/
.scale-app-enter-active,
.scale-app-leave-active {
  transition: all 0.5s ease;
}


.scale-app-enter-from,
.scale-app-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* SIDEBAR */
/*SIDEBAR ICON HOVER ANIMATION*/
@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.v-sidebar-menu {
  background: var(--sidebar-primary)!important;
}
.v-sidebar-menu .vsm--item .vsm--link{
  color: var(--sidebar-text-primary)!important; 
  
}
.v-sidebar-menu .vsm--item .vsm--link_level-1{
  transition: all 0.3s ease;
}
.v-sidebar-menu .vsm--item:hover .vsm--link_level-1{
  padding-left: 20px;
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_open {
  background-color: var(--sidebar-menu-active)!important;
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_active {
  -webkit-box-shadow: var(--sidebar-leftbar-active)!important;
  box-shadow: var(--sidebar-leftbar-active)!important;
}
.v-sidebar-menu .vsm--link_level-1 .vsm--icon {
  color: var(--sidebar-icons)!important;
  text-shadow: var(--sidebar-icons-shadow)!important;
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_open .vsm--icon {
  background-color: var(--sidebar-icon-bg)!important;
}
.v-sidebar-menu .vsm--dropdown {
  background: var(--sidebar-dropdown)!important;
}
.v-sidebar-menu .vsm--link .vsm--link_level-1 .vsm--icon{
  transition: all 0.3s ease!important;
}
.v-sidebar-menu .vsm--link_level-1:hover .vsm--icon::before{
  display: inline-block!important;
  animation: swing ease-in-out 0.5s 1 alternate!important;
}
.v-sidebar-menu .vsm--toggle-btn i{
  transition: all 0.3s ease;
}
.v-sidebar-menu .vsm--toggle-btn:hover i{
  padding-left: 10px;
}
/*SIDEBAR MOBILE / COLLAPSED*/
.v-sidebar-menu .vsm--mobile-bg {
  background-color: var(--sidebar-primary)!important;
}
.v-sidebar-menu.vsm_collapsed .vsm--link_level-1 .vsm--icon{
  background-color: var(--sidebar-icon-bg)!important;
}
.v-sidebar-menu .vsm--dropdown .vsm--icon {
  font-size: 0.7rem!important;
  padding-left: 10px!important;
}
.v-sidebar-menu .vsm--dropdown .vsm--child {
  padding-left: 20px!important;
}

/*SIDEBAR ALL CSS CLASSES
.v-sidebar-menu {}
.v-sidebar-menu.vsm_expanded {}
.v-sidebar-menu.vsm_collapsed {}
.v-sidebar-menu.vsm_rtl {}
.v-sidebar-menu .vsm--item {}
.v-sidebar-menu .vsm--link {}
.v-sidebar-menu .vsm--link_active {}
.v-sidebar-menu .vsm--link_open {}
.v-sidebar-menu .vsm--link_mobile {}
.v-sidebar-menu .vsm--link_level-[n] {}
.v-sidebar-menu .vsm--link_disabled {}
.v-sidebar-menu .vsm--title {}
.v-sidebar-menu .vsm--icon {}
.v-sidebar-menu .vsm--arrow {}
.v-sidebar-menu .vsm--arrow_open {}
.v-sidebar-menu .vsm--badge {}
.v-sidebar-menu .vsm--badge_default {}
.v-sidebar-menu .vsm--header {}
.v-sidebar-menu .vsm--dropdown {}
.v-sidebar-menu .vsm--mobile-bg {}
.v-sidebar-menu .vsm--toggle-btn {}*/
</style>
