## エクササイズ

掲示板アプリを作る

## 1. 開発のベース作り

以下の5つを行う

- 完成形の動作確認(これから実装するアプリのイメージを把握する)
- Vue CLIでVueの開発環境の構築
- 不要なファイルの削除
- normalize.cssのインストール
- npm run serveでの動作確認

---

## 2. コンポーネント作成その1~見た目部分~

以下3つのコンポーネント作成を行う。

- Header.vue
- SideMenu.vue
- Main.vue

App.vueで上記3つを読み込み、

- Headerの固定
- SideMenuの固定
- Main.vue部分のみ縦にコンテンツが長いとスクロールすることを確認する

---

## 3. コンポーネント作成その2~見た目部分~

以下4つのコンポーネント作成を行う。
(機能実装は後回し)

- Button.vue
- TextBox.vuez
- MessageList.vue
- Message.vue


---

## 4. Main.vue → MessageList.vue → Message.vueのデータの流れを作る

- Main.vueでダミーの10件の配列データを作る
  - 1件1件のデータは「body」「date」プロパティを持ったオブジェクトで、どちらもstring型
- Main.vueで作った10件のダミーデータをMessageList.vueに渡す
  - propsの設定とvalidationの実装を行う
- 3で作ったMessageList.vueの「v-for="n in 10"」の代わりに「v-for="(message, index) in messages"」を使う
- messageデータをMessageに渡す

---


## 5. Main.vueとTextBox.vueの連携部分を実装する

- TextBox.vueの投稿ボタンをクリックしたときの動作を実装する
    - TextBox.vue(=子コンポーネント)
        - 文字入力がない場合(=彼文字列)はalertで1文字以上の入力が必要であることを知らせる
        - 文字が入力されていたら「body」「date」プロパティを持つオブジェクトを作る
            - body: 入力した文字をセットする
            - date: 「new Date().toLocaleString()」結果をセットする
        - propsで受け取った関数経由で、親(Main.vue)に作成したオブジェクトを渡す
    - Main.vue(=親コンポーネント)
        - 4で作ったMessageList.vueに渡すダミーデータを削除する
        - TextBox.vueから受け取ったオブジェクトをdataの配列messagesに追加する
        - computedで配列messagesを反転する
        - 反転したmessagesをMessagesList.vueに渡す