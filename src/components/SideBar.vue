<template>
  <sidebar-menu :menu="menu" width="338px" @update:collapsed="toggleSidebar">
    <template v-slot:header>
      <div class="logo-details">
        <img src="/images/logo_icon.png" alt="Logo S.P.A. Saúde" class="logoImage"/>
        <span class="logo_name">S.P.A. Saúde</span>
      </div>
    </template>
    <template v-slot:dropdown-icon="{ isOpen }">
      <span v-if="!isOpen"><i class="fa-solid fa-caret-down"></i></span>
      <span v-else><i class="fa-solid fa-caret-up"></i></span>
    </template>
    <!--<template v-slot:footer>footer</template>-->
    <template v-slot:toggle-icon><i class='bx bx-menu navIcon'></i></template>    
  </sidebar-menu>
</template>

<script>
import axiosInstance from '../axios';
import { SidebarMenu } from 'vue-sidebar-menu'

export default {
    name: 'Sidebar',

    components: {
      SidebarMenu
    },

    emits: ['onToggleSidebar'],

    data(){
      return{
        menu: [],
        activeLeft: '348px',
        isToggled: false
      }
    },

    mounted(){
      this.loadSidebar();
    },

    methods:{
      loadSidebar(){
        axiosInstance({
            method: 'get',
            url: 'load-sidebar',
        })
        .then(response => {
          this.menu = response.data
        })
      },
      toggleSidebar(){
        this.isToggled = !this.isToggled
        if(this.isToggled){
          this.activeLeft = '98px';
          this.$emit('onToggleSidebar', this.activeLeft);
        }else{
          this.activeLeft = '348px';
          this.$emit('onToggleSidebar', this.activeLeft);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.logo-details{
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 7px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}
.logo-details .logoImage{
  font-size: 30px;
  color: var(--sidebar-text-primary);
  min-width: 50px;
  max-width: 45px;
  text-align: center;
  line-height: 50px;
}
.logoImage{
  margin-right: 40px;
}
.logo-details .logo_name{
  font-size: 22px;
  color: var(--sidebar-text-primary);
  font-weight: 600;
  transition: 0.1s ease;
  transition-delay: 0.1s;
}
.vsm_collapsed .logo-details .logo_name{
  transition-delay: 0s;
  opacity: 0;
  pointer-events: none;
}
.logo-details .logoImage:hover{
  cursor: pointer;
  filter: brightness(120%);
}



</style>