<template>
    <div id="project_high_light">
        <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="6" class="text-left mb-4">
                <h3 class="headline mb-3">My Recent Projects</h3>
                <v-slide-group
                        v-model="model"
                        show-arrows
                        class="align-content-center"
                        center-active
                        mandatory>
                    <v-slide-item v-for="(item, i) in projects" :key="i" v-slot:default="{ active, toggle }">
                        <v-card
                                :color="active ? 'primary,' : 'grey lighten-1'"
                                class="ma-3"
                                :img="item.img"
                                height="280"
                                width="280"
                                flat
                                @click="toggle"
                        >
                            <v-fade-transition>
                                <v-overlay v-if="active" color="primary" absolute/>
                            </v-fade-transition>
                        </v-card>
                    </v-slide-item>
                </v-slide-group>
            </v-col>

            <v-col cols="12" md="6">
                <h3 class="headline mb-6">{{projects[model].title}}</h3>
                <p>{{projects[model].shortcut}}</p>
                <p><a v-bind:href="projects[model].link">Click Here To Check on GitHub</a></p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ProjectHighLights",
        data(){
            return{
                model: 0,
                projects:[
                    {
                        title: "My Personal Web",
                        link:"https://github.com/yid164/my-personal-web",
                        img: require('../../assets/PersonalWeb.jpeg'),
                        shortcut:"My Personal Website, developed by using Vue.js + Vuetify."},
                    {
                        title: "Planitar Assignment",
                        link:"https://github.com/yid164/planitar-assignment",
                        img: require('../../assets/Assignment1.jpg'),
                        shortcut:"Interview Assignment from Planitar, GoLang as Backend, Vue as Frontend."},
                    {
                        title: "Goopter Assignment",
                        link:"https://github.com/yid164/goopter-test-assignment",
                        img: require('../../assets/Assignment2.jpg'),
                        shortcut:"Interview Assignment from Goopter Software, Backend is provided, using axios to connect, and React + Redux as Frontend."
                    },
                    {
                        title: "Speedline Assignment",
                        link:"https://github.com/yid164/speedline-solution-project",
                        img: require('../../assets/Assignment3.png'),
                        shortcut:"Interview Assignment from Speedline Software, using Vue.js."},
                    {
                        title: "Open House AI Assginemtn",
                        link:"https://github.com/yid164/OpenHouseAICodeTesting",
                        img: require('../../assets/Assignment4.jpeg'),
                        shortcut:"Open House AI Code Testing, using Spring Boot Framework, mainly Java + MongoDB for doing the RESTful API."},
                    {
                        title: "BattleDot",
                        link:"https://github.com/yid164/BattleDot",
                        img: require('../../assets/Assignment5.jpeg'),
                        shortcut:"BattleDot Game for HCL interview, a Java + Linux game program."},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
