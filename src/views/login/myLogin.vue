<template>
  <div id="page" class="site">
    <div class="container">
      <div class="login" id="login">
        <div class="hero">
          <h1>登录 <br> 欢迎加入我们</h1>
          <p>如果你还没有账号,<br> 你可以点击 <a href="#">注册</a>.</p>
        </div>
        <div class="main">
          <div class="from">
            <p>
              <input type="text" v-model="username"/>
            </p>
            <p class="password">
              <input type="password" v-model="password" />
              <i class="ri-eye-off-line"></i>
              <a href="#">忘记密码?</a>
            </p>
            <p>
              <input type="submit" class="submit" value="登录" v-on:click="loginout"/>
            </p>
          </div>
          <div class="options">
            <div class="separator">
              <p>第三方登录</p>
            </div>
            <ul>
              <li><a href="#"><i class="ri-wechat-fill ri-2x"></i> </a> </li>
              <li><a href="#"><i class="ri-weibo-fill ri-2x"></i> </a> </li>
              <li><a href="#"><i class="ri-alipay-fill ri-2x"></i> </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'//
export default {
  name: 'myLogin',
  data: function () {
    return {
      username: 'admin',
      password: '123456'
    }
  },
  rules: {
    username: { required: true, message: '请输入账号', trigger: 'blur' }
  },
  methods: {
    loginout: function () {
      axios.get('http://localhost:8081/login', {
        params: { // 有参数时,若无参数时直接省略不写
          username: this.username,
          password: this.password
        }
      }).then((res) => {
        console.log(res.data.msg)
        if (res.data.code === 1) {
          this.$alert('登录失败', '提示')
          /* window.location.replace('myLogin') */
        } else {
          this.$alert('登录成功', '提示')
          localStorage.setItem('user_name', res.data.data)
          this.$router.push('/main')
        }
      })
    }
  }
}
</script>
<style >
:root {
  --primary-color:#4460f1;
  --white-color:#ffffff;

  --light-text-color:#9398b3;
  --light-bg-color:#f2f4ff;
  --dark-color:#333333;
  --background-color:#3333;
}
* {
  margin: 0;
  padding: 0;
}
*,::before,::after{
  box-sizing: border-box;
}
body {
  font-family: "Rage Italic", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;
  color: var(--dark-color);
  background:linear-gradient(110.5057981109727deg, rgba(236, 236, 236,1) 5.533854166666667%,rgba(195, 229, 248,1) 96.67968749999999%);
}
a{
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
h1 {
  font-size: 3em;
  font-weight: 700;
  line-height: normal;
  color: black;
}
.site {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.container {
  max-width: 1000px;
  width: 100%;
  padding: 0 30px;
  margin:0 auto;
}
.login {
  display: flex;
  flex-wrap: wrap;
}
.hero {
  flex:1 0 66.6666%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap:50px;
  left:10px;
  padding: 70px 0;
}
.hero::before {
  content: '';
  position: absolute;
  top: 15%;
  left: 100px;
  width: 280px;
  height: 100px;
  background: linear-gradient(110.5057981109727deg, rgba(224, 247, 135,1) 5.533854166666667%,rgba(78, 227, 250,1) 96.67968749999999%);
  z-index: -1;
  filter: blur(50px);
}
.hero a {
  font-weight: 500;
  color: var(--primary-color);
  transition: color .3s;
}
.hero a:hover,
.from .password a:hover{
  color:var(--dark-color);
  text-decoration: underline;
}
.main {
  flex:1 0 33.3333%;
}

.main .from {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.from p {
  position: relative;
}
.from input {
  font: inherit;
  font-size: 14px;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0 20px;
  line-height: 60px;
  border-radius: 10px;
}
.from input:not(.submit) {
  background-color:var(--light-bg-color);
}
.from .password i {
  position: absolute;
  top:calc(60px/2);
  right: 20px;
  margin-top: -8px;
  line-height: 1;
  color: var(--light-text-color);
  cursor:pointer;
}
.from .password a{
  font-size: 13px;
  color: var(--light-text-color);
  float: right;
  margin:5px 20px 0 0;
}

.from input.submit {
  font-weight: 700;
  color:var(--white-color);
  background-color:var(--primary-color);
  box-shadow: var(--primary-color) 0 20px 30px -10px;
  cursor: pointer;
  transition: box-shadow .3s;
}
.from input.submit:hover {
  box-shadow: var(--primary-color) 0 10px 30px -10px;
}
.separator {
  position: relative;
  margin: 50px 0 30px;
}
.separator::before {
  content: '';
  position: absolute;
  top:50%;
  width: 100%;
  height: 1px;
  background-color: var(--light-text-color);
  opacity: .3;
  z-index: 1;
}
.separator p {
  font-size: 14px;
  width: fit-content;
  padding: 0 10px;
  color: var(--light-text-color);
  margin: 0 auto;
  position: relative;
  z-index:1;
}
.options ul {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.options ul li a{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--white-color);
  box-shadow: var(--light-text-color) 0 10px 20px -10px;
  transition:  all .3s ease-out;
}
.options ul li a:hover {
  color: var(--white-color);
  box-shadow: none;
}
.options ul li:nth-child(1) a:hover {
  background-color: #5daf34;
}
.options ul li:nth-child(2) a:hover {
  background-color: #f56c6c;
}
.options ul li:nth-child(3) a:hover {
  background-color: #3a8ee6;
}
</style>
