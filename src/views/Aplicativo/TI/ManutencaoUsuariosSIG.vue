
<template>
    <section>
    <div class="q-pa-md justify-center items-center">
        <q-table :rows="rows" :columns="columns" :loading="loadingTable" :filter="filter" :title="'Usuários SIG '" :rows-per-page-options="[]" row-key="id">
            <template v-slot:loading>
                <q-inner-loading showing color="primary" />
            </template>
            <template v-slot:top-right>
                <q-btn color="primary" icon="refresh" label="Atualizar Tabela" class="q-mr-xl" outline no-caps @click="getUsuarios()"/>
                <q-input borderless dense debounce="300" v-model="filter" placeholder="Procurar">
                <template v-slot:append>
                    <q-icon name="search" />
                </template>
                </q-input>
            </template>
            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td key="spa00cod" :props="props" class="flex justify-center full-width">
                        <q-btn dense color="success" icon="content_copy" @click="modalEspelharUsuario=true;chamarModalEspelharUsuarios(props.row.spa00cod, props.row.spa00nom)">
                            <q-tooltip>Espelhar Usuário {{ props.row.spa00dig }}</q-tooltip>
                        </q-btn>
                    </q-td>
                    <q-td key="spa00cod" :props="props">{{ props.row.spa00cod }}</q-td>
                    <q-td key="spa00dig" :props="props">
                        {{ props.row.spa00dig }}
                        <q-popup-edit v-model="props.row.spa00dig" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Digitador">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, scope.value, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>
                    <q-td key="spa00nom" :props="props">
                        {{ props.row.spa00nom }}
                        <q-popup-edit v-model="props.row.spa00nom" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Nome">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, scope.value, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00sen" :props="props">
                        {{ props.row.spa00sen }}
                        <q-popup-edit v-model="props.row.spa00sen" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Senha">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, scope.value, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                    
                    <q-td key="spa00it1" :props="props">
                        {{ props.row.spa00it1 }}
                        <q-popup-edit v-model="props.row.spa00it1" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Base de Dados">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, scope.value, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it2" :props="props">
                        {{ props.row.spa00it2 }}
                        <q-popup-edit v-model="props.row.spa00it2" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Contas Médicas">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, scope.value, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it3" :props="props">
                        {{ props.row.spa00it3 }}
                        <q-popup-edit v-model="props.row.spa00it3" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Contribuição">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, scope.value, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it4" :props="props">
                        {{ props.row.spa00it4 }}
                        <q-popup-edit v-model="props.row.spa00it4" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Gestão de Custos">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, scope.value, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it5" :props="props">
                        {{ props.row.spa00it5 }}
                        <q-popup-edit v-model="props.row.spa00it5" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Financeiro">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, scope.value, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it6" :props="props">
                        {{ props.row.spa00it6 }}
                        <q-popup-edit v-model="props.row.spa00it6" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Controles de Informações Gerenciais">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, scope.value, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it7" :props="props">
                        {{ props.row.spa00it7 }}
                        <q-popup-edit v-model="props.row.spa00it7" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Controles Admin">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, scope.value, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it8" :props="props">
                        {{ props.row.spa00it8 }}
                        <q-popup-edit v-model="props.row.spa00it8" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Auditoria">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, scope.value, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it9" :props="props">
                        {{ props.row.spa00it9 }}
                        <q-popup-edit v-model="props.row.spa00it9" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso SPA00IT9">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, scope.value, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00rec" :props="props">
                        {{ props.row.spa00rec }}
                        <q-popup-edit v-model="props.row.spa00rec" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Recepção">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val == 'S' || val == 'N'|| 'Inserir apenas N para não ou S para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, scope.value, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00pro" :props="props">
                        {{ props.row.spa00pro }}
                        <q-popup-edit v-model="props.row.spa00pro" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Protocolo">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 5 || 'Inserir números apenas entre 0 e 4']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, scope.value, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it10" :props="props">
                        {{ props.row.spa00it10 }}
                        <q-popup-edit v-model="props.row.spa00it10" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso SPA00IT10">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, scope.value, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00it11" :props="props">
                        {{ props.row.spa00it11 }}
                        <q-popup-edit v-model="props.row.spa00it11" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso SPA00IT11">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, scope.value, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00cla" :props="props">
                        {{ props.row.spa00cla }}
                        <q-popup-edit v-model="props.row.spa00cla" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Consultar Lançamentos">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, scope.value, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00tra" :props="props">
                        {{ props.row.spa00tra }}
                        <q-popup-edit v-model="props.row.spa00tra" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Alterar Tradutora">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, scope.value, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00cpt" :props="props">
                        {{ props.row.spa00cpt }}
                        <q-popup-edit v-model="props.row.spa00cpt" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Alterar CPTS">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, scope.value, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00sip" :props="props">
                        {{ props.row.spa00sip }}
                        <q-popup-edit v-model="props.row.spa00sip" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Alterar Relacionamento SIP">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val < 2 || 'Inserir apenas 0 para não ou 1 para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, scope.value, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00con" :props="props">
                        {{ props.row.spa00con }}
                        <q-popup-edit v-model="props.row.spa00con" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Contabilidade">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val == 'S' || val == 'N'|| 'Inserir apenas N para não ou S para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, scope.value, props.row.spa00rh, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00rh" :props="props">
                        {{ props.row.spa00rh }}
                        <q-popup-edit v-model="props.row.spa00rh" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso RH">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val == 'S' || val == 'N'|| 'Inserir apenas N para não ou S para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, scope.value, props.row.spa00ans, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                                
                    <q-td key="spa00ans" :props="props">
                        {{ props.row.spa00ans }}
                        <q-popup-edit v-model="props.row.spa00ans" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso ANS">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val == 'S' || val == 'N'|| 'Inserir apenas N para não ou S para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, scope.value, props.row.spa00inf)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>
                    <q-td key="spa00inf" :props="props">
                        {{ props.row.spa00inf }}
                        <q-popup-edit v-model="props.row.spa00inf" v-slot="scope" :validate="val => val.length > 0" title="Editar acesso Informática">
                            <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" :model-value="scope.value" :rules="[val => scope.validate(val) || 'O campo não pode ser nulo.', val => val.length == 1 || 'Permitido apenas 1 caractere', val => val == 'S' || val == 'N'|| 'Inserir apenas N para não ou S para sim']">
                                <template v-slot:after>
                                    <q-btn flat dense color="negative" icon="cancel" @click.stop="scope.cancel"/>
                                    <q-btn flat dense color="positive" icon="check_circle" @click.stop="scope.set;salvarAlteracao(props.row.spa00cod, props.row.spa00dig, props.row.spa00nom, props.row.spa00sen, props.row.spa00it1, props.row.spa00it2, props.row.spa00it3, props.row.spa00it4, props.row.spa00it5, props.row.spa00it6, props.row.spa00it7, props.row.spa00it8, props.row.spa00it9, props.row.spa00rec, props.row.spa00pro, props.row.spa00it10, props.row.spa00it11, props.row.spa00cla, props.row.spa00tra, props.row.spa00cpt, props.row.spa00sip, props.row.spa00con, props.row.spa00rh, props.row.spa00ans, scope.value)" :disable="scope.validate(scope.value) === false || scope.initialValue === scope.value"/>
                                </template>
                            </q-input>
                        </q-popup-edit>
                    </q-td>                    
                </q-tr>
            </template>
        </q-table>
        </div>
        <div>
            <q-dialog v-model="modalEspelharUsuario" persistent transition-show="scale" transition-hide="scale">
                <q-card class="text-dark" style="min-width:80vw;max-width:80vw;min-height:70vh">
                    <q-card-section class="row items-center q-pb-none">
                        <div class="text-h5 row items-end"><span>Espelhando usuário: {{ usuarioEspelho.nome }}</span></div>
                        <q-space />
                        <q-btn icon="close" flat round dense v-close-popup />
                    </q-card-section>
                    <!--<q-spinner-oval v-if="usuarioEspelho.acessos.length == 0" color="#ccc" size="5em" class="absolute-center"/>-->
                    <div class="q-pa-xl row full-width">
                        <q-form class="row col-12" @submit="cadastrarUsuario(novoUsuarioDigitador, novoUsuarioNome, novoUsuarioSenha, usuarioEspelho)">
                            <q-input bottom-slots v-model="novoUsuarioDigitador" label="Digitador" class="col-md-3 q-mr-xl" counter dense :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                <template v-slot:prepend>
                                    <q-icon name="badge" />
                                </template>
                                <template v-slot:append>
                                    <q-icon name="close" @click="novoUsuarioDigitador = ''" class="cursor-pointer" />
                                </template>
                                <template v-slot:hint>
                                    Informe o digitador
                                </template>
                            </q-input>
                            <q-input bottom-slots v-model="novoUsuarioNome" @update:model-value="criarSenhaAutomatica()" label="Nome" class="col-md-3 q-mr-xl" counter dense :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                <template v-slot:prepend>
                                    <q-icon name="person" />
                                </template>
                                <template v-slot:append>
                                    <q-icon name="close" @click="novoUsuarioNome = ''" class="cursor-pointer" />
                                </template>
                                <template v-slot:hint>
                                    Informe o nome
                                </template>
                            </q-input>
                            <q-input bottom-slots v-model="novoUsuarioSenha" label="Senha" class="col-md-3" counter dense :rules="[val => !!val || 'Este campo não pode ser nulo.']">
                                <template v-slot:prepend>
                                    <q-icon name="password" />
                                </template>
                                <template v-slot:append>
                                    <q-icon name="close" @click="novoUsuarioSenha= ''" class="cursor-pointer" />
                                </template>
                                <template v-slot:hint>
                                    Informe a Senha
                                </template>
                            </q-input>
                            <div class="col-12 q-mt-xl" >
                                <div class="flex col-12 justify-center">
                                    <q-spinner-oval v-if="!usuarioEspelho.acessos.show" color="#ccc" size="5em"/>
                                </div>                            
                                <div class="row flex full-width justify-start" v-if="usuarioEspelho.acessos.show">
                                    <div class="text-h5 col-12 q-mb-lg" >Acessos</div>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it1" true-value="1" false-value="0" class="col-3" color="green" label="Base de Dados" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it2" true-value="1" false-value="0" class="col-3" color="green" label="Contas Médicas" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it3" true-value="1" false-value="0" class="col-3" color="green" label="Contribuição" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it4" true-value="1" false-value="0" class="col-3" color="green" label="Gestão de Custos" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it5" true-value="1" false-value="0" class="col-3" color="green" label="Financeiro" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it6" true-value="1" false-value="0" class="col-3" color="green" label="Controles Informações Gerenciais" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it7" true-value="1" false-value="0" class="col-3" color="green" label="Controles Admin" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it8" true-value="1" false-value="0" class="col-3" color="green" label="Auditoria" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it9" true-value="1" false-value="0" class="col-3" color="green" label="SPA00IT9" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00rec" true-value="S" false-value="N" class="col-3" color="green" label="Recepção" unchecked-icon="clear" checked-icon="check"/>
                                    <div class="col-3 row">
                                        <q-select class="col-6" outlined v-model="usuarioEspelho.acessos.spa00pro" :options="optionsProtocolo" dense></q-select>
                                    </div>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it10" true-value="1" false-value="0" class="col-3" color="green" label="SPA00IT10" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00it11" true-value="1" false-value="0" class="col-3" color="green" label="SPA00IT11" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00cla" true-value="1" false-value="0" class="col-3" color="green" label="Consultar Lançamento" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00tra" true-value="1" false-value="0" class="col-3" color="green" label="Alterar Tradutora" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00cpt" true-value="1" false-value="0" class="col-3" color="green" label="Alterar CPTS" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00sip" true-value="1" false-value="0" class="col-3" color="green" label="Alterar Relacionamento SIP" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00con" true-value="S" false-value="N" class="col-3" color="green" label="Contabilidade" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00rh" true-value="S" false-value="N" class="col-3" color="green" label="RH" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00ans" true-value="S" false-value="N" class="col-3" color="green" label="ANS" unchecked-icon="clear" checked-icon="check"/>
                                    <q-toggle v-model="usuarioEspelho.acessos.spa00inf" true-value="S" false-value="N" class="col-3" color="green" label="Informática" unchecked-icon="clear" checked-icon="check"/>
                                </div>
                            </div>
                            <q-card-actions class="col-12 q-mt-xl" v-if="usuarioEspelho.acessos.show">
                                <q-btn label="Cadastrar" icon-right="add_box" color="primary" type="submit" class="float-right"></q-btn>
                            </q-card-actions>
                        </q-form>
                    </div>
                </q-card>
            </q-dialog>
        </div>
    </section>
