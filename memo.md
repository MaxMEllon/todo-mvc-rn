# 今やってること

onSubmit で API に通信して task を作成する
- [x] Props に onSubmit 型を追加
- [x] 関数の引数からそれを渡す
- [x] container で関数を定義する
- [x] onSubmit 関数を container から渡す
- [x] ボタンが押されたら関数が呼ばれるか確認する

## http request していく
- [x] payload を作る
- [x] axios を install する
```
npm install axios
```
- [x] リクエストを投げていく
- [ ] ターミナルから curl を叩いて実際に作成されたか見てみる
```
curl http://localhost:3000/todo
```
- [x] 作成に成功したら入力済みの `todoTitle` を 空にする
- [x] title が空のTodoを作成できないようにする

# 次

- [x] 作成に成功したら Snackbar 的なコンポーネントで ユーザーに知らせる
- [x] Snackbar の見た目をつくる
- [x] Snackbar をコンポーネント化する
- 任意 : [ ] 作成の通信中 ボタンを disable にする


# きゅうけい

~16:00