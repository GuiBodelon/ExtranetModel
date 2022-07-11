<template>
    <div class="breadcrumbComp">
        <div class="q-pa-md q-gutter-sm">
            <q-breadcrumbs>
                <template v-slot:separator><q-icon size="1.5em" name="arrow_right" /></template>
                <q-breadcrumbs-el label="Home" icon="home" to="/dashboards"/>
                <q-breadcrumbs-el v-for="(crumb, index) in crumbs" :key="index" :label="crumb.name" :to="crumb.path"/>
            </q-breadcrumbs>        
        </div>
    </div>
</template>

<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true
        },
        actualCrumb: {
            type: String
        }
    }
}
</script>

<style scoped>
.breadcrumbComp{
    display: flex;
    position: absolute;
    top: 100px;
    left: 20px;
    height: 54px;
    color: var(--text-primary);
}
h4{
    border-right: 1px solid #d6dce1;
    font-weight: 500;
    color: var(--text-primary);
}
a{
    color: var(--text-primary);
    font-size: 1.1rem;
    text-decoration: none;
}
.is-active{
    color: grey;
    pointer-events: none; 
}
</style>