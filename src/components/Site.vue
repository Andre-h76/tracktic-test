<template>
    <div
        class="card-wrapper"
        :class="customClass"
    >
        <slot name="prev"></slot>
        <div
            class="card">
            <div class="card__image"
                :style="{ backgroundImage: `url('${siteImage}')` }">
            </div>
            <div class="card__content">
                <div class="card__content__title" v-if="site.title">
                    {{ site.title }}
                </div>
                <info-row
                    class="card__content__address"
                    v-if="site.address"
                    :info="site.address"
                    :pattern="['street', 'city', 'state', 'country', 'zipCode']" />
                <info-row
                    class="card__content__person"
                    v-if="site.contacts"
                    :info="site.contacts.main"
                    :pattern="['firstName', 'lastName', 'jobTitle']" />
            </div>
        </div>
        <slot name="next" />
    </div>
</template>


<script>
    import InfoRow from "./InfoRow";

    export default {
        name: 'Site',
        components: {
            InfoRow
        },
        props: ['site', 'customClass'],
        data: ()=> {
            return {
                siteImage: ''
            }
        },
        created() {
            if (this.site.images && this.site.images.length) {
                this.siteImage = this.site.images[0];
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    $image-width: 80px;

    .card-wrapper {
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $primary-color;

        &.secondary {
            color: $contrast-color;
            background: $secondary-color;

            .card__image {
                background-color: $contrast-color;
            }
        }

        .card {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__image {
                width: $image-width;
                height: $image-width;
                overflow: hidden;
                border-radius: 100%;
                background-color: $primary-color;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
            }

            &__content {
                width: calc(100% - #{$image-width} - 1rem);
                line-height: 1.25;

                &__title {
                    font-weight: bold;
                    font-size: 1.25rem;
                    margin-bottom: .5rem;
                }

                &__address,
                &__person {
                    margin-bottom: .25rem;
                }
            }
        }
    }

</style>
