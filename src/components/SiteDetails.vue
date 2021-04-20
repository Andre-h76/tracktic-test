<template>
    <div class="details">
        <site
            :site="$store.state.site"
            :customClass="'secondary'"
        >
            <template #prev>
                <router-link :to="`/${$store.state.currentPage}`" tag="div" class="prev" >&lt;</router-link>
            </template>
        </site>
        <div class="details__content">
            <div class="details__content__img">
                <img
                    v-if="$store.state.site.images && $store.state.site.images.length"
                    :src="$store.state.site.images[0]" />
            </div>
            <div class="details__content__info">
                <div class="person details__content__info__block">
                    <div class="svg-container">
                        <svg viewBox="-42 0 512 512.002" xmlns="http://www.w3.org/2000/svg"><path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0"/><path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0"/></svg>
                    </div>
                    <div class="content-container">
                        <p>{{ $store.state.site.contacts.main.firstName }} {{ $store.state.site.contacts.main.lastName }}</p>
                        <p>{{ $store.state.site.contacts.main.jobTitle }}</p>
                    </div>
                </div>
                <div class="phone details__content__info__block">
                    <div class="svg-container">
                        <svg id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m237.795 467.816-193.604-193.607c-58.766-58.769-59.076-154.102 0-213.181l56.638-56.639c6.433-6.435 17.121-5.706 22.605 1.606l96.392 128.525c4.479 5.971 3.884 14.327-1.393 19.605l-57.61 57.612c-6.685 6.685-6.696 17.526 0 24.222l115.22 115.223c6.685 6.683 17.525 6.694 24.223-.001l57.61-57.611c5.279-5.279 13.635-5.871 19.605-1.393l128.523 96.393c7.298 5.474 8.057 16.156 1.606 22.605l-56.639 56.64c-58.873 58.874-154.226 58.952-213.176.001z"/></svg>
                    </div>
                    <div class="content-container">
                        {{ $store.state.site.contacts.main.phoneNumber }}
                    </div>
                </div>
                <div class="email details__content__info__block">
                    <div class="svg-container">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">		<path d="M507.49,101.721L352.211,256L507.49,410.279c2.807-5.867,4.51-12.353,4.51-19.279V121C512,114.073,510.297,107.588,507.49,101.721z"/><path d="M467,76H45c-6.927,0-13.412,1.703-19.279,4.51l198.463,197.463c17.548,17.548,46.084,17.548,63.632,0L486.279,80.51
			C480.412,77.703,473.927,76,467,76z"/><path d="M4.51,101.721C1.703,107.588,0,114.073,0,121v270c0,6.927,1.703,13.413,4.51,19.279L159.789,256L4.51,101.721z"/><path d="M331,277.211l-21.973,21.973c-29.239,29.239-76.816,29.239-106.055,0L181,277.211L25.721,431.49C31.588,434.297,38.073,436,45,436h422c6.927,0,13.412-1.703,19.279-4.51L331,277.211z"/></svg>
                    </div>
                    <div class="content-container">
                        <a :href="`mailto:${$store.state.site.contacts.main.email}`">{{ $store.state.site.contacts.main.email }}</a>
                    </div>
                </div>
                <div class="address details__content__info__block" v-if="$store.state.site.contacts.main.address">
                    <div class="svg-container">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"/></svg>
                    </div>
                    <div class="content-container">
                        <info-row
                            :info="$store.state.site.contacts.main.address"
                            :pattern="['street', 'city', 'state', 'country', 'zipCode']"
                        ></info-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Site from "./Site";
    import InfoRow from "./InfoRow";

    export default {
        name: 'SiteDetails',
        components: {
            InfoRow,
            Site
        },
        async created() {
             if (this.$route.params.site) {
                await this.$store.dispatch('setSite', this.$route.params.site);
            } else {
                await this.$store.dispatch('fetchSite', this.$route.params.id);
            }
        },
        data: ()=> {
            return {
                siteData: {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/variables";

    $button-width: 5rem;

    .prev {
        width: $button-width;
        color: $contrast-color;
        background-color: $secondary-color;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
    }

    .details {
        &__content {
            max-width: $lg;
            margin: 0 auto;

            &__img {
                text-align: center;
            }

            &__info {
                padding: .5rem 2rem;
                display: flex;
                flex-wrap: wrap;
                max-width: 980px;
                margin: 0 auto;

                &__block {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    padding: 1rem;

                    .svg-container {
                        width: 40px;

                        svg {
                            max-width: 100%;
                        }
                    }

                    .content-container {
                        width: calc(100% - 40px - 2rem);
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        padding-left: 1rem;
                    }

                    @media all and (min-width: $md) {
                        width: 50%;
                    }
                }
            }
        }
    }

</style>

<style lang="scss">
    @import "../scss/variables";
    $button-width: 5rem;

    .details .card-wrapper .card {
        width: calc(100% - #{$button-width} - 1rem);
    }
</style>

