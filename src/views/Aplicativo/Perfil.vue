<template>
    <q-splitter v-model="splitterModel" class="q-pa-lg">
        <template v-slot:before>
            <q-tabs v-model="tab" vertical>
                <q-tab name="account_settings" icon="manage_accounts" label="Configurações da Conta" />
                <q-tab name="change_password" icon="lock" label="Alterar Senha" />
            </q-tabs>
        </template>

        <template v-slot:after>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                <q-tab-panel name="account_settings" style="min-height:500px">
                    <div class="text-h4 q-mb-md"><q-icon name="manage_accounts" size="2.5em" class="q-mr-lg"/>Configurações da Conta</div>
                    <div class="q-gutter-md row items-start q-mt-lg">
                        <q-avatar color="dark" text-color="white" size="72px" rounded>{{ usuario.nomeUsuario?.charAt(0) }}</q-avatar>
                        <div class="row q-gutter-x-sm">
                            <q-fab color="dark" square dense padding="xs" vertical-actions-align="left" label="Alterar Foto" label-position="left" icon="keyboard_arrow_right" direction="down" class="q-ml-lg">
                                <div class="w-80">
                                    <q-file filled bottom-slots v-model="profilePicture" label="Selecione a Foto" counter>
                                        <template v-slot:prepend>
                                            <q-icon name="cloud_upload" @click.stop />
                                        </template>
                                        <template v-slot:append>
                                            <q-icon name="close" @click.stop="profilePicture = null" class="cursor-pointer"/>
                                        </template>
                                        <template v-slot:hint>Insira apenas imagens.</template>
                                    </q-file>
                                </div>
                            </q-fab>
                            <q-btn color="dark" label="Remover Foto" dense outline></q-btn>
                        </div>
                    </div>
                    <div class="q-gutter-md row items-start q-mt-lg">
                        <q-form style="width:100vw">
                            <div class="row q-gutter-xl">
                                <q-input v-model="usuario.nomeUsuario" class="col-sm-12 col-md-4" label="Usuário">
                                    <template v-slot:prepend>
                                        <q-icon name="account_circle" />
                                    </template>
                                </q-input>
                                <q-input v-model="usuario.emailUsuario" class="col-sm-12 col-md-6" label="Email">
                                    <template v-slot:prepend>
                                        <q-icon name="email" />
                                    </template>
                                </q-input>
                                <q-input v-model="usuario.cargoUsuario" class="col-sm-12 col-md-8" label="Cargo">
                                    <template v-slot:prepend>
                                        <q-icon name="work" />
                                    </template>
                                </q-input>
                                <q-btn dense outline label="Confirmar Alterações" class="self-end" padding="xs"></q-btn>
                            </div>
                        </q-form>
                    </div>

                </q-tab-panel>
                <q-tab-panel name="change_password" style="min-height:500px">
                    <div class="text-h4 q-mb-md"><q-icon name="lock" size="2.5em" class="q-mr-lg"/>Alterar Senha</div>
                    <div class="q-gutter-md row q-mt-lg">
                        <q-form style="width:100vw" @submit="onSubmitPassword" @reset="onResetPassword">
                            <div class="row q-gutter-md">
                                <q-input v-model="oldPassword" filled :type="isOldPwd ? 'password' : 'text'" hint="Insira sua senha antiga"  class="col-sm-12 col-md-5">
                                    <template v-slot:append>
                                        <q-icon :name="isOldPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isOldPwd = !isOldPwd"/>
                                    </template>
                                </q-input>
                                <div class="col-md-5"></div>
                                <q-input v-model="newPassword" filled :type="isNewPwd ? 'password' : 'text'" hint="Insira sua senha nova"  class="col-sm-12 col-md-5">
                                    <template v-slot:append>
                                        <q-icon :name="isNewPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isNewPwd = !isNewPwd"/>
                                    </template>
                                </q-input>
                                <q-input v-model="newRtPassword" filled :type="isNewRtPwd ? 'password' : 'text'" hint="Repita sua senha nova"  class="col-sm-12 col-md-5">
                                    <template v-slot:append>
                                        <q-icon :name="isNewRtPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isNewRtPwd = !isNewRtPwd"/>
                                    </template>
                                </q-input>
                                <div class="col-12">
                                    <q-btn dense color="dark" label="Resetar" padding="xs" type="reset" class="q-mr-sm"></q-btn>
                                    <q-btn dense outline label="Confirmar Alterações" padding="xs" type="submit"></q-btn>                                    
                                </div>
                            </div>
                        </q-form>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </q-splitter>
