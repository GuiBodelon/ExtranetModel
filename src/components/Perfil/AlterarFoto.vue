<template>
    <section>
        <div class="mt-3">
            <form @submit.prevent="">
                <div class="mb-3">
                    <label for="formFile" class="form-label">Selecione o arquivo</label>
                    <input class="form-control" type="file" id="formFile" required accept="image/png, image/jpeg"/>
                </div>
                <div class="d-flex justify-content-end mt-3">
                    <slot></slot>
                    <button class="btn btn-success" type="submit">Confirmar</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AlterarFoto',
})
</script>

<style scoped>

label{
    color: var(--text-primary);
}

</style>