<template>
    <section>
        <DashboardListContainer class="dashboardListContainer">
            <router-link class="dashboardRoutes" v-for="item in dashboardList" :key="item.id" :to="item.route">
                <DashboardBox v-if="item.permission">
                    <div class="flex flex-column justify-center items-center">
                        <!--<font-awesome-icon class="dashboardIcons mb-3 mx-auto" :icon="item.icon"/>-->
                        <q-icon :name="item.icon"/>
                        <p class="text-center">{{ item.dashboard }}</p>
                    </div>
                </DashboardBox>
            </router-link>
        </DashboardListContainer>
    </section>
</template>

<script lang="ts">
import DashboardListContainer from "../../components/shared/DashboardListContainer.vue";
import DashboardBox from "../../components/shared/DashboardBox.vue";

export default {
    components: {
        DashboardListContainer,
        DashboardBox,
    },
    
    setup() {
        const dashboardList = [
            { id: 1, dashboard: "Assessoria Médica", icon: "fa-solid notes-medical", route: "dashboard-assessoria-medica", permission: true },
            { id: 2, dashboard: "Auditoria", icon: "fa-solid file-signature", route: "dashboard-auditoria", permission: true },
            { id: 3, dashboard: "Autorizacao", icon: "fa-solid person-circle-check", route: "dashboard-autorizacao", permission: true },
            { id: 4, dashboard: "Cadastro", icon: "fa-solid clipboard-user", route: "dashboard-cadastro", permission: true },
            { id: 5, dashboard: "Comunicação", icon: "fa-solid address-book", route: "dashboard-comunicacao", permission: true },
            { id: 6, dashboard: "Contas Médicas", icon: "fa-solid laptop-medical", route: "dashboard-contas-medicas", permission: true },
            { id: 7, dashboard: "Credenciamento", icon: "fa-solid address-card", route: "dashboard-credenciamento", permission: true },
            { id: 8, dashboard: "Governanca", icon: "fa-solid user-tie", route: "dashboard-governanca", permission: true },
            { id: 9, dashboard: "Financeiro", icon: "fa-solid coins", route: "dashboard-financeiro", permission: true },
            { id: 10, dashboard: "Recurso de Glosa", icon: "fa-solid cash-register", route: "dashboard-recurso-de-glosa", permission: true },
            { id: 11, dashboard: "RH", icon: "fa-solid people-group", route: "dashboard-rh", permission: true },
            { id: 12, dashboard: "SABE", icon: "fa-solid hospital-user", route: "dashboard-sabe", permission: true },
            { id: 13, dashboard: "T.I.", icon: "fa-solid computer", route: "dashboard-ti", permission: true },
            { id: 14, dashboard: "Treinamento", icon: "fa-solid person-chalkboard", route: "dashboard-treinamento", permission: false },
        ];

        return { dashboardList };
    }
}
</script>

<style scoped>

.boxWelcome{
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
h5, strong{
    color: var(--text-primary);
}
.dashboardListContainer{
    @apply sm:p-8;
}
.dashboardIcons{
    font-size: 3.5rem;
}
.dashboardRoutes{
    text-decoration: none;
    transition-duration: 0.2s;
}
.dashboardRoutes:hover{
   color: var(--text-primary);
}
</style>