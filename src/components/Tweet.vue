<template>
	<div>
		<h1>Tweet</h1>
		<input v-model="content" size="40" maxlength="140">
		<button v-on:click="tweet">ツイート</button>
		<p>{{ count }}</p>
		<p>{{ info }}</p>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Tweet',
	// data: function() {} の syntax sugar
	data() {
		return {
			content: "",
			count: 0,
			info: "",
		}
	},
	methods: {
		tweet() {
			this.count += 1;
			axios.get('http://127.0.0.1:8000/redirect').then(response=>(this.info=response));
		},
	},
}
</script>
