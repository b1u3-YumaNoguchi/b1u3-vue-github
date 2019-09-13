<template>
<div>
    <h1>{{ appName }}</h1>
    <hr>
    <h3>注意点</h3>
    <ul><li>LocalStorageに保存されます</li></ul>
    <hr>
	<label v-for="label in options" :key="label.value">
		<!-- v-modelで current と双方向バインドさせる. ラジオボタンが変更されると、currentが変わる、:valueで current.value = label.value が行われる -->
		<input type="radio" v-model="current" :value="label.value">{{ label.label }}
	</label>
    <h2>やること</h2>
	<p> {{ todoList.length }} 件中 {{ computedTodoList.length }} 件表示中</p>
	<table>
		<thead>
			<tr>
				<th class="id">ID</th>
				<th class="comment">コメント</th>
				<th class="state">状態</th>
				<th class="button">-</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in computedTodoList" :key="item.id">
				<th>{{ item.id }}</th>
				<td>{{ item.comment }}</td>
				<td class="state">
					<button @click="changeState(item)">{{ item.state }}</button>
				</td>
				<td class="button">
					<button @click="remove(item)">削除</button>
				</td>
			</tr>
		</tbody>
	</table>
	<!-- ref とは: refで付けたタグ名は、メソッドからアクセスできる. v-modelは双方バインディングできるが、html->vue方向のみやるので、$refsからやる -->
	<h2>新しい作業の追加</h2>
	<form class="add-form" @submit.prevent="add">
		<input type="text" ref="comment">
	</form>
</div>
</template>

<script>

/*
todosのフォーマット
[
	{ "id": 1, "comment": "新しいToDo1", "state": 0 },
	{ "id": 2, "comment": "新しいToDo2", "state": 0 }
]
*/

// localStorage用のkey
const STORAGE_KEY = 'todos-vuejs'

// TODO: 後で別ファイルにしてもいいかもしれない

var todoStorage = {
	fetch: function() {
		// なかったら空の配列を返す
		// '[]'だと、trueになり、なおかつそれがparseされる
		var todoList = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
		todoList.forEach(function(todo, index) {
			todo.id = index
		})
		todoStorage.uid = todoList.length
		return todoList
	},
	save: function(todos) {
		// stringify で json 化させる
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
	}
}

export default {
    name: 'ToDo',
    data: function() {
        return {
            // data名は、CamelCaseみたいなやつ
            appName: 'ToDo',
            todoList: [
            ],
			options: [
				{ value: 0, label: 'すべて' },
				{ value: 1, label: '作業中' },
				{ value: 2, label: '完了' },
			],
			current: 0,
        }
    },
    methods: {
        add() {
			var comment = this.$refs.comment
			if(!comment.value.length) {
				return
			}
			this.todoList.push({
				id: todoStorage.uid++,
				comment: comment.value,
				state: 1,
			})
			comment.value = ''
        },
		changeState(item) {
			item.state = (item.state++%2+1)
		},
		remove(item) {
			// indexOf(searchValue)
			var index = this.todoList.indexOf(item)
			// splice(start, deleteCount)
			this.todoList.splice(index, 1)
		},
    },
	watch: {
		todoList: {
			handler: function(todoList) {
				todoStorage.save(todoList)
			},
		},
		deep: true,
	},
	created() {
		this.todoList = todoStorage.fetch()
	},
	computed: {
		computedTodoList() {
			return this.todoList.filter(function(el) {
				if(this.current === 0) {
					return true
				}else if(this.current === el.state) {
					return true
				}
			}, this)
		}
	}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#app {
  max-width: 640px;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #0099e4; /*#d31c4a */
  color: #0099e4;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
tbody td.button, tbody td.state {
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: all 0.4s;
}
tbody tr.done td,
tbody tr.done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #0099e4;
  color: #fff;
  cursor: pointer;
}
</style>
