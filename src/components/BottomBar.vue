<template>
    <nav class="sidebar">
        <div class="brand">
            <svg viewBox="0 0 1134 340" class="spotify-logo--text">
                <title>Spotify</title>
                <path fill="currentColor"
                    d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z">
                </path>
            </svg>
        </div>
        <div class="menu main-menu">
            <div class="menu--item active">
                <a href="#">
                    <i class="lni-home"></i> <span class="menu--item--text">Home</span>
                </a>
            </div>
            <div class="menu--item">
                <a href="#">
                    <i class="lni-search"></i> <span class="menu--item--text">Search</span>
                </a>
            </div>
            <div class="menu--item">
                <a href="#">
                    <i class="lni-library"></i> <span class="menu--item--text">Library</span>
                </a>
            </div>
        </div>
        <p class="sidebar--header">PLAYLIST</p>
        <div class="menu menu-extra">
            <div class="menu--item">
                <a href="#">
                    <img src="http://via.placeholder.com/32x32" alt="">
                    <span class="menu--item--text">Create a playlist</span>
                </a>
            </div>
            <div class="menu--item">
                <a href="#">
                    <img src="http://via.placeholder.com/32x32" alt="">
                    <span class="menu--item--text">Songs that you like</span>
                </a>
            </div>
        </div>
        <div class="separator"></div>
        <div class="menu menu-playlist">
            <div class="menu--item">
                <a href="#">
                    <span class="menu--item--text">Dev</span>
                </a>
            </div>
            <div class="menu--item">
                <a href="#">
                    <span class="menu--item--text">That playlist that I really liked from the show</span>
                </a>
            </div>
        </div>
        <div class="sidebar--download-app">
            <a href="#">
                <i class="lni-arrow-down-circle"></i> <span>Install the app</span>
            </a>
        </div>
    </nav>
    <div class="header">
        <div class="header--bg"></div>
        <div class="header--actions">
            <div class="header--buttons">
                <button class="header--button previous"><i class="lni-chevron-left"></i></button>
                <button class="header--button next"><i class="lni-chevron-right"></i></button>
            </div>
        </div>
        <div class="dropdown">
            <button class="dropdown--button">
                <span class="user-icon"><i class="lni-user"></i></span>
                <span class="text-bold">username</span>
                <span><i class="lni-chevron-down"></i></span>
            </button>
            <ul class="dropdown--content">
                <li>Account</li>
                <li>Logout</li>
            </ul>
        </div>
    </div>
    <main>
        <section class="section">
            <div class="section--header">
                <div class="section--header--left">
                    <h2 class="title">Άκουσες πρόσφατα</h2>
                </div>
                <div class="section--header--right">
                    <a href="#" class="section--header--right--more">VIEW ALL</a>
                </div>
            </div>
            <div class="section--body">
                <div class="section--body--item album--item">
                    <div class="section--body--item--img">
                        <img src="http://via.placeholder.com/150x150" alt="">
                    </div>
                    <p class="section--body--item--title">Album name</p>
                    <p class="section--body--item--subtitle"><a href="#">Artist name</a></p>
                    <div class="section--body--item--play">
                        <i class="lni lni-play"></i>
                    </div>
                </div>

                <div class="section--body--item artist--item">
                    <div class="section--body--item--img">
                        <img src="http://via.placeholder.com/150x150" alt="">
                    </div>
                    <p class="section--body--item--title">LEX</p>
                    <p class="section--body--item--subtitle">Artist</p>
                    <div class="section--body--item--play">
                        <i class="lni lni-play"></i>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="section--header">
                <div class="section--header--left">
                    <h2 class="title">Jump back in</h2>
                    <h3 class="subtitle">What you listened most in the last months.</h3>
                </div>
            </div>
            <div class="section--body">
                <div class="section--body--item album--item">
                    <div class="section--body--item--img">
                        <img src="http://via.placeholder.com/150x150" alt="">
                    </div>
                    <p class="section--body--item--title">Album name</p>
                    <p class="section--body--item--subtitle"><a href="#">Artist name</a></p>
                    <div class="section--body--item--play">
                        <i class="lni lni-play"></i>
                    </div>
                </div>

                <div class="section--body--item artist--item">
                    <div class="section--body--item--img">
                        <img src="http://via.placeholder.com/150x150" alt="">
                    </div>
                    <p class="section--body--item--title">LEX</p>
                    <p class="section--body--item--subtitle">Artist</p>
                    <div class="section--body--item--play">
                        <i class="lni lni-play"></i>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <div class="bottom-bar">
        <div class="bottom-bar--left-col">
            <div class="bottom-bar--left-col--song">
                <div class="bottom-bar--left-col--song--img">
                    <div class="bottom-bar--left-col--song--img--pull-up">
                        <i class='lni lni-chevron-up'></i>
                    </div>
                    <img src="http://via.placeholder.com/150x150" alt="">
                </div>
                <div class="bottom-bar--left-col--song--details">
                    <div class="bottom-bar--left-col--song--details--wrapper">
                        <a href="#" class="bottom-bar--left-col--song--details--title">Song Title</a>
                    </div>
                    <div class="bottom-bar--left-col--song--details--wrapper">
                        <a href="#" class="bottom-bar--left-col--song--details--artist">Artist</a>
                    </div>
                </div>
            </div>
            <div class="bottom-bar--left-col--actions">
                <button class="bottom-bar--left-col--actions--favorite">
                    <i class='lni lni-heart'></i>
                </button>
                <button class="bottom-bar--left-col--actions--pip">
                    <i class="pip-icon"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import tracks from '@/assets/Tracks.json'
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
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
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

