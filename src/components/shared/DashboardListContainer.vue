<template>
    <div class="dashboardContainer">
        <slot/>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
    .dashboardContainer{
        @apply grid gap-6 md:grid-cols-4 sm:grid-cols-2;
    }
</style>
