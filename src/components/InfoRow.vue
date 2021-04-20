<template>
    <div>
        <span
            v-for="(key, index) in pattern"
            :key="index"
        ><span v-if="info[key]">{{ info[key] }}<span
                v-if="index < pattern.length - 1"
        >, </span></span>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'InfoRow',
        props: ['pattern', 'info'],
    }
</script>
