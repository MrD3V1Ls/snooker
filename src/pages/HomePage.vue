<template>
    <div>
        <header class="header">
            <div class="container">
                <h1 class="logo">Snooker Score Tracker</h1>
            </div>
        </header>
        <main class="main">
            <div class="container">
                <div class="row">
                    <div class="col" v-for="(player, index) in players" :key="index">
                        <div class="card">
                            <div class="card-header">{{ player.name }}</div>
                            <div class="card-body">
                                <div class="score">{{ player.score }}</div>
                                <div class="buttons">
                                    <button class="btn btn-primary" @click="updateScore(index, 1)">+1</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 2)">+2</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 3)">+3</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 4)">+4</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 5)">+5</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 6)">+6</button>
                                    <button class="btn btn-primary" @click="updateScore(index, 7)">+7</button>
                                </div>
                                <div class="buttons">
                                    <button class="btn btn-primary" @click="reduceScore(index, 1)">-1</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 2)">-2</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 3)">-3</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 4)">-4</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 5)">-5</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 6)">-6</button>
                                    <button class="btn btn-primary" @click="reduceScore(index, 7)">-7</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            players: [
                { name: "Mr.D3V1L", score: 0 },
                { name: "DeNuke", score: 0 },
                { name: "Prince PR", score: 0 },
                { name: "Marsh", score: 0 },
                { name: "Poppingash", score: 0 }
            ]
        };
    },
    created() {
        this.shuffle();
    },
    methods: {
        test() {
            console.log("test");
        },
        shuffle() {
            var array = this.players;
            let currentIndex = array.length, randomIndex;

            while (currentIndex != 0) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }
            return array;
        },
        updateScore(index, value) {
            this.players[index].score += value;
        },
        reduceScore(index, value) {
            this.players[index].score -= value;
        }
    }
};
</script>
  
<style scoped>
.header {
    background-color: #f5f5f5;
    padding: 20px 0;
}

.header .logo {
    font-size: 28px;
    font-weight: bold;
    color: #111;
}

.main {
    background-color: #fff;
    padding: 20px 0;
}

.card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.card-header {
    background-color: #111;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    padding: 20px;
    text-align: center;
}

.card-body {
    padding: 20px;
    text-align: center;
}

.score {
    font-size: 64px;
    font-weight: bold;
    margin-bottom: 20px;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    background-color: #111;
    color: #fff;
    border-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    text-align: center;
    transition: all 0.2s ease-in-out;
}

.btn:hover {
    background-color: #fff;
    color: #111;
}
</style>