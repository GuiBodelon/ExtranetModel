import router from '../router';
import Cookies from 'js-cookie';
import axiosInstance from '../axios';
/*
export default {
    auth(){
        const token = Cookies.get('authorizerToken');        
        axiosInstance({
            method: "get",
            url: "checktoken",
          }).then((response) => {
              router.beforeEach((to, from, next) => {
                if (to.name !== 'LoginForm' && response.data == 'Unauthorized.' || !token) next({ name: 'LoginForm' })
                else next()
              })
          });
          
    },
}*/