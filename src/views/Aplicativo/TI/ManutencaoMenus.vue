
<template>
<q-splitter v-model="splitterModel" class="q-pa-lg">
        <template v-slot:before>
            <q-tabs v-model="tab" vertical>
                <q-tab name="menus" icon="list" label="Menus" />
                <q-tab name="new_menu" icon="playlist_add" label="Novo Menu" />
            </q-tabs>
        </template>
        <template v-slot:after>
            <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
                <q-tab-panel name="menus">
                    <q-table :rows="rows" :columns="columns" :loading="loadingTable" title="Menus Sidebar" :rows-per-page-options="[]" row-key="id">
                        <template v-slot:loading>
                            <q-inner-loading showing color="primary" />
                        </template>
                        <template v-slot:top-right>
                            <q-btn color="primary" icon="refresh" label="Atualizar Tabela" outline no-caps @click="getMenus()"/>
                        </template>
                        <template v-slot:body="props">
                            <q-tr :props="props">
                                <q-td key="id" :props="props">{{ props.row.id }}</q-td>
                                <q-td key="title" :props="props">
                                    {{ props.row.title }}
                                    <q-popup-edit v-model="props.row.title" v-slot="scope" :validate="val => val.length > 0" title="Editar Título">
                                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.']">
                                            <template v-slot:after>
                                                <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                                <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.id, scope.value, props.row.href, props.row.icon, props.row.parent_id)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                            </template>
                                        </q-input>
                                    </q-popup-edit>
                                </q-td>
                                <q-td key="href" :props="props">
                                    {{ props.row.href }}
                                    <q-popup-edit v-model="props.row.href" v-slot="scope" :validate="val => val.length > 0" title="Editar Rota">
                                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.']">
                                            <template v-slot:after>
                                                <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                                <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.id, props.row.title, scope.value, props.row.icon, props.row.parent_id)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                            </template>
                                        </q-input>
                                    </q-popup-edit>
                                </q-td>
                                <q-td key="icon" :props="props">
                                    <q-icon :name="props.row.icon" size="1.5em" />
                                    <q-popup-edit v-model="props.row.icon" v-slot="scope" :validate="val => val.length > 0" title="Editar Ícone">
                                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.']" hint="Utilizar ícones do FontAwesome V6">
                                            <template v-slot:after>
                                                <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                                <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.id, props.row.title, props.row.href, scope.value, props.row.parent_id)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                            </template>
                                        </q-input>
                                    </q-popup-edit>
                                </q-td>
                                <q-td key="parent_id" :props="props">
                                    {{ props.row.parent_id }}
                                    <q-popup-edit v-model="props.row.parent_id" v-slot="scope" :validate="val => val.length > 0" title="Editar menu pai">
                                        <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.']">
                                            <template v-slot:after>
                                                <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                                <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.id, props.row.title, props.row.href, props.row.icon, scope.value)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                            </template>
                                        </q-input>
                                    </q-popup-edit>
                                </q-td>
                                <q-td key="status" :props="props" class="q-gutter-sm">
                                    <q-toggle v-model="props.row.status" @update:model-value="alterarStatusMenu(props.row.id, props.row.status)" checked-icon="check" unchecked-icon="clear" :color="props.row.status == '0' ? 'red' : 'green'" keep-color false-value="0" true-value="1"/>
                                </q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </q-tab-panel>
                <q-tab-panel name="new_menu">
                    <div class="text-h5 q-mb-md"><q-icon name="playlist_add" size="2em" class="q-mr-lg"/>Criação de Menus</div>
                        <div class="column q-gutter-y-md">
                            <b>Que tipo de Menu você deseja criar?</b>
                            <q-option-group v-model="menuCreate" :options="menuCreateOptions" color="primary" inline dense @update:model-value="feedDropdownSelectParentMenu(menuCreate)"/>
                        </div>
                        <q-slide-transition>
                            <div v-show="menuCreate == 'parent'">
                                <q-form @submit="submitParentMenu(parentMenuName, parentMenuRota, parentMenuIcon)" @reset="onResetParentForm">
                                    <div class="row q-pt-xl items-center q-gutter-x-xl gap-4">
                                        <q-input bottom-slots v-model="parentMenuName" label="Nome do Menu" counter dense class="col-md-5 input" :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                            <template v-slot:prepend>
                                                <q-icon name="menu" />
                                            </template>
                                            <template v-slot:append>
                                                <q-icon name="close" @click="parentMenuName = ''" class="cursor-pointer" />
                                            </template>
                                            <template v-slot:hint>
                                                Digite o nome do menu
                                            </template>
                                        </q-input>
                                        <q-input bottom-slots v-model="parentMenuRota" label="Rota do Menu" prefix="/" counter dense class="col-md-5" :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                            <template v-slot:prepend>
                                                <q-icon name="route" />
                                            </template>
                                            <template v-slot:append>
                                                <q-icon name="close" @click="parentMenuRota = ''" class="cursor-pointer" />
                                            </template>
                                            <template v-slot:hint>
                                                Digite a rota do menu sem esquecer a "/" no início 
                                            </template>
                                        </q-input>
                                        <q-input bottom-slots v-model="parentMenuIcon" label="Ícone do Menu" prefix="fa-solid fa-" counter dense class="col-md-5" :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                            <template v-slot:prepend>
                                                <q-icon name="fa-solid fa-icons" />
                                            </template>
                                            <template v-slot:append>
                                                <q-icon name="close" @click="parentMenuIcon = ''" class="cursor-pointer" />
                                            </template>
                                            <template v-slot:hint>
                                                Digite o ícone do menu
                                                <q-icon name="help" size="2em" class="cursor-pointer">
                                                    <q-tooltip anchor="bottom middle" self="top middle">Utilizar apenas ícones do <strong>FontAwesome V6</strong></q-tooltip>
                                                </q-icon>
                                            </template>
                                        </q-input>
                                        <div class="self-end col-md-5 q-gutter-x-sm">
                                            <q-btn label="Criar" type="submit" color="green-9" class="float-right" />
                                            <q-btn label="Limpar" type="reset" color="dark" flat class="float-right"/>
                                        </div>
                                    </div>                                    
                                </q-form>
                            </div>
                        </q-slide-transition>
                        <q-slide-transition>
                            <div v-show="menuCreate == 'child'">
                                <q-form @submit="submitChildMenu(selectParentMenu, childMenuName, childMenuRota)" @reset="onResetChildForm">
                                    <div class="row q-pt-xl items-center q-gutter-x-xl gap-4">
                                        <q-select filled v-model="selectParentMenu" :options="selectParentOptions" dense label="Selecione o Menu Pai" class="col-md-5" :rules="[val => !!val || 'Este campo não pode ser nulo.']"/>
                                        <q-input bottom-slots v-model="childMenuName" label="Nome do Menu" counter dense class="col-md-5" :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                            <template v-slot:prepend>
                                                <q-icon name="menu" />
                                            </template>
                                            <template v-slot:append>
                                                <q-icon name="close" @click="childMenuName = ''" class="cursor-pointer" />
                                            </template>
                                            <template v-slot:hint>
                                                Digite o nome do menu
                                            </template>
                                        </q-input>
                                        <q-input bottom-slots v-model="childMenuRota" label="Rota do Menu" prefix="/" counter dense class="col-md-5" :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                            <template v-slot:prepend>
                                                <q-icon name="route" />
                                            </template>
                                            <template v-slot:append>
                                                <q-icon name="close" @click="childMenuRota = ''" class="cursor-pointer" />
                                            </template>
                                            <template v-slot:hint>
                                                Digite a rota do menu sem esquecer a "/" no início 
                                            </template>
                                        </q-input>
                                        <div class="self-end col-md-5 q-gutter-x-sm">
                                            <q-btn label="Criar" type="submit" color="green-9" class="float-right" />
                                            <q-btn label="Limpar" type="reset" color="dark" flat class="float-right"/>
                                        </div>
                                    </div>
                                </q-form>
                            </div>
                        </q-slide-transition>                  
                </q-tab-panel>
            </q-tab-panels>
        </template>
    </q-splitter>