<style>
html {
    font-size: 16px;
}

body {
    margin: 0;
    color: #fff;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: -0.35px;
}

::root {
    --main-color: #1db954;
    --light-color: #1ed760;
}

.text-bold {
    font-weight: 700;
}

.sidebar {
    background-color: rgba(4, 4, 4);
    padding: 24px 24px 0 24px;
    position: fixed;
    height: 100%;
    width: 230px;
}

.sidebar .brand {
    padding-bottom: 18px;
}

.sidebar .brand svg {
    width: 131px;
}

.sidebar .menu .menu--item {
    font-size: 1.5rem;
    position: relative;
    /* Needed for the .active state to add the background */
}

.sidebar .menu.menu-extra .menu--item:not(:first-child) {
    margin-top: 5px;
}

.sidebar .menu .menu--item a,
.sidebar .sidebar--download-app a {
    text-decoration: none;
    color: #B3B3B3;
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
    transition: all 350ms;
}

.sidebar .menu.menu-extra .menu--item a img {
    opacity: 0.7;
    transition: all 350ms;
}

.sidebar .menu.menu-extra .menu--item:hover a img {
    opacity: 1;
}

.sidebar .menu .menu--item.active a,
.sidebar .menu .menu--item:hover a,
.sidebar .sidebar--download-app:hover a {
    color: #fff;
}

/* Active state of the menu  item, adds a background color to the element */
.sidebar .menu .menu--item.active:before {
    content: ' ';
    position: absolute;
    top: 0;
    height: 100%;
    left: 8px;
    left: -16px;
    /* -(Sidebar's padding left) + 8px */
    right: -16px;
    /* -(Sidebar's padding left) + 8px */
    background: rgb(40, 40, 40);
    z-index: -1;
    border-radius: 5px;
}

.menu--item--text,
.sidebar--download-app a span {
    font-size: 0.88rem;
    font-weight: 700;
    margin-left: 15px;
}

.sidebar--header {
    margin-top: 24px;
    margin-bottom: 20px;
    font-size: 0.68rem;
    letter-spacing: 1.5px;
    color: #B3B3B3;
}

.sidebar .separator {
    height: 1px;
    width: 100%;
    border-top: 1px solid #303030;
    margin-top: 16px;
}

.sidebar .menu.menu-playlist .menu--item--text {
    font-weight: 400;
    margin-left: 0;
    /*
                Add ellipsis when the text is bigger than the width of the sidebar
                Read more: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
            */
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.sidebar .menu.menu-playlist a {
    cursor: default;
}

.sidebar--download-app {
    position: absolute;
    bottom: 0;
}

.header {
    position: fixed;
    top: 0;
    left: 230px;
    /* sidebar width */
    right: 0;
    height: 60px;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
}

.header--bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    background-color: rgb(12, 12, 12);
    z-index: 0;
}

.header--buttons {
    position: relative;
}

.header--button {
    background: rgb(7, 7, 7);
    color: #fff;
    border: 0;
    border-radius: 50%;
    height: 34px;
    width: 34px;
    cursor: pointer;
    outline: 0;
}

.header--button.previous {
    margin-right: 10px;
}

.dropdown {
    position: relative;
}

.dropdown--button {
    outline: 0;
    border: 0;
    color: #fff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(45, 45, 45);
    padding: 6px 14px 6px 8px;
    font-size: 0.75rem;
    line-height: 0.75rem;
    cursor: pointer;
    user-select: none;
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.5);
}

