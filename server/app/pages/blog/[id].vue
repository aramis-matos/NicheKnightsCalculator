<template>
    <div>
        We are inside a blog
    </div>
    <div>
        Post id is  {{ params.id }}
    </div>
</template>

<script setup lang="ts">
const {params} = useRoute()
</script>