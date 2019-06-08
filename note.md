# 開発ノート

## テストのドキュメント

https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest

## Babel と Webpack の違い
* Webpackはモジュール化うんぬんかんぬんをやってくれるやつ
* Babelは js のコンパイラ


## Vue router の使い方

main.jsに以下を追加する

```
import router from './router';
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

routerファイルを用意してそこからrouterオブジェクトを引っ張って来る

```


## コンポーネントの登録

```
export default {
    ...
    components: {
        CamelCase,
    }
}
```

とした時、
テンプレート内では、

> `<camel-case></camel-case>`

もしくは

> `<camel-case />`

として使用することができる.

___/ Markdown内でのタグのエスケープはバッククオートで囲む ___

<hr>

# vue の基本

## データの表示

```html
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})