.dropdown--button:hover,
.dropdown.open .dropdown--content li:hover {
    background-color: rgb(49, 49, 49);
    color: #fff;
}

.header .dropdown--button span:not(:last-child) {
    margin-right: 10px;
}

.header .dropdown--button .user-icon {
    font-size: 1.3rem;
}

.dropdown--content {
    display: none;
    position: absolute;
    list-style: none;
    right: 0;
    margin: 10px 0 0 0;
    padding: 0;
    width: 160px;
    background-color: rgb(40, 40, 40);
    border-radius: 5px;
    box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.5);
}

.dropdown.open .dropdown--content {
    display: block;
}

.dropdown .dropdown--content li {
    padding-left: 40px;
    font-size: 0.9rem;
    border-bottom: 1px solid rgb(64, 64, 64);
    color: #b3b3b3;
    user-select: none;
    height: 40px;
    line-height: 40px;
}

.dropdown .dropdown--content li:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.dropdown .dropdown--content li:last-child {
    border-bottom: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

main {
    padding: 80px 32px 32px 262px;
    max-height: 100vh;
    min-height: 100vh;
    /* background: dodgerblue; */
    overflow-y: auto;
}

main::-webkit-scrollbar {
    width: 16px;
}

main::-webkit-scrollbar-thumb {
    background-color: #909090;
}

main::-webkit-scrollbar-track {
    background-color: rgb(18, 18, 18);
}




/*  PART 3 */
.header--actions {
    display: flex;
    align-items: center;
}

.header--search {
    margin-left: 25px;
    min-width: 360px;
}

.input-group {
    position: relative;
}

.input-group .left-icon {
    position: absolute;
    z-index: 2;
    left: 15px;
    top: 0;
    color: #333;
    font-size: 1.375rem;
    height: 40px;
    line-height: 40px;
}

.input {
    margin: 0;
    border: 0;
    position: relative;
    z-index: 1;
    height: 40px;
    border-radius: 25px;
    width: 100%;
    outline: 0;
}

.input-group.has-left-icon .input {
    padding-left: 50px;
}

.input-group.has-right-icon .input {
    padding-right: 50px;
}

.input-group .right-icon {
    position: absolute;
    z-index: 2;
    right: 15px;
    color: #333;
    font-size: 0.9375rem;
    height: 40px;
    line-height: 40px;
}

.input-group .right-icon.clear--search {
    z-index: 0;
}

main {
    background-color: rgb(18, 18, 18);
}

.section {
    margin-bottom: 35px;
}

.title {
    font-size: 1.75rem;
    margin-top: 0;
    line-height: 1.75rem;
}

.section--body {
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-bottom: -16px;
}

.section--body--item {
    position: relative;
    z-index: 1;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 16px;
    margin-bottom: 16px;
}

.category--item {
    width: 180px;
    height: 180px;
    background-color: rgb(245, 155, 35);
}

.category--item:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 212, 255, 0) 100%);
    z-index: -1;
}

.category--item a {
    display: block;
    height: 100%;
    width: 100%;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.category--item a h3 {
    margin: 0;
    padding-top: 16px;
    padding-left: 16px;
}

.category--item img {
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: -5px;
    right: -18px;
    transform: rotate(25deg);
    z-index: 0;
    box-shadow: -1px 3px 2px 0px rgba(0, 0, 0, 0.1);
}

.section--body--item.section--body--item--lg.category--item {
    width: 376px;
    /* (2 * normal section--item width) + 16px [margin-right: 16px] */
    height: 220px;
}

.section--body--item.section--body--item--lg.category--item img {
    width: 130px;
    height: 130px;
}

.section--body--item.section--body--item--lg.category--item a h3 {
    font-size: 2.5rem;
}


/* PART 4 */
main .section .subtitle {
    color: #b3b3b3;
    font-size: 1rem;
    margin-top: -8px;
    font-weight: 100;
}

.section--header {
    display: flex;
    justify-content: space-between;
}

.section--body--item {
    width: 165px;
    height: 240px;
    background-color: rgb(38, 38, 38);
}

.section--body--item.album--item,
.section--body--item.artist--item {
    padding: 20px;
    cursor: pointer;
}

.section--body--item .section--body--item--img {
    width: 125px;
    height: 125px;
    margin: 0 auto;
}

.section--body--item .section--body--item--img img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, .3), 0 1px 2px 0 rgba(0, 0, 0, .2);
}

