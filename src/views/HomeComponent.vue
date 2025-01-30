<template>
  <div class="first-page">
    <div class="head-text">
      <h1>練習へようこそ</h1>
    </div>

    <form @submit.prevent="submitForm" id="userInput">
      <input
        v-model="userInput"
        type="text"
        placeholder="今日の意気込みを入力するのだ！"
      />
    </form>
    <button class="btn" type="submit">送信</button>
    <p>localStorageに一旦保存する</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
    };
  },
  methods: {
    submitForm() {
      // 入力データをローカルストレージに保存
      localStorage.setItem('userInput', this.userInput);
      alert('入力内容を保存しました！');
    },
  },
};
</script>

<style>
.first-page {
  text-align: center;
}

#userInput {
  width: 80%;
  height: auto;
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
}

.first-page p {
  color: #bbb;
}

.head-text {
  color: red;
  text-align: center;
}

.btn {
  text-align: center;
  margin-top: 3%;
}
</style>
