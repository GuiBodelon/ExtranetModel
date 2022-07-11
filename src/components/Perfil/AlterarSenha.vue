<template>
    <section>
        <div class="mt-3">
            <form @submit.prevent="">
                <label for="inputPassword" class="form-label">Digite sua Senha atual:</label>
                <input type="password" class="form-control" id="inputPassword" required>
                <div class="mt-3">
                    <label for="inputPassword" class="form-label">Nova Senha:</label>
                    <input type="password" class="form-control" id="inputPassword" required>
                </div>
                <div class="mt-3">
                    <label for="inputPassword" class="form-label">Repitir Senha:</label>
                    <input type="password" class="form-control" id="inputPassword" required>
                    <div class="d-flex justify-content-end mt-3">
                        <slot></slot>
                        <button class="btn btn-success" type="submit">Confirmar</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AlterarSenha',
})
</script>

<style scoped>

label{
    color: var(--text-primary);
}
</style>