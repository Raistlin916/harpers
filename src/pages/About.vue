<template>
  <div class="about-page">
    <div class="app__content about-page__content">
      <div class="about-page-item">
        <div class="about-page-item__content">
          <h4>ABOUT US</h4>
          <p>Established in 2011 in China, Harper’s Consulting is a quite young but dynamic consulting firm. We offer advice and a pragmatic, realistic approach to addressing clients needs. With offices in Hongkong and Chinese Mainland,Harper’s Consulting works globally with talents and experts from all over the world. We are specialised in management consultancy, global investment, IT technology and financial services.</p>
        </div>
        <div class="about-page-item__side about-page-item__side1 pull-right">
        </div>
      </div>
      <div class="about-page-item">
        <div class="about-page-item__side about-page-item__side2">
        </div>
        <div class="about-page-item__content pull-right">
          <h4>WHAT WE DO?</h4>
          <p>
          We introduce people. <br>
          It sounds as simple as we make it look and with all of the experienced staff we have and our specialised knowledge and skill, it should be.
          However, making things look simple requires experience and excellence of execution. We have the best tools, the deepest information and the most efficient operating protocols.
          </p>
        </div>
      </div>

      <div class="about-page-item">
        <div class="about-page-item__content">
          <h4>HOW DO WE DO IT?</h4>
          <p>
          In order to secure the best consultations for our clients and to give our candidates the best options in the world, we have always been developing our own methodology. It combines doing the right things, in the right order and at the right time. It’s dynamic, efficient and above all, effective.
          And that’s how we get to keep the promises we make.
          </p>
        </div>
        <div class="about-page-item__side about-page-item__side3 pull-right">
        </div>
      </div>

    </div>
  </div>
</template>

<style>
  .app__img {
    height: 500px;
    background-position: center;
    background-size: cover;
  }
  .about-page__img {
    background-image: url('https://img.yzcdn.cn/public_files/2017/04/16/c352a5310809113ac06b42a2bb9613f6.png');
  }
  .app__content {
    margin: 60px auto 100px;
    width: 600px;
  }
  .app__content h3 {
    margin: 20px 0;
    font-size: 16px;
  }
  .app__content h4 {
    margin: 20px 0;
    font-size: 14px;
    font-weight: normal;
  }
  .app__content p {
    margin: 0;
    margin-bottom: 15px;
    font-size: 12px;
    line-height: 1.4;
  }

  .about-page__content {
    width: 900px;
    font-size: 0;
  }

  .about-page-item {
    margin: 80px 0;
  }

  .about-page-item__content {
    display: inline-block;
    width: 400px;
    height: 300px;
  }

  .about-page-item__content h4 {
    color: #47525d;
    font-size: 26px;
    font-family: "AtlasGrotesk","Open Sans",sans-serif;
  }

  .about-page-item__content p {
    font-size: 16px;
    color: #3d464d;
    font-family: "AtlasGrotesk","Open Sans",sans-serif;
  }

  .about-page-item__side {
    display: inline-block;
    width: 400px;
    height: 300px;
    background-size: cover;
    background-position: contain;
  }

  .about-page-item__side1 {
    background-image: url("https://img.yzcdn.cn/public_files/2017/04/17/2e659fbf3d4cb8ff3131169db3978d7d.png");
  }

  .about-page-item__side2 {
    background-image: url("https://img.yzcdn.cn/public_files/2017/04/17/0e4bc4367ac1cd9a0c2f26a70f5c57ba.png");
  }

  .about-page-item__side3 {
    background-image: url("https://img.yzcdn.cn/public_files/2017/04/17/7fb3d939fd428436821d2d3039201c6c.png");
  }

  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }
</style>
