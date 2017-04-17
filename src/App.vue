<template>
  <div class="app-container">
    <AppHeader></AppHeader>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="footer-copyright">
      Copyright(C)2009-2020 Harper’s Consulting
    </div>
  </div>
</template>

<script>
  import './index.scss'
  import AppHeader from './AppHeader'

  export default {
    components: {
      AppHeader
    }
  }
</script>

<style>
  .app-container {
    padding-top: 80px;
  }
  .app-content {
    min-height: calc(100vh - 80px);
  }
  .footer-copyright {
    font-size: 12px;
    text-align: center;
    padding: 20px;
    color: #ccc;
  }
</style>
