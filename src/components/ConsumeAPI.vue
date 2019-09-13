<template>
<div>
    <h1>Bitcoin Price Index</h1>
    <p v-for="(currency, index) in info" :key="index">
        {{ currency.code }}: {{ currency.rate_float }}
    </p>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ConsumeAPI',
    data() {
        return {
            info: null,
        }
    },
    mounted() {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response=>(this.info = response.data.bpi));
    },
}
</script>
