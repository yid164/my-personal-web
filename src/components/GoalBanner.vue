<template>
    <v-container id="goal" class="py-5" tag="section">
        <h2 class="display-1 font-weight-light text-center mb-4">My Goals</h2>
        <v-row>
            <v-col v-for="(goal, i) in goals" :key="i" class="d-flex" cols="12" sm="6" md="4">
                <v-card outlined max-width="100%">
                    <v-img :src="goal.src" max-height="200"/>
                    <v-card-title class="align-start" style="min-height: 88px;" v-text="goal.title"/>
                    <v-card-text class="pb-5 pt-3" v-text="goal.article"/>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "GoalBanner",
        data(){
            return{
                goals:[
                    {
                        title: "Teamwork",
                        article: "I hope I could join a industrial team and work for them, then I could improve my teamwork skills",
                        src: require('../assets/Teamwork.jpg')

                    },
                    {
                        title: "Problem Solving",
                        article: "To challenge different problems is also my goal. Never Abandon, Never Give Up",
                        src: require('../assets/problem-solving.png')
                    },
                    {
                        title: "Technical Skills",
                        article: "Learning new skills is one of my career goal. To provide the best solution for different client require to learn new skills",
                        src: require('../assets/TechnicalSkills.jpg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
