<template>
    <div class="pagination">
        <button
                class="prev"
                v-if="$store.state.currentPage > 1"
                @click="setPage(prev)"
        >&lt;</button>

        <button
            v-if="$store.state.currentPage > 1"
            class="first"
            @click="setPage(1)"
        >1</button>

        <button
            class="current"
            >Page {{ $store.state.currentPage }}</button>

        <button
            v-if="$store.state.currentPage < $store.state.totalPages"
            class="last"
            @click="setPage($store.state.totalPages)"
        >{{$store.state.totalPages}}</button>

        <button
            class="next"
            v-if="$store.state.currentPage < $store.state.totalPages"
            @click="setPage(next)"
        >&gt;</button>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        data: () => {
            return {

            }
        },
        computed: {
            next: function() {
                return parseInt(this.$store.state.currentPage) + 1;
            },
            prev: function() {
                return parseInt(this.$store.state.currentPage) - 1;
            }
        },
        methods: {
            setPage(page) {
                this.$router.push({path: `/${page}`});
                this.$store.dispatch('getSites', page);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .pagination {
        text-align: center;
        padding: 1rem;
        font-size: 1.5rem;

        button {
            padding: .5rem;
            margin: 0 .5rem;
        }
    }
</style>
