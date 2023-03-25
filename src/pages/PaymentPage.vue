<template>
    <div>
        <header>
            <!-- Header content here -->
        </header>
        <main>
            <form @submit.prevent="onSubmit">
                <textarea v-model="inputValue"></textarea>
                <button type="submit">Add to Total</button>
            </form>
            <ul>
                <li v-for="(total, index) in totals" :key="index">{{ total }}</li>
            </ul>
        </main>
        <footer>
            <!-- Footer content here -->
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputValue: '',
            totals: []
        }
    },
    methods: {
        onSubmit() {
            const now = new Date();
            const dateKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
            const keyExists = this.totals.some(obj => Object.prototype.hasOwnProperty.call(obj, dateKey));
            var number = Number(this.inputValue);

            if (!keyExists && number) {
                const total = {
                    [dateKey]: number
                };
                this.totals.push(total);
            } else if (number) {
                this.totals.forEach(function (total) {
                    if (total[dateKey]) {
                        total[dateKey] = total[dateKey] + number;
                    }
                });
            }
            this.inputValue = '';
        }
    }
}
</script>