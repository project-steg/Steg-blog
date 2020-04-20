<template>
  <nuxt-link :to="'/articles/' + article.id" tag="div" class="article-contents">
    <img :src="article.image.url" alt="記事画像" />
    <div class="article-info">
      <div class="article-category">
        <p>{{article.category}}</p>
      </div>
      <div class="article-date">
        <p>{{article.createdAt | moment}}</p>
      </div>
    </div>
    <div class="article-contents-title">
      <p>{{article.title}}</p>
    </div>
  </nuxt-link>
</template>

<script>
import moment from "moment";
export default {
  props: ["article"],
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>

<style>
.article-contents {
  width: 300px;
  height: 230px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 50px;
  text-decoration: none;
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
  cursor: pointer;
  margin: 0 auto 50px;
  overflow: hidden;
}
.article-contents img {
  position: relative;
  width: 100%;
  height: 140px;
}
.article-contents-title {
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 1.4;
}
.article-contents-title p {
  text-decoration: none;
  color: #282828;
}
.article-info {
  display: flex;
  line-height: 1.4;
  justify-content: space-between;
  align-items: center;
}
.article-date {
  margin-right: 10px;
}
.article-date p {
  font-size: 0.6rem;
}
.article-category {
  display: inline-block;
  text-align: center;
  margin-left: 8px;
}

.article-category p {
  font-size: 0.8rem;
  color: #ffffff;
  background-color: #20d8ba;
  border-radius: 4px;
  padding: 0 10px;
}
</style>