</template>         

<script>
import axiosInstance from "../../../axios"
import Cookies from "js-cookie"
import { defineComponent, ref } from "vue"
import { Notify } from 'quasar'

export default defineComponent({
    name: "ManutencaoUsuariosSIG",

    data(){
        return{
            loadingTable: false,
            rows: [],
            usuarioEspelho : {
                id: '',
                nome: '',
                acessos: {
                    spa00it1: '1',
                    spa00it2: '1',
                    spa00it3: '1',
                    spa00it4: '1',
                    spa00it5: '1',
                    spa00it6: '1',
                    spa00it7: '1',
                    spa00it8: '1',
                    spa00it9: '1',
                    spa00rec: 'S',
                    spa00pro: '1',
                    spa00it10: '1',
                    spa00it11: '1',
                    spa00cla: '1',
                    spa00tra: '1',
                    spa00cpt: '1',
                    spa00sip: '1',
                    spa00con: 'S',
                    spa00rh: 'S',
                    spa00ans: 'S',
                    spa00inf: 'S',
                    show: false,
                }
            },
            novoUsuarioDigitador: '',
            novoUsuarioNome: '',
            novoUsuarioSenha: ''
        }
    },

    methods: {
        getUsuarios(){
            this.loadingTable = true
            axiosInstance({
                method: "get",
                url: "ti/usuarios-sig/usuarios",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
            }).then((response) => {
                this.rows = response.data
                this.loadingTable = false
            })
        },
        salvarAlteracao(spa00cod, spa00dig, spa00nom, spa00sen, spa00it1, spa00it2, spa00it3, spa00it4, spa00it5, spa00it6, spa00it7, spa00it8, spa00it9, spa00rec, spa00pro, spa00it10, spa00it11, spa00cla, spa00tra, spa00cpt, spa00sip, spa00con, spa00rh, spa00ans, spa00inf){
            const payload = {
                spa00cod: spa00cod,
                spa00dig: spa00dig,
                spa00nom: spa00nom,
                spa00sen: spa00sen,
                spa00it1: spa00it1,
                spa00it2: spa00it2,
                spa00it3: spa00it3,
                spa00it4: spa00it4,
                spa00it5: spa00it5,
                spa00it6: spa00it6,
                spa00it7: spa00it7,
                spa00it8: spa00it8,
                spa00it9: spa00it9,
                spa00rec: spa00rec,
                spa00pro: spa00pro,
                spa00it10: spa00it10,
                spa00it11: spa00it11,
                spa00cla: spa00cla,
                spa00tra: spa00tra,
                spa00cpt: spa00cpt,
                spa00sip: spa00sip,
                spa00con: spa00con,
                spa00rh: spa00rh,
                spa00ans: spa00ans,
                spa00inf: spa00inf
            }
            axiosInstance({
                method: "put",
                url: "ti/usuarios-sig/update-usuario",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            })
            .then((response) => {
                Notify.create({
                    type: 'positive',
                    message: 'Usuário Atualizado com sucesso'
                })
                this.getUsuarios()
            })
        },
        chamarModalEspelharUsuarios(id, nome){
            this.usuarioEspelho.id = id
            this.usuarioEspelho.nome = nome            
            const payload = {
                id: id
            }
            axiosInstance({
                method: "get",
                url: "ti/usuarios-sig/usuario",
                headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")},
                params: payload
            }).then((response) => {
                this.usuarioEspelho.acessos.spa00it1 = response.data[0].spa00it1
                this.usuarioEspelho.acessos.spa00it2 = response.data[0].spa00it2
                this.usuarioEspelho.acessos.spa00it3 = response.data[0].spa00it3
                this.usuarioEspelho.acessos.spa00it4 = response.data[0].spa00it4
                this.usuarioEspelho.acessos.spa00it5 = response.data[0].spa00it5
                this.usuarioEspelho.acessos.spa00it6 = response.data[0].spa00it6
                this.usuarioEspelho.acessos.spa00it7 = response.data[0].spa00it7
                this.usuarioEspelho.acessos.spa00it8 = response.data[0].spa00it8
                this.usuarioEspelho.acessos.spa00it9 = response.data[0].spa00it9
                this.usuarioEspelho.acessos.spa00rec = response.data[0].spa00rec
                if(response.data[0].spa00pro == '0'){                    
                    this.usuarioEspelho.acessos.spa00pro = {
                        'value' : response.data[0].spa00pro,
                        'label' : 'Sem acesso',
                        'description' : 'Sem acesso'
                    }
                }else if(response.data[0].spa00pro == '1'){
                    this.usuarioEspelho.acessos.spa00pro = {
                        'value' : response.data[0].spa00pro,
                        'label' : 'Acesso Total',
                        'description' : 'Acesso Total'
                    }
                }else if(response.data[0].spa00pro == '2'){
                    this.usuarioEspelho.acessos.spa00pro = {
                        'value' : response.data[0].spa00pro,
                        'label' : 'Somente Auditoria Médica',
                        'description' : 'Somente Auditoria Médica'
                    }
                }else if(response.data[0].spa00pro == '3'){
                    this.usuarioEspelho.acessos.spa00pro = {
                        'value' : response.data[0].spa00pro,
                        'label' : 'Exceto Auditoria Médica',
                        'description' : 'Exceto Auditoria Médica'
                    }
                }else{
                    this.usuarioEspelho.acessos.spa00pro = {
                        'value' : response.data[0].spa00pro,
                        'label' : 'Programa de Saúde',
                        'description' : 'Programa de Saúde'
                    }
                }
                this.usuarioEspelho.acessos.spa00it10 = response.data[0].spa00it10
                this.usuarioEspelho.acessos.spa00it11 = response.data[0].spa00it11
                this.usuarioEspelho.acessos.spa00cla = response.data[0].spa00cla
                this.usuarioEspelho.acessos.spa00tra = response.data[0].spa00tra
                this.usuarioEspelho.acessos.spa00cpt = response.data[0].spa00cpt
                this.usuarioEspelho.acessos.spa00sip = response.data[0].spa00sip
                this.usuarioEspelho.acessos.spa00con = response.data[0].spa00con
                this.usuarioEspelho.acessos.spa00rh = response.data[0].spa00rh
                this.usuarioEspelho.acessos.spa00ans = response.data[0].spa00ans
                this.usuarioEspelho.acessos.spa00inf = response.data[0].spa00inf              
                this.usuarioEspelho.acessos.show = true                
            })

        },
        criarSenhaAutomatica(){
            if(this.novoUsuarioNome.length > 0){
                this.novoUsuarioSenha = this.novoUsuarioNome.substring(0,3).toUpperCase() + "456"
            }else{
                this.novoUsuarioSenha = ''
            }
        },
        cadastrarUsuario(novoUsuarioDigitador, novoUsuarioNome, novoUsuarioSenha, usuarioEspelho){
            const payload = {
                spa00dig: novoUsuarioDigitador,
                spa00nom: novoUsuarioNome,
                spa00sen: novoUsuarioSenha,
                spa00it1: usuarioEspelho.acessos.spa00it1,
                spa00it2: usuarioEspelho.acessos.spa00it2,
                spa00it3: usuarioEspelho.acessos.spa00it3,
                spa00it4: usuarioEspelho.acessos.spa00it4,
                spa00it5: usuarioEspelho.acessos.spa00it5,
                spa00it6: usuarioEspelho.acessos.spa00it6,
                spa00it7: usuarioEspelho.acessos.spa00it7,
                spa00it8: usuarioEspelho.acessos.spa00it8,
                spa00it9: usuarioEspelho.acessos.spa00it9,
                spa00rec: usuarioEspelho.acessos.spa00rec,
                spa00pro: usuarioEspelho.acessos.spa00pro.value,
                spa00it10: usuarioEspelho.acessos.spa00it10,
                spa00it11: usuarioEspelho.acessos.spa00it11,
                spa00cla: usuarioEspelho.acessos.spa00cla,
                spa00tra: usuarioEspelho.acessos.spa00tra,
                spa00cpt: usuarioEspelho.acessos.spa00cpt,
                spa00sip: usuarioEspelho.acessos.spa00sip,
                spa00con: usuarioEspelho.acessos.spa00con,
                spa00rh: usuarioEspelho.acessos.spa00rh,
                spa00ans: usuarioEspelho.acessos.spa00ans,
                spa00inf: usuarioEspelho.acessos.spa00inf
            }
            Notify.create({
                type: 'positive',
                message: 'Usuário criado com sucesso!'
            })
            this.getUsuarios()
            this.novoUsuarioDigitador = ''
            this.novoUsuarioNome = ''
            this.novoUsuarioSenha = ''
            this.modalEspelharUsuario = false
        }

    },

    mounted(){
        this.getUsuarios()
    },

    setup(){
        const columns = [
            { name: 'espelhar', align: 'center', field: 'espelhar', label: '#', sortable: false},
            { name: 'spa00cod', align: 'left', field: 'spa00cod', label: 'ID', sortable: true},
            { name: 'spa00dig', align: 'left', field: 'spa00dig', label: 'Digitador', sortable: true},
            { name: 'spa00nom', align: 'left', field: 'spa00nom', label: 'Nome', sortable: true},
            { name: 'spa00sen', align: 'left', field: 'spa00sen', label: 'Senha', sortable: true},
            { name: 'spa00it1', align: 'center', field: 'spa00it1', label: 'Base de Dados', sortable: true},
            { name: 'spa00it2', align: 'center', field: 'spa00it2', label: 'Contas Médicas', sortable: true},
            { name: 'spa00it3', align: 'center', field: 'spa00it3', label: 'Contribuição', sortable: true},
            { name: 'spa00it4', align: 'center', field: 'spa00it4', label: 'Gestão de Custos', sortable: true},
            { name: 'spa00it5', align: 'center', field: 'spa00it5', label: 'Financeiro', sortable: true},
            { name: 'spa00it6', align: 'center', field: 'spa00it6', label: 'Controles Informações Gerenciais', sortable: true},
            { name: 'spa00it7', align: 'center', field: 'spa00it7', label: 'Controles Admin', sortable: true},
            { name: 'spa00it8', align: 'center', field: 'spa00it8', label: 'Auditoria', sortable: true},
            { name: 'spa00it9', align: 'center', field: 'spa00it9', label: 'SPA00IT9', sortable: true},
            { name: 'spa00rec', align: 'center', field: 'spa00rec', label: 'Recepção', sortable: true},
            { name: 'spa00pro', align: 'center', field: 'spa00pro', label: 'Protocolo', sortable: true},
            { name: 'spa00it10', align: 'center', field: 'spa00it10', label: 'SPA00IT10', sortable: true},
            { name: 'spa00it11', align: 'center', field: 'spa00it11', label: 'SPA00IT11', sortable: true},
            { name: 'spa00cla', align: 'center', field: 'spa00cla', label: 'Consultar Lançamento', sortable: true},
            { name: 'spa00tra', align: 'center', field: 'spa00tra', label: 'Alterar Tradutora', sortable: true},
            { name: 'spa00cpt', align: 'center', field: 'spa00cpt', label: 'Alterar CPTS', sortable: true},
            { name: 'spa00sip', align: 'center', field: 'spa00sip', label: 'Alterar Relacionamento SIP', sortable: true},
            { name: 'spa00con', align: 'center', field: 'spa00con', label: 'Contabilidade', sortable: true},
            { name: 'spa00rh', align: 'center', field: 'spa00rh', label: 'RH', sortable: true},
            { name: 'spa00ans', align: 'center', field: 'spa00ans', label: 'ANS', sortable: true},
            { name: 'spa00inf', align: 'center', field: 'spa00inf', label: 'Informática', sortable: true}            
        ]

        return {
            columns,
            modalEspelharUsuario: ref(false),
            filter: ref(''),
            optionsProtocolo: [
                {
                    label: 'Sem acesso',
                    value: '0',
                    description: 'Sem acesso'
                },
                {
                    label: 'Acesso Total',
                    value: '1',
                    description: 'Acesso Total'
                },
                {
                    label: 'Somente Auditoria Médica',
                    value: '2',
                    description: 'Somente Auditoria Médica'
                },
                {
                    label: 'Exceto Auditoria Médica',
                    value: '3',
                    description: 'Exceto Auditoria Médica'
                },
                {
                    label: 'Programa de Saúde',
                    value: '4',
                    description: 'Programa de Saúde'
                },
            ]
        }
    }
})
</script>
<style scoped>
</style>