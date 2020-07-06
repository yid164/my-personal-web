<template>
    <div>
        <HeadTitle>Ken's Timeline</HeadTitle>
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="mx-10">
            <v-timeline-item
                v-for="(item, i) in times"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot>
                <template v-slot:opposite>
                    <span :class="`headline font-weight-bold black--text`" v-text="item.time"></span>
                </template>
                <v-card :color="item.color" dark>
                    <v-card-title class="title">{{item.title}}</v-card-title>
                    <v-card-text class="white text--primary">
                        <p>{{item.content}}</p>
                        <v-chip
                            :color="item.color"
                            :class="`${item.type} white--text caption mr-2`">
                            {{item.type}}
                        </v-chip>
                        <v-chip :class="`${item.status} white--text caption mr-2`">
                            {{item.status}}
                        </v-chip>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
    import HeadTitle from "../components/HeadTitle";
    export default {
        name: "Timeline",
        components: {HeadTitle},
        comments:{
            HeadTitle
        },
        data(){
            return{
                times:[
                    {
                        title: "Personal Web App Development",
                        type: "Development",
                        time: "2020-07",
                        status: "In-Process",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "To develop my own website by using Vue.js + Vuetify."
                    },
                    {
                        title: "Customer Service",
                        type: "Work",
                        time: "2020-04 to 2020-06",
                        status: "Leave",
                        color: "black accent-3",
                        icon: "mdi-room-service",
                        content: "To survive myself, I got work to earn money"
                    },
                    {
                        title: "Learn Go Web Backend",
                        type: "Learn",
                        time: "2020-05-25",
                        status: "Finished",
                        color: "blue accent-3",
                        icon: "mdi-cast-education",
                        content: "To learn and develop Golang as web backend server."
                    },
                    {
                        title: "Study React.js + Redux",
                        type: "Learn",
                        time: "2020-04-30",
                        status: "Finished",
                        color: "blue accent-3",
                        icon: "mdi-cast-education",
                        content: "To learn and develop React.js(MVC Framework) + Redux(Front End)."
                    },
                    {
                        title: "SpringBoot Learning",
                        type: "Learn",
                        time: "2020-04-14",
                        status: "Finished",
                        color: "blue accent-3",
                        icon: "mdi-cast-education",
                        content: "Developing a Restful Web Service by using SpringBoot Java."
                    },
                    {
                        title: "Java BattleDot Game Development",
                        type: "Development",
                        time: "2020-03-19",
                        status: "Finished",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "Java + Linux Development for a Battle Dot Game."
                    },
                    {
                        title: "Java Vaadin(Framework) Development Web Service",
                        type: "Development",
                        time: "2020-03-10",
                        status: "Finished",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "Java + Vaadin Web Application Development for an interview."
                    },
                    {
                        title: "Algorithms Reviewing",
                        type: "Development",
                        time: "2020-01-10",
                        status: "In-Process",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "To review different algorithms."
                    },
                    {
                        title: "University Graduated!",
                        type: "Education",
                        time: "2019-05-01",
                        status: "Finished",
                        color: "teal darken-3",
                        icon: "mdi-layers-triple",
                        content: "I finished my undergraduate program at University of Saskatchewan."
                    },
                    {
                        title: "Real-Time Heart Simulation",
                        type: "Development",
                        time: "2018-09 to 2019-04",
                        status: "Finished",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "University of Saskatchewan course project, for GPU and math programming."
                    },

                    {
                        title: "Front End Developer for Recommendation System",
                        type: "Development",
                        time: "2018-01 to 2018-04",
                        status: "Finished",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "University of Saskatchewan course project, Javascript Project."
                    },
                    {
                        title: "Learner and Developer for Assembly Project",
                        type: "Learn",
                        time: "2018-01 to 2018-04",
                        status: "Finished",
                        color: "blue accent-3",
                        icon: "mdi-cast-education",
                        content: "University of Saskatchewan course project, Assembly(MIPS)."
                    },
                    {
                        title: "Back End Developer for Food-Ordering-System",
                        type: "Development",
                        time: "2017-09 to 2018-01",
                        status: "Finished",
                        color: "red accent-3",
                        icon: "mdi-developer-board",
                        content: "University of Saskatchewan course project, Java Project."
                    },
                    {
                        title: "University Started",
                        type: "Education",
                        time: "2015-05-1",
                        status: "Finished",
                        color: "teal darken-3",
                        icon: "mdi-layers-triple",
                        content: "I became an undergraduate student at University of Saskatchewan."
                    },
                    {
                        title: "Language Learning",
                        type: "Education",
                        time: "2012-09-21",
                        status: "Finished",
                        color: "teal darken-3",
                        icon: "mdi-book-variant",
                        content: "I first came to Canada, and learning English in English as Second Language Department (ESL) at University of Saskatchewan."
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
