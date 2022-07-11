<template>
    <section class="row">
        <div class="col-11 mx-auto mt-5">
            <q-form @submit="redefinirSenha" class="q-gutter-md" >
                <q-input filled type="email" v-model="email" label="Seu email" lazy-rules :rules="[val => val && val.length > 0 || 'Por favor digite seu email']"/>
                 <div class="row justify-between">
                    <q-btn label="Voltar" to="/" />
                    <q-btn label="Solicitar Redefinição" type="submit" color="green-9"/>
                </div>
            </q-form>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Notify } from 'quasar'

export default defineComponent({
    name: 'EsqueceuSenha',

    data(){
        return {
            email: ''
        }
    },

    methods: {
        redefinirSenha(){
            Notify.create({
              type: 'positive',
              message: 'Sua solicitação para redefinição de senha foi encaminhada com sucesso.'
            })
            this.$router.push('/')
        }
    },
})
</script>

<style scoped>

</style>
