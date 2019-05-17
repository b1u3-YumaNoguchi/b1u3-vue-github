# 開発ノート

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