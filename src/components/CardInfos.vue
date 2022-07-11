<template>
 <div class="mt-5">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 flex align-items-center py-2"><q-icon name="fa-solid fa-circle-info" class="pr-3"/><span class="vertical-bottom">Informações</span></div>
        <q-separator />
        <div class="text-subtitle2 py-2">Para saber mais informações sobre o portal como telefones, emails e manual basta clicar no botão abaixo</div>
      </q-card-section>
      <q-separator />
      <q-card-actions vertical>
        <q-btn label="Clique Aqui" flat @click="persistent = true"></q-btn>
      </q-card-actions>    
    </q-card>
    <q-dialog v-model="persistent" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card style="width:700px">
        <q-toolbar>
          <q-toolbar-title><h4 class="p-3"><q-icon name="fa-solid fa-circle-info" class="pr-3"/><span class="vertical-bottom">Informações</span></h4></q-toolbar-title>
          <q-btn flat round dense icon="close" v-close-popup>
            <q-tooltip class="bg-dark text-white">Fechar</q-tooltip>
          </q-btn>
        </q-toolbar>
        <q-list bordered class="px-4">
          <q-expansion-item group="somegroup" icon="fa-solid fa-phone" label="Telefones" default-opened header-class="text-primary" >
            <q-card>
              <q-card-section>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item w-50">Suporte TISS</li>
                    <li class="list-group-item w-50">(11) 3853-4355</li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item w-50">Autorizações</li>
                    <li class="list-group-item w-50">(11) 3146-3131 - R:300</li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item w-50">Credenciamento</li>
                    <li class="list-group-item w-50">(11) 3146-3131 - R:300</li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item w-50">Contas Médicas</li>
                    <li class="list-group-item w-50">(11) 3146-3131 - R:300</li>
                  </ul>
                  <ul class="list-group list-group-horizontal">
                    <li class="list-group-item w-50">SABE</li>
                    <li class="list-group-item w-50">(11) 3146-3131 - R:300</li>
                  </ul>              
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item group="somegroup" icon="fa-solid fa-file" label="Manual" header-class="text-teal">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <q-separator />
          <q-expansion-item group="somegroup" icon="fa-solid fa-envelope" label="Emails" header-class="text-purple">
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card>
    </q-dialog>   
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { ref } from "vue"

export default defineComponent({
  name: "CardInfos",

  setup(){
    return{
      persistent: ref(false)
    }
  }

});
</script>

<style scoped></style>
