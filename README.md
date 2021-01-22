# README

## Description

- REST API / CRUD
- Express + TypeORM
- TypeScript

## Getting Started

### Clone

```bash
git clone https://github.com/kiyotd/sample-typeorm-crud.git
```

### Setup database settings

- `ormconfig-sample.json` を `ormconfig.json` にリネーム後、データベースを作成し接続に必要な情報を記述
- テーブル自体はアクセス時に作成される

MySQL を使う場合は、以下のモジュールが必要です。

```bash
yarn add mysql
```

OR

```bash
npm i mysql
```

### Runs the app

#### Go to the project directory

```bash
cd sample-typeorm-crud
```

#### Install the module and run the app

```bash
yarn install
yarn dev
```

OR

```bash
npm i
npm run dev
```


Open [http://localhost:3000/users](http://localhost:3000/users) to view it in the browser.

## Reference

[TypeORM CRUD REST API](https://www.youtube.com/watch?v=pCxL1sdjeCc)

## Author

**kiyotd**  
web designer, front-end engineer

- [kiyotd.com](https://kiyotd.com/)
- [twitter](https://twitter.com/_kiyotd)
- [github](https://github.com/kiyotd)
