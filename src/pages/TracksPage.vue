<template>
    <!-- BASEN ON DRIBBBLE SHOT: https://dribbble.com/shots/2209627-UI8-Nav -->

    <div class="container">
        <span class="menu-trigger">
            <i class="menu-trigger-bar top"></i>
            <i class="menu-trigger-bar middle"></i>
            <i class="menu-trigger-bar bottom"></i>
        </span>
        <span class="close-trigger">
            <i class="close-trigger-bar left"></i>
            <i class="close-trigger-bar right"></i>
        </span>
        <span class="logo">
            <span>
                ⬢
                <i class="logo-title">UI</i>
                <i class="logo-badge">6</i>
            </span>
        </span>
        <div class="inner-container">
            <i class="menu-bg top"></i>
            <i class="menu-bg middle"></i>
            <i class="menu-bg bottom"></i>
            <div class="menu-container">
                <ul class="menu">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Create account</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- -->
    <div id='links'>
        <a id='twitter' href="https://twitter.com/karlovidek" target="_blank"><span class='fa fa-twitter'></span></a>
        <div id='pens'><a href="https://codepen.io/karlovidek/" target="_blank"><span class='fa fa-codepen'></span></a> my
            other Pens</div>
    </div>
</template>

<script>
import tracks from '../assets/Tracks.json';

export default {
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: tracks,
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    computed: {
        getCover: function () {
            return this.tracks[this.currentTrackIndex].cover;
        }
    },
    methods: {
        play(track) {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = track;
            console.log(this.currentTrack);
            this.resetPlayer();
            console.log(this.isTimerPlaying)
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function () {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function () {
            vm.generateTime();
        };
        this.audio.onended = function () {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
};
</script>

<style scoped>
@import '../css/test.css';
@import '../css/miniStyle.css';
</style>