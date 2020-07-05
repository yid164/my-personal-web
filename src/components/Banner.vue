<template>
    <v-img
        :height="$vuetify.breakpoint.xsOnly ? '35vh': '80vh'"
        :gradient="$vuetify.breakpoint.smAndDown ? 'to top, rgba(5,5,5,.80), rgba(5,5,5,.80)': 'to top, rgba(255,255,255, .10), rgba(255,255,255,.0)'"
        src="../assets/Banner.jpg">
        <v-container fill-height fluid :px-12="$vuetify.breakpoint.mdAndUp">
            <v-row align-center>
                <v-slide-x-transition appear>
                    <v-col>
                        <h1
                            class="text-uppercase font-weight-bold mb-4 white--text"
                            :class="[$vuetify.breakpoint.xsOnly ? 'display-1' : 'display-3']">
                            Hi, I am Ken
                        </h1>
                        <div
                            class="mb-8 white--text"
                            :class="[$vuetify.breakpoint.xsOnly ? 'headline':'display-1 font-weight-light']">
                            Software | Musics | Videos | Games
                        </div>

                        <v-responsive
                            max-width="600"
                            class="mb-9 white--text">
                            I am an individual developer who is passionate about software development, and I am also interested in musics, videos, and games.
                        </v-responsive>

                        <v-btn
                            large
                            class="px-5 white--text"
                            color="indigo dark-4">
                            Contact Me!
                        </v-btn>
                    </v-col>
                </v-slide-x-transition>
            </v-row>

        </v-container>
    </v-img>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>

</style>
