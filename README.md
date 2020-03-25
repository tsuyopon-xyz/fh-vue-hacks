## エクササイズ

掲示板アプリとFirebaseを連携する

YouTubeの再生リストで「[Firebase入門](https://www.youtube.com/playlist?list=PLgNEd6Q0CH8E6zHmqsO7EIcqsDEeVD089)」を用意しているので、

そちらで事前にFirebaseの学習している前提で話をすすめる。
まだFirebaseを触ったことない場合は、まずはFirebase入門の動画を参考に、
Firebaseと連携するイメージを付けるところから初めていただけたらと思います。

---

1. Firebaseの環境を整える

- 【Firebase】掲示板アプリ用のFirebaseプロジェクトを作る
- 【Firebase】Firestoreの環境を用意する
- 【Firebase】Webアプリプロジェクトとして作る
- 【JS】firebaseのライブラリをnpm installする


2. Firestoreでデータを送信して保存する

- src/db/index.jsを作る
  - Firestore周りの設定を行う
- src/models/Message.jsを作る
  - Messasgeクラスとして作り、インスタンス生成時は以下の引数を受け取り、そのままプロパティとしてセットする
    - id: FireStoreのドキュメントのID(文字列)
    - body: TextBoxに入力した文字(文字列)
    - date: 投稿した時間の文字列(文字列)
  - Firestoreと連携するクラスメソッドを用意する
    - save
      - 投稿ボタンをクリックしたら実行する。投稿後のデータをMessageインスタンスに変換して呼び出し元に返す
- TextBoxでデータの送信を行う


3. Firestoreに保存されているデータを取得して表示する
  - Firestoreと連携するクラスメソッドを用意する
    - fetchMessages
      - Firestoreからデータを取得して、取得したデータを全てMessageインスタンスに変換して返す
  - Main.vueの「created」のタイミングでFirebaseからデータを取得する


4. 読み込み中のアイコン表示と、データ0件時の表示を実装する