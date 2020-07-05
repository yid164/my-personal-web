<template>
    <nav>
        <v-app-bar elevate-on-scroll class="blue darken-4" app>
            <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                <span>Welcome to Ken's Page</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Translate Button -->
            <v-btn class="grey--text">Translate</v-btn>
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

                <v-flex class="grey--text darken-4">
                    <p class="white--text text-center">Contact Me</p>
                    <v-flex class="d-flex flex-row ">
                        <v-btn @click="">
                            <v-icon class="mr-0">mdi-email</v-icon>
                        </v-btn>
                        <v-btn class="teal--text" @click="">
                            <v-icon class="mr-0">mdi-github</v-icon>
                        </v-btn>
                    </v-flex>
                    <v-flex class="d-flex flex-row text-center">
                        <v-btn @click="">
                            <v-icon class="mr-0">mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn @click="">
                            <v-icon class="mr-0">mdi-linkedin</v-icon>
                        </v-btn>
                    </v-flex>
                </v-flex>

            </v-layout>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                drawer: false,
                color: "blue darken-4",
                right: false,
                miniVariant: false,
                expandOnHover: false,
                background: false,

                route_list: [
                    {text: "Home", icon: "mdi-home", route: "/home"},
                    {text: "About", icon: "mdi-information", route: "/about"},
                    {text: "Projects", icon: "mdi-post-outline", route: "/project"},
                    {text: "Timeline", icon: "mdi-timeline-text", route: "/timeline"},
                    {text: "Blog", icon: "mdi-blogger", route: "/blog"}
                ]
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
