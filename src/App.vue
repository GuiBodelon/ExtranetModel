<template>  
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  
});

</script>

<style lang="scss">
//@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Raleway&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap');

#app{
  //font-family: 'Raleway', sans-serif;
  //font-family: 'Poppins', sans-serif;
  //font-family: 'Roboto', sans-serif;
  font-family: 'Montserrat',Helvetica,Arial,serif;
};
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
*:focus{
  outline: 0
}

main { //LIGHT THEME
  /*APP GENERAL*/
  --bg-primary: #F0F2F5;
  --text-primary: #625F6E;
  /*SIDEBAR*/
  --sidebar-primary: #405544!important;
  --sidebar-text-primary: #FFF!important;
  --sidebar-menu-active: #2f3f32!important;
  --sidebar-leftbar-active: inset 3px 0 0 0 white!important;
  --sidebar-dropdown: #4b6350!important;
  --sidebar-icon-bg: #2b2b2b!important;
  --sidebar-mobile-bg: #2b2b2b!important;
  --sidebar-icons: white!important;
  --sidebar-icons-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5)!important;
  /*NAVBAR*/
  --nav-icons: black;
  --profile-img-bg: #2b2b2b;
  --nav-bg: #fff;
  /*NAV -> AVATAR*/
  --avatar-bg-color: #2b2b2b;
  --avatar-text-color: #FFF;
  /*CARDS*/
  --card-bg: #fff;
  --card-font-color: #000;  
  /*INPUTS - BUTTONS - FORMS */
  --input-bg: rgba(0, 0, 0, 0.05)!important;
  --radio-color: #676869!important;
  --btn-color: #2e7d32!important;
  /* SHADOWS */
  --nav-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  --nav-bar-top-shadow: linear-gradient(180deg,hsla(0,0%,97.3%,.95) 44%,hsla(0,0%,97.3%,.46) 73%,hsla(0,0%,100%,0));  
  --card-shadow: rgba(104, 64, 64, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  /* HOVERS */
  --box-primary-hover: whitesmoke;
  --nav-icon-hover: #ccc;
    /* SCROLLBAR */
  --scrollbar-bg: #2b2b2b;
  --scrollbar-thumb-bg: #2b2b2b;
}

main.dark {//DARK THEME
  /*APP GENERAL*/
  --bg-primary: #161E31;  
  --text-primary: #D0D2D6!important;
  /*SIDEBAR*/
  --sidebar-primary: #283046!important;
  --sidebar-text-primary: #D0D2D6!important;
  --sidebar-box-primary: #283046!important;
  --sidebar-menu-active: #161d31!important;
  --sidebar-leftbar-active: inset 3px 0 0 0 #16da67!important;
  --sidebar-dropdown: #2b2b2b!important;
  --sidebar-icon-bg: #000!important;
  --sidebar-mobile-bg: #2b2b2b!important;
  --sidebar-icons: #16FF77!important;
  --sidebar-icons-shadow: 0px 0px 10px rgba(41, 255, 22, 0.5)!important;
  /*NAVBAR*/
  --nav-icons: white;
  --profile-img-bg: #1D1B31;
  --nav-bg: #202940;
  /*NAV -> AVATAR*/
  --avatar-bg-color: #fff;
  --avatar-text-color: #2b2b2b;
  /*CARDS*/
  --card-bg: #283046;
  --card-font-color: #fff;
  /*INPUTS / BUTTONS FORMS */
  --input-bg: #fff!important;
  --radio-color: #fff!important;
  --btn-color: #fff!important;
  /* SHADOWS */
  --nav-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  --nav-bar-top-shadow: linear-gradient(180deg,rgba(22,29,49,.9) 44%,rgba(22,29,49,.43) 73%,rgba(22,29,49,0));
  --card-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  /* HOVERS */
  --box-primary-hover: #343F5C;
  --nav-icon-hover: #fff;
  /* SCROLLBAR */
  --scrollbar-bg: #283046;
  --scrollbar-thumb-bg: #2b2b2b;
}

/*::root{
    --blue: #00cfe8;
    --indigo: #6610f2;
    --purple: #7367f0;
    --pink: #e83e8c;
    --red: #ea5455;
    --orange: #ff9f43;
    --yellow: #ffc107;
    --green: #28c76f;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #b8c2cc;
    --gray-dark: #1e1e1e;
    --primary: #7367f0;
    --secondary: #82868b;
    --success: #28c76f;
    --info: #00cfe8;
    --warning: #ff9f43;
    --danger: #ea5455;
    --light: #f6f6f6;
    --dark: #4b4b4b;
}*/

/*------SCROLL BAR------*/

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  border-radius: 100px;
  border: 3px solid transparent;
  background-clip: content-box;
  background-color: #2b2b2bb4;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #2b2b2b;
}
::-webkit-scrollbar-thumb:window-active {
	background: rgba(255,0,0,0.4); 
}
</style>