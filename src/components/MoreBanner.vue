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
<!--                        <v-row align="center" justify="center" class="fill-height">-->
<!--                            <v-col cols="12" md="6" class="text-left mb-4">-->
<!--                                <h3 class="headline mb-3">{{more_intro[model].article}}</h3>-->
<!--                                <p class="mb-0">{{more_intro[model].content}}</p>-->
<!--                            </v-col>-->

<!--                            <v-col cols="12" md="6">-->
<!--                                <v-card elevation="24">-->
<!--                                    <v-img :src="more_intro[model].img" height="300"/>-->
<!--                                </v-card>-->
<!--                            </v-col>-->
<!--                        </v-row>-->
                        <v-row align="center" justify="center" class="fill-height" v-if="model===1" py-5 mx-auto>
                            <v-col cols="12" md="6" class="text-left mb-4">
                                <h3 class="headline mb-3">My Music List</h3>
                                <p class="mb-0">I put my favorite musics here</p>
                            </v-col>
                            <v-col cols="12" md="6">

                                    <aplayer :music="{
                                title: 'Rage your dream',
                                artist: 'm.o.v.e',
                                src: 'https://sharefs.yun.kugou.com/202007091140/7781c9b5dd7e30f94deefffb9fc373a2/G197/M08/06/1F/pZQEAF51_36AJ-U9AEOICp-K6Aw640.mp3',
                                pic: 'https://cdn.myanimelist.net/images/anime/13/6801l.jpg'
                                }" theme="#b7daff" :list="musics"></aplayer>

                            </v-col>
                        </v-row>
                    </v-container>
                </v-scroll-y-transition>
            </v-sheet>
        </v-expand-transition>
    </section>
</template>

<script>
    import aplayer from 'vue-aplayer'
    export default {
        name: "MoreBanner",
        components: {aplayer},
        data(){
            return{
                musics:[
                    {
                        title: 'Rage your dream',
                        artist: 'm.o.v.e',
                        src: 'https://drive.google.com/file/d/1WZ7tjV0h_PVGGtPHVIsut9rgeYBBadSj/view?usp=sharing',
                        pic: 'https://cdn.myanimelist.net/images/anime/13/6801l.jpg'
                    },
                    {
                        title: 'Let Me Down Slowly',
                        artist: 'Alec Benjamin',
                        src: 'https://drive.google.com/file/d/1OvDd5j5AhcKfA8BWezBTz0njVC2O6G3O/view?usp=sharing',
                        pic: 'https://images.shazam.com/coverart/t454071084-i1447566311_s400.jpg'
                    },
                    {
                        title: 'That Girl',
                        artist: 'Olly Murs',
                        src: 'https://drive.google.com/file/d/12QHQdsekVBbGbgBpIrAqhtMQgZwqkmhI/view?usp=sharing',
                        pic: 'https://vignette.wikia.nocookie.net/olly-murs-official/images/6/64/That_Girl_%28Ye_Remix%29_Single_Cover.jpg/revision/latest?cb=20200202171835'
                    },
                    {
                        title: '野狼 Disco',
                        artist: '宝石GEM',
                        src: 'https://drive.google.com/file/d/15_rn_NwbsPN4vl4MPcH7oRBRl2JbMMI_/view?usp=sharing',
                        pic: 'https://i.ytimg.com/vi/TWm31xbRVjI/maxresdefault.jpg'
                    },
                ],
                model: 0,
                more_intro: [
                    {
                        img: require('../assets/code.jpg'),
                        article: "Code Projects",
                        content: "Here will show a shortcut of my projects"
                    },
                    {
                        img: require('../assets/Music.png'),
                        article: "Music Lists",
                        content: "Here will show a music player for the music that I love"
                    },
                    {
                        img: require('../assets/Videos.jpg'),
                        article: "Video Works",
                        content: "Here will show a video player (maybe Youtube) for the videos that I produced"
                    },
                    {
                        img: require('../assets/Games.jpg'),
                        article: "Games Lover",
                        content: "Games"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
