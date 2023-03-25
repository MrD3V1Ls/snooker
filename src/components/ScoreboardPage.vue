// Scoreboard.vue

<template>
    <div class="scoreboard">
        <div class="player" v-for="(player, index) in players" :key="index">
            <h2>Player {{ index + 1 }}</h2>
            <p>Score: {{ player.score }}</p>
            <button @click="incrementScore(index)">+</button>
            <button @click="decrementScore(index)">-</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed: mapState({
        players: state => state.players
    }),

    methods: {
        ...mapMutations([
            'incrementScore',
            'decrementScore'
        ])
    }
}
</script>
