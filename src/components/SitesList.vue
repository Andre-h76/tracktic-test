<template>
    <div class="sites">
        <filters />
        <h1>Sites</h1>
        <div class="sites__list">
            <site
                v-for="(site, index) in $store.state.sites"
                :key="index"
                :site="site"
                :customClass="'primary'"
            >
                <template #next>
                    <div class="next" @click="getDetails(site)">&gt;</div>
                </template>
            </site>
        </div>
        <pagination />
    </div>
</template>

<script>
    import Site from "./Site";
    import Pagination from "./Pagination";
    import Filters from "./Filters";

    export default {
        name: 'SitesList',
        components: {
            Site,
            Pagination,
            Filters
        },
        async created() {
            await this.$store.dispatch('fetchSites', this.$route.params.page || 1);
        },
        methods: {
            getDetails: function(site){
                this.$router.push({ name: 'siteDetails', params: { id: site.id, site: site} });
            }
        }

    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    h1 {
        padding: 1rem;
        font-size: 1.25rem;
        background-color: $secondary-color;
        text-align: center;
        color: $contrast-color;
    }

    .sites__list {
        max-width: $lg;
        margin: 0 auto;

        @media all and (min-width: $sm) {
            display: flex;
            flex-wrap: wrap;
        }

        .card-wrapper {
            flex-wrap: nowrap;

            @media all and (min-width: $sm) {
                width: 50%;
            }
            @media all and (min-width: $md) {
                width: calc(100% / 3);
            }
        }
    }

    .next {
        font-size: 2rem;
        width: 5rem;
        padding-left: 1rem;
        cursor: pointer;
    }
</style>

<style lang="scss">
    .sites__list {
        .card-wrapper {
            .card {
                width: calc(100% - 5rem);
            }
        }
    }
</style>