.section--body--item--title {
    margin-top: 1rem;
    margin-bottom: 0;
    font-weight: 600;
    font-size: 0.9rem;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
}

.section--body--item--subtitle {
    margin: 0;
    margin-top: 1px;
}

a.section--header--right--more,
.section--body--item--subtitle,
.section--body--item--subtitle a {
    color: #b3b3b3;
    font-size: 0.8rem;
    text-decoration: none;
}

a.section--header--right--more:hover,
.section--body--item--subtitle a:hover {
    border-bottom: 1px solid #b3b3b3;
}

a.section--header--right--more {
    font-weight: 700;
    letter-spacing: 1.35px;
}

/* Add artist circle image */
.section--body--item.artist--item .section--body--item--img img {
    border-radius: 50%;
}

.section--body--item--play {
    display: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #1db954;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
    box-shadow: 0px 0px 8px 8px rgb(37, 37, 37);
    cursor: default;
}

.section--body--item--play:hover,
.section--body--item--play.active {
    transform: scale(1.05);
}

.section--body--item:hover .section--body--item--play,
.section--body--item--play.active {
    display: flex;
}


/* PART 5 Bottom Bar Left column*/

main {
    max-height: calc(100vh - 90px);
    /* 90px is the height of the bottom bar */
    min-height: calc(100vh - 90px);
    /* 90px is the height of the bottom bar */
}

.sidebar {
    height: calc(100% - 90px);
    /* 90px is the height of the bottom bar */
}

.bottom-bar {
    width: 100%;
    height: 90px;
    border-top: 1px solid #000;
    background-color: rgba(24, 24, 24, 1);
    z-index: 1;
    position: absolute;
    bottom: 0;
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
}

.bottom-bar--left-col {
    display: flex;
    align-items: center;
    position: relative;
    transition: left 300ms;
    left: 0;
}

.bottom-bar--left-col.expanded {
    left: -80px;
}

.bottom-bar--left-col--song {
    display: flex;
}

.bottom-bar--left-col--song--img {
    margin-right: 14px;
    display: flex;
    position: relative;
}

.bottom-bar--left-col--song--img img {
    height: 56px;
    width: 56px;
    box-shadow: 0 10px 30px 0 rgba(0, 0, 0, .3), 0 1px 2px 0 rgba(0, 0, 0, .2);
}

.bottom-bar--left-col--song--img--pull-up {
    position: absolute;
    top: 4px;
    right: 4px;
    background: #000;
    width: 24px;
    height: 24px;
    opacity: 0.7;
    border-radius: 50%;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: #b3b3b3;
}

.bottom-bar--left-col--song--img--pull-up:hover {
    opacity: 0.8;
    transform: scale(1.1);
    color: #fff;
}

.bottom-bar--left-col--song--img:hover .bottom-bar--left-col--song--img--pull-up {
    display: flex;
}

.bottom-bar--left-col--song--details {
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-right: 14px;
}

.bottom-bar--left-col--song--details--wrapper {
    display: block;
    line-height: 17px;
}

.bottom-bar--left-col--song--details a {
    display: inline;
    text-decoration: none;
    color: #fff;
    letter-spacing: 0;
}

.bottom-bar--left-col--song--details a:hover {
    color: #fff;
    border-bottom: 1px solid #fff;
}

.bottom-bar--left-col--song--details--title {
    font-size: 0.875rem;
}

.bottom-bar--left-col--song--details--artist {
    font-size: 0.75rem;
}

.bottom-bar--left-col--actions {
    display: flex;
    align-items: center;
}

.bottom-bar--left-col--actions--favorite {
    background: transparent;
    border: 0;
    outline: 0;
    color: #b3b3b3;
    font-size: 1rem;
    margin-right: 10px;
}

.bottom-bar--left-col--actions--favorite:hover {
    color: #fff;
}

.bottom-bar--left-col--actions--pip {
    background: transparent;
    border: 0;
    outline: 0;
    position: relative;
    width: 16px;
    height: 13px;
    padding: 0;
}

.pip-icon {
    border: 1px solid;
    border-bottom: 2px solid;
    border-radius: 1px;
    border-color: #b3b3b3;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.pip-icon:before {
    content: '';
    position: absolute;
    bottom: 1px;
    right: 1px;
    height: 3px;
    width: 5px;
    background: #b3b3b3;
    border-radius: 1px;
}

.bottom-bar--left-col--actions--pip:hover .pip-icon {
    border-color: #fff;
}

.bottom-bar--left-col--actions--pip:hover .pip-icon:before {
    background: #fff;
}</style>