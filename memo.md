# 今やってること

- bottom tab を作る

- 1. そのために react-navigation を install

```
npm install @react-navigation/native

expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

追加で bottom-tabs を install

```
npm install @react-navigation/bottom-tabs
```

(nodenv を使っている人は `nodenv rehash` が必要かも)

- 2. install したら tab をつくる

画面を実装するファイルを作る

```
src/app
    └── components
        ├── AddTodo
        │   └── index.tsx
        └── TodoList
            └── index.tsx
```

2file編集する
(App.tsx から Screen を分割する)

- `src/app/components/AddTodo/index.tsx`

- `src/app/components/TodoList/index.tsx`

App.tsx で import
(Screen を import して使う)

コミットしておく

# 次やること

- BottomTab に icon を乗せる

