<template>
<!-- div がなくても大丈夫か 確認する -->
<div>
<h1>Welcome to my app!!<h1>
<p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
</p>
<router-view></router-view>
</div>
</template>

<script>
    import Vue from 'vue'
    import 
    export default {
        'name': 'Home',
    }
</script>

<style>
</style>