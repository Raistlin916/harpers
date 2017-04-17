<template>
  <div class="header">
    <a href="#"><div class="header-logo"></div></a>
    <ul class="nav-list">
      <router-link to="home">
        <li class="nav-btn">
          Home
        </li>
      </router-link>
      <router-link to="about">
        <li class="nav-btn">
          About us
        </li>
      </router-link>
      <router-link to="work">
        <li class="nav-btn">
          Work for us
        </li>
      </router-link>
      <router-link to="contact">
        <li class="nav-btn">
          Contact us
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .header {
    position: absolute;
    height: 80px;
    line-height: 80px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    font-size: 0;
    background: #FFF;
    box-shadow: 0px 2px 2px 0px rgba(195,195,195,0.50);
    padding: 0 10px;
    min-width: 700px;
  }
  .header-logo {
    display: inline-block;
    width: 257px;
    height: 80px;
    background-image: url('//img.yzcdn.cn/public_files/2017/04/16/6a907ca5aa7ccfd13b0f63ad5a0ca01d.png');
    background-size: cover;
    background-position: 0 -17px;
    background-repeat: none;
    vertical-align: bottom;
    margin-right: 20px;
  }
  .nav-list {
    display: inline-block;
    color: #684029;
    vertical-align: bottom;
  }
  .nav-btn {
    font-size: 14px;
    margin: 0 15px;
    display: inline-block;
    cursor: pointer;
  }
  .nav-btn:hover, .router-link-active {
    color: #BB9772;
  }
</style>
