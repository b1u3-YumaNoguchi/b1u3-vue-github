<template>
<h2>This is websocket sample</h2>
<p>{{ msg }}</p>
</template>
<script>
const wsUri = "wss://echo.websocket.org/";

export default {
    name: 'RealtimeImpression',
    data() {
        return {
            msg: 'This is initialized data',
        }
    },
}
</script>
<style lang="less">
</style>