</template>                    
<!--<div class="d-flex justify-content-between">
    <router-link to="/dashboards" class="btn btn-dark">Voltar</router-link>
    <button class="btn btn-dark ml-2" @click="showAlterarSenha">Alterar Senha</button>
    <button class="btn btn-dark ml-2" @click="showAlterarFoto">Alterar Foto</button>
</div>
<transition name="fade">
    <AlterarSenha v-if="alterarSenhaVisible"><button class="btn btn-danger mr-2" type="button" @click="showAlterarSenha">Cancelar</button></AlterarSenha>
</transition>
<transition name="fade">
    <AlterarFoto v-if="alterarFotoVisible"><button class="btn btn-danger mr-2" type="button" @click="showAlterarFoto">Cancelar</button></AlterarFoto>
</transition>
<span><b>Nome: </b>{{ usuario.nomeUsuario }}</span>
<span><b>Email: </b>{{ usuario.emailUsuario }}</span>
<span><b>Grupo: </b>{{ usuario.setorUsuario }}</span>
<span><b>Cargo: </b>{{ usuario.cargoUsuario }}</span>-->



<script lang="ts">
import { defineComponent, ref } from "vue";
import AlterarSenha from "../../components/Perfil/AlterarSenha.vue";
import AlterarFoto from "../../components/Perfil/AlterarFoto.vue";
import Cookies from 'js-cookie';
import { useQuasar } from "quasar";

export default defineComponent({
    name: "Perfil",

    components: {
        AlterarSenha,
        AlterarFoto
    },

    data() {
        return {
            alterarSenhaVisible: false,
            alterarFotoVisible: false
        }
    },

    methods: {
        showAlterarSenha(){
            this.alterarFotoVisible = false,
            this.alterarSenhaVisible = !this.alterarSenhaVisible
        },
        showAlterarFoto(){
            this.alterarSenhaVisible = false,
            this.alterarFotoVisible = !this.alterarFotoVisible
        }
    },

    setup (){
        const usuario = {
            nomeUsuario : Cookies.get('nomeUsuario'),
            emailUsuario : Cookies.get('emailUsuario'),
            setorUsuario : Cookies.get('setorUsuario'),
            cargoUsuario : Cookies.get('cargoUsuario')
        }
        
        const $q = useQuasar()

        const oldPassword = ref('')
        const newPassword = ref('')
        const newRtPassword = ref('')

        return {
            usuario,
            tab: ref('account_settings'),
            splitterModel: ref(20),
            profilePicture: ref(null),
            isOldPwd: ref(true),
            isNewPwd: ref(true),
            isNewRtPwd: ref(true),
            oldPassword,
            newPassword,
            newRtPassword,
            onSubmitPassword () {
                if (newPassword !== newRtPassword) {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'As senhas não coincidem. Por favor tente novamente.'
                    })
                }
                else {
                    $q.notify({
                        color: 'green-4',
                        textColor: 'white',
                        icon: 'cloud_done',
                        message: 'Senha alterada com sucesso!'
                    })
                }
            },

            onResetPassword () {
                oldPassword.value = ''
                newPassword.value = ''
                newRtPassword.value = ''
            }
        }
    }

});
</script>

<style scoped>
.q-tabs{
    color: var(--text-primary) !important;
}
</style>