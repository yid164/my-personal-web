<template>

    <v-footer class="blue-grey darken-4" height="85">
        <v-container fluid class="text-center">
            <v-layout>
                <v-flex md2 ></v-flex>
                <v-flex md8 class="white--text pt-0 text-xs-center">

                        <v-btn
                                v-for="item in links"
                                :key="item.name"
                                class="mx-4 white--text"
                                icon
                                @click="toPage(item.url)"
                        >
                            <v-icon size="24px">{{ item.icon }}</v-icon>
                        </v-btn>

                         <p class="white--text">
                             {{ new Date().getFullYear() }} — <strong>Created By Ken</strong>
                         </p>

                </v-flex>
                <v-flex md2></v-flex>
            </v-layout>
        </v-container>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            links: [
                {name:"facebook", icon:'mdi-facebook', url:"https://www.facebook.com/profile.php?id=100004482271108"},
                {name:"twitter", icon:'mdi-twitter', url:"https://twitter.com/smallofyou"},
                {name:"linkedin", icon:'mdi-linkedin', url:"https://www.linkedin.com/in/yinshengdong/"},
                {name:"github", icon:'mdi-github', url:"https://github.com/yid164"},
                {name:"instagram", icon: 'mdi-instagram', url: ""},
                {name:"email", icon: 'mdi-email', url:"mailto:yinsheng.dong@usask.ca"}
            ],
        }),
        methods:{
            toPage(url){
                window.open(url)
            }
        }
    }
</script>

<style scoped>

</style>
