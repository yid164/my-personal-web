<template>
    <nav>
        <v-app-bar elevate-on-scroll class="blue-grey darken-4" app>
            <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                <span>Ken's Page</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Translate Button -->
            <v-menu top class="white--text">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            color="grey"
                            dark
                            v-bind="attrs"
                            v-on="on"
                    >
                        Languages
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                            v-for="(item, index) in languages"
                            :key="index"
                            @click=""
                    >
                        <v-list-item-title>{{ item.lang}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-navigation-drawer
            app
            v-model="drawer"
            :color="color"
            :expand-on-hover="expandOnHover"
            :mini-variant="miniVariant"
            :right="right"
            dark>
            <v-layout column align-center>
                <v-flex class="mt-5 text-center">
                    <v-avatar size="80">
                        <img src="../assets/Cat.jpeg">
                    </v-avatar>
                    <p class="white--text subheading mt-1 text-center">Ken's Spot</p>
                </v-flex>
            </v-layout>

            <v-list>
                <v-list-item v-for="item in route_list" :key="item.text" router :to="item.route">
                    <v-list-item-action>
                        <v-icon class="white--text">{{item.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{item.text}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                drawer: false,
                color: "blue-grey darken-4",
                right: false,
                miniVariant: false,
                expandOnHover: false,
                background: false,

                route_list: [
                    {text: "Home", icon: "mdi-home", route: "/"},
                    {text: "About", icon: "mdi-face", route: "/about"},
                    {text: "Timeline", icon: "mdi-timeline-text", route: "/timeline"},
                    {text: "Gallery", icon: "mdi-google-photos", route:"/gallery"},
                    {text: "Projects", icon: "mdi-post-outline", route: "/project"},
                    {text: "Blog", icon: "mdi-blogger", route: "/blog"}
                ],

                languages:[
                    {lang: "English"},
                    {lang: "中文"}]
            }
        },

        methods:{
            popContact(){

            }
        }

    }
</script>

<style scoped>

</style>
