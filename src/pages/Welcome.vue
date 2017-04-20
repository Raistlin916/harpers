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
    <div class="welcome-partners-wrapper">
      <h4 class="welcome-partners-title">Partners:</h4>
      <ul class="welcome-partners">
        <li
          class="welcome-partners-item-wrapper"
          v-for="url in partners"
        >
          <div
            class="welcome-partners-item"
            :style="{ backgroundImage: `url(${url})` }"
          ></div>
        </li>
      </ul>
    </div>
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
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/aebaddb28aa6ef7f33fbdc2e2a648d46.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/c022431a9667fbf71b8613b1403c4702.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/f91b8b44123c792937f15530f759c595.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/3e655d1c58ad0922235756c58b35a25f.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/47d7a700414e778a05765e3d403d1d18.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/welcome/62af0d5c506ddc732d47eb43c1d7b721.jpg'
        ],
        partners: [
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/014850eeefdb02d2f72adf5dab127349.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/248a907642be89df543b41e5511e302f.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/6036410b4de2e2e61f8262fad93904b3.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/b1db4dad920cf768901f0bf02a48e356.jpg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/cbaed2a72a75bce2862d4e4080d80fba.jpeg',
          'http://gk-pages.oss-cn-shanghai.aliyuncs.com/harpers/partners/daecd6abf6bebfaf3d1851e0236a7d95.jpg'
        ]
      }
    }
  }
</script>

<style>
  .welcome-img-wapper {
    min-height: 500px;
    height: 600px;
    height: calc(100vh - 80px);
  }
  .welcome-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: top center;
  }

  .welcome-partners-wrapper {
    margin: 20px 100px;
  }

  .welcome-partners-title {
    color: #47525d;
    font-size: 26px;
    font-family: "AtlasGrotesk","Open Sans",sans-serif;
    margin: 15px 0;
  }

  .welcome-partners-item-wrapper {
    display: inline-block;
    width: 180px;
    height: 100px;
    margin: 10px;
    border: 1px solid #eee;
    padding: 10px;
  }

  .welcome-partners-item {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
