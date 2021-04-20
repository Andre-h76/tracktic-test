<template>
    <div class="filter">
        <div class="filter-wrapper">
            <select @change="sortBy">
                <option v-for="(option, index) in sortByOptions" :key="index" :value="option.value">{{ option.name }}</option>
            </select>
            <label v-for="option in orderByOptions" :key="option"><input type="radio" name="order" :value="option" @change="orderBy" />{{ option }}</label>
        </div>
    </div>
</template>

<script>
    const sortByOptions = [
            {
                name: 'Default',
                value: ''
            },
            {
                name: 'Title',
                value: 'title'
            },
            {
                name: 'Address',
                value: 'address.country'}
        ];
    const orderByOptions = ['asc', 'desc'];

    export default {
        name: 'Filters',
        data: () => {
            return {
                sortByOptions,
                orderByOptions,
                orderByModel: ''
            }
        },
        methods: {
            sortBy(e) {
                if (e.target.value === 'default') {
                    this.$store.dispatch('sortBy', '');
                }
                this.$store.dispatch('sortBy', e.target.value);
            },
            orderBy(e) {
                this.$store.dispatch('orderBy', e.target.value);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    .filter {
        border-bottom: 1px solid $primary-color;
        background-color: $secondary-color;
        color: $contrast-color;
        padding: 1rem;
    }

</style>
