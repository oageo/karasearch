<template>
    <div>
        <header class="hero is-small">
            <div class="hero-body">
                <h2 class="title">
                    検索ワード: {{ searchword }}
                </h2>
            </div>
        </header>
        <div class="columns container m-2">
            <div class="column is-8">
                {{ data }}
            </div>
            <div class="column is-4">
                <Searchgate />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const searchword = useRoute().params.id

const getdata = async () => {
    const { data } = await useFetch(/api/ytsearch, {
    method: 'GET',
    body: searchword
})

}

useHead({
    title: '検索ワード:' + searchword,
        
})
</script>