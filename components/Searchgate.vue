<template>
    <div class="field is-grouped">
        <div class="control is-large is-expanded">
            <input type="text" class="input" v-model="inputword">
        </div>
        <div class="control is-large">
            <NuxtLink v-if="inputword != ''" class="button is-success" :to="'/search/' + inputword">
                検索
            </NuxtLink>
            <button v-else class="button is-disabled">
                検索
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const inputword = ref("");
</script>