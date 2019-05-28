<template>
<div>
    <h1>{{ appName }}</h1>
    <hr>
    <h3>注意点</h3>
    <ul><li>保存されません</li></ul>
    <hr>
    <h2>やること</h2>
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
                    id: 1, value: 'やること①',
                },
                {
                    id: 2, value: 'やること②',
                },
                {
                    id: 3, value: 'やること③',
                }
            ],
        }
    }
}
</script>
