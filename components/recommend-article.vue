<template>
  <div v-if="recommend.recommend" class="recommend container">
    <div class="recommend-box row">
      <div class="recommend-img col-md-6 col-xs-10">
        <nuxt-link :to="'/articles/' + recommend.id">
          <img :src="recommend.image.url" alt="記事画像" class="img-fluid" />
        </nuxt-link>
      </div>

      <div class="recommend-article col-md-6 col-xs-10">
        <div class="recommend-article-title">
          <nuxt-link :to="'/articles/' + recommend.id" tag="p">
            <p>{{recommend.title}}</p>
          </nuxt-link>
        </div>
        <div class="recommend-article-info">
          <div class="recommend-article-category">
            <p>{{recommend.category}}</p>
          </div>
          <div class="recommend-article-date">
            <p>{{recommend.createdAt | moment}}</p>
          </div>
        </div>
        <div class="recommend-article-text" v-html="$md.render(recommend.contents)">
          <p>{{recommend.contents}}</p>
        </div>
        <div class="recommend-article-end">
          <p>...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  props: ["recommend"],
  filters: {
    moment: function(date) {
      return moment(date).format("YYYY/MM/DD HH:mm");
    }
  }
};
</script>
<style>
.recommend {
  text-align: center;
  margin-bottom: 80px;
}
.recommend-box {
  display: flex;
  margin: 0 0 20px 0;
}
.recommend-article {
  text-align: left;
  line-height: 1.4;
}
.recommend-img img {
  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.3));
  border-radius: 8px;
}
@media screen and (max-width: 767px) {
  .recommend-img {
    margin-bottom: 18px;
  }
}

@media screen and (max-width: 991px) {
  .recommend-article {
    max-height: 130px;
  }
}
.recommend-article-title {
  margin-bottom: 8px;
}
.recommend-article-title p {
  font-size: 1.3rem;
  color: #282828;
  text-decoration: none;
  cursor: pointer;
}
.recommend-article-info {
  display: flex;
  width: 250px;
  align-items: center;
  margin-bottom: 8px;
}
.recommend-article-category {
  display: inline-block;
  text-align: center;
  line-height: 1.4;
}

.recommend-article-category p {
  font-size: 0.7rem;
  color: #ffffff;
  background-color: #20d8ba;
  border-radius: 4px;
  padding: 0 10px;
}
.recommend-article-date {
  margin-left: 10px;
}
.recommend-article-date p {
  font-size: 0.7rem;
  line-height: 1.3;
}
.recommend-article-text {
  font-size: 0.8rem;
  max-height: 140px;
  overflow: hidden;
}
/*----------1199px以下------------*/
@media screen and (max-width: 1199px) {
  .recommend-article-text {
    max-height: 140px;
  }
}
/*----------991px以下------------*/
@media screen and (max-width: 991px) {
  .recommend-article-text {
    max-height: 70px;
  }
}
/*----------767px以下------------*/
@media screen and (max-width: 767px) {
  .recommend-article-text {
    max-height: 70px;
  }
}
.recommend-article-text a {
  text-decoration: none;
  color: #707070;
}

.recommend-article-text h1 {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: #707070;
}
.recommend-article-text h2 {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: #707070;
}
.recommend-article-text h3 {
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
  color: #707070;
}
.recommend-article-text p {
  font-size: 0.8rem;
  color: #707070;
}
.recommend-article-text ol {
  margin-left: 1rem;
}
.recommend-article-text ul {
  margin-left: 1rem;
}
.recommend-article-text li {
  font-size: 0.8rem;
  color: #707070;
}
.recommend-article-end p {
  font-size: 0.8rem;
  color: #a0a0a0;
}
</style>