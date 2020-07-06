<template>
    <div>
        <section class="grey lighten-3">
            <HeadTitle>Ken's Gallery</HeadTitle>
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h2 :class="[$vuetify.breakpoint.mdAndUp ? 'display-6' : 'headline']" class="mb-4">
                            Welcome to My Gallery
                        </h2>

                        <p class="mb-7 font-weight-bold">
                            I am a person who is passionate about life, so I will record every bit of my life.
                        </p>

                        <p class="mb-7 font-weight-bold">
                            I have a dog (MoMo) and a cat (Milton), and they bring a lot of fun in my life.
                            In my spare time, I also love driving and travelling.
                        </p>
                    </v-col>
                    <v-col cols="12" md="5" offset-md="1">
                        <v-card class="mt-10">
                            <v-img src="../assets/CoverGallery.jpeg"/>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <section class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col
                            v-for="(item, i) in pics"
                            :key="i"
                            class="d-flex child-flex"
                            cols="4"
                    >
                        <v-card flat tile class="d-flex">
                            <v-img
                                    :src="item.img"
                                    aspect-ratio="1"
                                    class="grey lighten-2"
                            >
                                <template v-slot:placeholder>
                                    <v-row
                                            class="fill-height ma-0"
                                            align="center"
                                            justify="center"
                                    >
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
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
        name: "Gallery",
        components: {HeadTitle},
        data(){
            return{
                pics:[
                    {name: 'g1', img:require('../assets/gallery/g1.jpeg')},
                    {name: 'g2', img:require('../assets/gallery/g2.jpeg')},
                    {name: 'g3', img:require('../assets/gallery/g3.jpeg')},
                    {name: 'g4', img:require('../assets/gallery/g4.jpeg')},
                    {name: 'g5', img:require('../assets/gallery/g5.jpeg')},
                    {name: 'g6', img:require('../assets/gallery/g6.jpeg')},
                    {name: 'g7', img:require('../assets/gallery/g7.jpeg')},
                    {name: 'g8', img:require('../assets/gallery/g8.jpeg')},
                    {name: 'g9', img:require('../assets/gallery/g9.jpeg')},


                ]
            }
        }
    }
</script>

<style scoped>

</style>
