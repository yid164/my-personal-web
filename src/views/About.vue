<template>
    <div class="about">
        <section class="white lighten-1">
            <HeadTitle>About Me</HeadTitle>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h2 :class="[$vuetify.breakpoint.mdAndUp ? 'display-6' : 'headline']" class="mb-4">
                            Hey there, My name is Ken!
                            <br/> A technical person with multiple hobbies.
                        </h2>

                        <p class="mb-5">
                            An individual developer is looking for a Software Development job.
                            Experience in the back end, front end, and database management.
                        </p>

                        <p class="mb-5">
                            Determined to implement earned skills, knowledge, and build professional careers for the rapid
                            growth of the prospective organization by working effectively and consistently
                        </p>

                        <p class="mb-5">
                            If you were interested my background, please <a href="mailto: yinsheng.dong@usask.ca">contact me :) </a>
                        </p>
                    </v-col>
                    <v-col cols="12" md="5" offset-md="1">
                        <v-card class="mt-10">
                            <v-img src="../assets/developer.jpg"/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <section class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="(item, i) in skills" :key="i">
                        <v-card class="mx-n3" color="transparent" flat>
                            <v-card-title v-text="item.title"/>
                            <v-card-text>{{item.content}}</v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

    </div>
</template>

<script>
    import HeadTitle from "../components/HeadTitle";
    export default {
        name: "About",
        components: {HeadTitle},
        data(){
            return{
                skills:[
                    {title: "Back End Development", content: "Java , Node.js, C++, and Python"},
                    {title: "Front End Design", content: "HTML, CSS, Vuetify, Bootstrap, and JavaScript"},
                    {title: "Full-Stack Development", content: "Vue, React, SpringBoot, and Django"},
                    {title: "Database", content: "MySQL, PostgreSQL, and MongoDB"},
                    {title: "General Skills", content: "Communication, Attention to Detail, Problem Solving, Leaderships, and Time Management." },
                    {title: "Other Highlights", content: "Video Production, Vehicles Detailing, and Languages Speaking (English and Mandarin)"},

                ]
            }
        }
    }
</script>

<style scoped>

</style>
