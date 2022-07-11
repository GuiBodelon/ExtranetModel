<template>
    <div class="q-pa-md q-my-xl">
        <q-form @submit="submitLogin" @reset="onReset" class="q-gutter-md" >
            <q-input filled type="email" v-model="email" label="Seu email" hint="Email" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor digite seu email']"/>
            <q-input filled type="password" v-model="password" label="Sua senha" lazy-rules :rules="[val => val !== null && val !== '' || 'Por favor digite sua senha']"/>
            <div class="">
                <q-toggle v-model="remember" label="Lembrar-me" />
                <q-space />
                <router-link to="/esqueceu-a-senha" class="" id="esqueceuSenha">Esqueceu a Senha?</router-link>
            </div>
            <div>
                <q-btn label="Entrar" type="submit" color="green-9"/>
                <q-btn label="Limpar" type="reset" color="dark" flat class="q-ml-sm" />
            </div>
        </q-form>
            <!--
            <div class="mb-3">
                <label for="inputEmail" class="form-label" placeholder="Digite seu Email">Email</label>
                <input v-model="email" type="email" class="form-control" :class="[isValidEmail ? ['is-valid','is-invalid'] : '']" id="inputEmail" required>
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label" placeholder="Digite sua Senha">Senha</label>
                <input v-model="password" type="password" class="form-control" :class="[isValidPassword ? ['is-valid','is-invalid'] : '']" id="inputPassword" required>
            </div>
            <div class="mb-3 form-check">
                <label class="form-check-label" for="lembrarMeCheck">Lembrar-me</label>
                <input v-model="remember" type="checkbox" class="form-check-input" id="lembrarMeCheck">
            </div>
            
            -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie';
import router from '../../router';
import { useStore } from 'vuex';
import { key } from '../../store';

export default defineComponent({
    name: 'LoginForm',

    data(){
        return {
            email: '',
            password: '',
            remember: false as boolean,
            loading: true as boolean,
            loginFail: false as boolean,
            isValidEmail: false as boolean,
            isValidPassword: false as boolean
        }        
    },

    methods: {
        submitLogin(){
            const payload = {
                email: this.email,
                password: this.password,
                remember: this.remember,
            };
            fetch('http://192.168.1.239/api/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Access': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(res =>{
                //var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
                //var inTwoHours = new Date(new Date().getTime() + 120 * 60 * 1000);
                Cookies.set('authorizerToken', res.access_token, { expires: 1 });
                if(res.success === true){
                    router.push('/dashboards')
                    Cookies.set('userInfo', res.userInfo)
                    Cookies.set('nomeUsuario', res.userInfo.nome)
                    Cookies.set('emailUsuario', res.userInfo.email)
                    Cookies.set('setorUsuario', res.userInfo.fk_setor)
                    Cookies.set('cargoUsuario', res.userInfo.cargo)
                }else{
                    this.loginFail = true
                    this.isValidEmail = true
                    this.isValidPassword = true
                    this.password = ''
                }                
            });
        },
        onReset () {
            this.email = ''
            this.password = ''
            this.remember = false
        }
    },

    setup(){
        const store = useStore(key)
        store.state.count // typed as number
    }
})
</script>

<style scoped>
#esqueceuSenha{
    text-decoration: none;
    color: #2d2d2d;
};
</style>
