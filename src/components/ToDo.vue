<template>
<div>
    <h1>{{ appName }}</h1>
    <hr>
    <h3>注意点</h3>
    <ul><li>保存されません</li></ul>
    <hr>
    <h2>やること</h2>
    <input v-model="value" />
    <button @click="add">add</button>
    <ul> 
        <li v-for="item in todoList" :key="item.id">
            {{ item.value }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'ToDo',
    data: function() {
        return {
            // data名は、CamelCaseみたいなやつ
            appName: 'ToDo',
            todoList: [
                {
                    id: 0, value: 'やること①',
                },
                {
                    id: 1, value: 'やること②',
                },
                {
                    id: 2, value: 'やること③',
                }
            ],
            value: '',
        }
    },
    methods: {
        add() {
            if(this.value !== "") {
                this.todoList.push({ id: this.todoList.length, value: this.value });
                this.value = "";
            }
        },
    }
}
</script>
