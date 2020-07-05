<template>

    <v-footer class="indigo lighten-1" height="85">
        <v-container fluid class="text-center">
            <v-layout>
                <v-flex md2 ></v-flex>
                <v-flex md8 class="white--text pt-0 text-xs-center">

                        <v-btn
                                v-for="icon in icons"
                                :key="icon"
                                class="mx-4 white--text"
                                icon
                        >
                            <v-icon size="24px">{{ icon }}</v-icon>
                        </v-btn>

                         <p class="white--text">
                             {{ new Date().getFullYear() }} — <strong>Created By Ken</strong>
                         </p>

                </v-flex>
                <v-flex md2></v-flex>
            </v-layout>
        </v-container>
    </v-footer>
<!-- <v-footer-->
<!--     dark-->
<!--     app>-->
<!--     <v-row justify="center"-->
<!--             no-gutters-->
<!--            class="text-center"-->
<!--     >-->
<!--         <v-layout class="justify-center grow" row wrap>-->
<!--             <v-flex class="text-center">-->
<!--                 <v-btn-->
<!--                         v-for="icon in icons"-->
<!--                         :key="icon"-->
<!--                         class="mx-4 white&#45;&#45;text"-->
<!--                         icon-->
<!--                 >-->
<!--                     <v-icon size="24px">{{ icon }}</v-icon>-->
<!--                 </v-btn>-->
<!--             </v-flex>-->
<!--         </v-layout>-->

<!--         <v-divider></v-divider>-->

<!--         <v-card-text class="white&#45;&#45;text">-->
<!--             {{ new Date().getFullYear() }} — <strong>Vuetify</strong>-->
<!--         </v-card-text>-->
<!--     </v-row>-->
<!-- </v-footer>-->
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
    }
</script>

<style scoped>

</style>
