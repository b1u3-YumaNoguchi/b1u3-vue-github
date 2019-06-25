# 開発ノート

## Less あれこれ
``` less
// 変数
@link-color: #428bca;
@link-color-hover: darken(@link-color, 10%);

// 変数の使用
a,
.link {
  color: @link-color;
}

// 変数をセレクタとして使う
@my-selector: abc;

// class=abcが付いてるやつは全部適用
.@{my-selector}{
  ...
}

// url
@image: "../imgs";

.link {
  // ""内で展開してくれるパターン
  background: url("@{image}/white-sand.png");
}


```

出典(http://lesscss.org/features/)


## less のビルドの仕方

自分のプロジェクトのビルドワークフローに従うなら、App.vueのscriptに変更を加える。

> @import "node_modules/uikit/src/less/uikit.theme.less";

## Vue router の使い方

ネストさせずに同時に複数の view を表示したい時、名前付きビューが使える

```javascript
<router-view></router-view>//これはname="default"になっている
<router-view name="main"></router-view>
<router-view name="sidebar"></router-view>
```

1 つの view は 1 つのコンポーネントを使って描画される。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      // ここは、上の例で、view が 3 つあるからコンポーネントでこうなる
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```

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

