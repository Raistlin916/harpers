<template>
  <div>
    <Swp
      class="welcome-img-wapper"
      autoPlay
    >
      <SwpPage
        v-for="img in imgs"
        key="img"
      >
        <div
          class="welcome-img"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </SwpPage>
    </Swp>
    <div class="welcome">Welcome to Harper’s Consulting !</div>
  </div>
</template>

<script>
  import { Swp, SwpPage } from '../Swp'
  export default {
    components: {
      Swp, SwpPage
    },
    data: () => {
      return {
        imgs: [
          'https://img.yzcdn.cn/public_files/2017/04/16/6f98165a043f7dbe3b823de8c5a4da13.jpg',
          'https://img.yzcdn.cn/public_files/2017/04/16/34ccf1a67ccf4465c19a64cf52f3fd26.png',
          'https://img.yzcdn.cn/public_files/2017/04/16/c3910f20cdb84b4e35a5852059831740.png',
          'https://img.yzcdn.cn/public_files/2017/04/16/7a0f9183165cfc5514eb35b55f579468.png'
        ]
      }
    }
  }
</script>

<style>
  .welcome {
    font-size: 30px;
    line-height: 1.4;
    margin-top: 30px;
    text-indent: 1em;
  }
  .welcome-img-wapper {
    height: 500px;
  }
  .welcome-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
</style>
