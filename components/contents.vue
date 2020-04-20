<template>
  <div class="contents-wrapper">
    <div class="contents-title">
      <p>{{contents.title}}</p>
    </div>
    <div class="contents-info">
      <div class="contents-category">
        <p>{{contents.category}}</p>
      </div>
      <div class="contents-date">
        <p>{{contents.createdAt | moment}}</p>
      </div>
    </div>
    <div class="contents-img">
      <img :src="contents.image.url" alt="記事画像" />
    </div>
    <div class="contents-text" v-html="$md.render(contents.contents)" target="_blank"></div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["contents"],
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap");
.contents-wrapper {
  width: 75%;
  margin: 50px auto 80px;
}
.contents-title {
  line-height: 1.6;
}
.contents-title p {
  font-size: 2rem;
  color: #282828;
  font-family: "M PLUS Rounded 1c", sans-serif;
  border-bottom: solid 2px #e0e0e0;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.contents-info {
  display: flex;
  width: 250px;
  align-items: center;
  margin: 20px 0 20px 0;
}
.contents-category {
  display: inline-block;
  text-align: center;
  line-height: 1.4;
}

.contents-category p {
  font-size: 0.8rem;
  color: #ffffff;
  background-color: #20d8ba;
  border-radius: 4px;
  padding: 0 10px;
}
.contents-date {
  margin-left: 20px;
}
.contents-date p {
  font-size: 0.7rem;
  line-height: 1.3;
}
.contents-img img {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 8px;
}
.contents-text p {
  padding-bottom: 10px;
}
.contents-text img {
  width: 100%;
  height: auto;
}
.contents-text h1 {
  font-size: 1.8rem;
  border-bottom: solid 2px #e0e0e0;
  margin: 10px 0 1.5rem 0;
  padding: 0 0 8px 13px;
  border-left: solid 5px #20d8ba;
}
.contents-text h2 {
  font-size: 1.5rem;
  border-bottom: solid 2px #e0e0e0;
  margin: 1.5rem 0 1.5rem 0;
  padding: 0 0 8px 13px;
  border-left: solid 5px #20d8ba;
}
.contents-text h3 {
  font-size: 1.3rem;
}
.contents-text ol {
  margin-left: 1rem;
}
/*----------493px以下のフォントサイズ調整------------*/
@media screen and (max-width: 493px) {
  .contents-title {
    line-height: 1.4;
    font-size: 1.4rem;
  }
  .contents-title p {
    font-size: 1.6rem;
  }
  .contents-text h1 {
    font-size: 1.4rem;
    border-bottom: solid 2px #e0e0e0;
    margin: 10px 0 1.5rem 0;
    padding: 0 0 8px 13px;
    border-left: solid 5px #20d8ba;
  }
  .contents-text h2 {
    font-size: 1.25rem;
    border-bottom: solid 2px #e0e0e0;
    margin: 1.5rem 0 1.5rem 0;
    padding: 0 0 8px 13px;
    border-left: solid 5px #20d8ba;
  }
  .contents-text h3 {
    font-size: 1.2rem;
  }
}
</style>
