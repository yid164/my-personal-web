<template>
    <section id="short_intro" class="pt-5 mb-n5">
        <h2 class="display-1 font-weight-light text-center mb-4">More About Me</h2>

        <v-slide-group
            v-model="model"
            show-arrows
            class="align-content-center"
            center-active
            mandatory>
            <v-slide-item v-for="(item, i) in more_intro" :key="i" v-slot:default="{ active, toggle }">
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

        <v-expand-transition>
            <v-sheet v-if="model != null" color="grey lighten-4" tile>
                <v-scroll-y-transition mode="out-in">
                    <v-container :key="model" py-5 mx-auto>
                        <v-row align="center" justify="center" class="fill-height">
                            <v-col cols="12" md="6" class="text-left mb-4">
                                <h3 class="headline mb-3">{{more_intro[model].article}}</h3>
                                <p class="mb-0">{{more_intro[model].content}}</p>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-card elevation="24">
                                    <v-img :src="more_intro[model].img" height="300"/>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-scroll-y-transition>
            </v-sheet>
        </v-expand-transition>
    </section>
</template>

<script>
    export default {
        name: "MoreBanner",
        data(){
            return{
                model: 0,
                more_intro: [
                    {
                        img: require('../assets/code.jpg'),
                        article: "Code Projects",
                        content: "I made many course projects during my university life and individual projects"
                    },
                    {
                        img: require('../assets/Music.png'),
                        article: "Music Lists",
                        content: "I am a listener who loves music"
                    },
                    {
                        img: require('../assets/Videos.jpg'),
                        article: "Video Works",
                        content: "I am a passionate video viewer and photographer"
                    },
                    {
                        img: require('../assets/Games.jpg'),
                        article: "Games Lover",
                        content: "I am an active game player"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
