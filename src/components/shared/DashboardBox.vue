<template>
    <div class="dashboardBox">
        <slot />
    </div>
</template>

<style scoped>
    .dashboardBox{
        @apply flex items-center justify-center h-40 w-full sm:rounded sm:shadow hover:cursor-pointer font-bold;
        box-shadow: var(--card-shadow);
        background-color: var(--card-bg);
        color: var(--card-font-color);
        transition-duration: 0.2s;
    }
    .dashboardBox:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        opacity: 0.9;
        background-color: var(--box-primary-hover);        
    }
</style>