</template>         

<script>
import axiosInstance from "../../../axios"
import Cookies from "js-cookie"
import { defineComponent, ref } from "vue"
import { Notify } from 'quasar'

export default defineComponent({
    name: "MenutencaoMenus",

    data(){
        return{
            rows: [],
            menuStatus: Boolean,
            selectParentOptions: []
        }
    },

    methods: {
        getMenus(){
            this.loadingTable = true
            axiosInstance({
                method: "get",
                url: "ti/menus",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
            }).then((response) => {
                this.rows = response.data
                this.menuStatus = response.data.status
                this.loadingTable = false
            })
        },
        salvarAlteracao(rowID, title, href, icon, parent_id){
            const payload = {
                id: rowID,
                title: title,
                href: href,
                icon: icon,
                parent_id: parent_id
            }
            axiosInstance({
                method: "put",
                url: "ti/update-menu",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            }).then((response) => {
                Notify.create({
                    message: 'Menu atualizado com sucesso!',
                    type: 'positive',
                })
                this.getMenus()
            })
        },
        submitParentMenu(parentMenuName, parentMenuRota, parentMenuIcon){
            const payload = {
                title: parentMenuName,
                href: "/" + parentMenuRota,
                icon: "fa-solid fa-" + parentMenuIcon
            }
            axiosInstance({
                method: "post",
                url: "ti/create-menu",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            }).then((response) => {
                Notify.create({
                    message: 'Menu criado com sucesso!',
                    type: 'positive',
                })
            })
        },
        alterarStatusMenu(id, status){
            const payload = {
                id: id,
                status: status
            }
            axiosInstance({
                method: "put",
                url: "ti/change-menu-status",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            }).then((response) => {
                Notify.create({
                    message: 'Status do Menu alterado com sucesso!',
                    type: 'positive',
                })
            })
        },
        feedDropdownSelectParentMenu(menuCreate){
            if(menuCreate == 'child'){
                axiosInstance({
                method: "get",
                url: "ti/get-parent-menus",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
                }).then((response) => {
                    this.selectParentOptions = response.data.map(function(item){
                        return {
                            'value': item.id,
                            'label': item.title,
                            'description': item.title
                        }
                    })
                })
            }
        },
        submitChildMenu(selectParentMenu, childMenuName, childMenuRota){
            const payload = {
                parent: selectParentMenu.value,
                title: childMenuName,
                href: "/" + childMenuRota
            }
            axiosInstance({
                method: "post",
                url: "ti/create-child-menu",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            }).then((response) => {
                Notify.create({
                    message: 'Submenu criado com sucesso!',
                    type: 'positive',
                })
            })
        }
    },

    mounted(){
        this.getMenus()
    },

    setup(){
        const parentMenuName = ref('')
        const parentMenuRota = ref('')
        const parentMenuIcon = ref('')
        const selectParentMenu = ref('')
        const childMenuName = ref('')
        const childMenuRota = ref('')
        const columns = [
            { name: 'id', align: 'left', label: 'ID', field: 'ID', sortable: true },
            { name: 'title', align: 'left', label: 'Título', field: 'title', sortable: true },
            { name: 'href', align: 'left', label: 'Rota', field: 'href', sortable: true },
            { name: 'icon', align: 'center', label: 'Ícone', field: 'icon', sortable: true },
            { name: 'parent_id', align: 'center', label: 'Parent ID', field: 'parent_id', sortable: true },
            { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
        ]

        return{
            tab: ref('menus'),
            splitterModel: ref(20),
            loadingTable: ref(false),
            columns,
            //PARENT INPUTS & METHODS
            menuCreate: ref(null),
            menuCreateOptions: [
                {
                    label: 'Menu',
                    value: 'parent'
                },
                {
                    label: 'Submenu',
                    value: 'child'
                }
            ],            
            parentMenuName,
            parentMenuRota,
            parentMenuIcon,            
            onResetParentForm(){
                parentMenuName.value = '', 
                parentMenuIcon.value = '', 
                parentMenuRota.value = '' 
            },
            //CHILD INPUTS & METHODS
            selectParentMenu,
            childMenuName,
            childMenuRota,
            onResetChildForm(){
                selectParentMenu.value = '',
                childMenuName.value = '', 
                childMenuRota.value = ''
            }
        }
    }

})
</script>
<style scoped>
.q-tabs{
    color: var(--text-primary) !important;
}
</style>