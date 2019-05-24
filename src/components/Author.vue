<template>
  <div class="author">
    <h1 v-if="showTitle" class="author__site-title">{{ $static.metaData.siteName }}</h1>
    <g-image alt="Author image" src="~/assets/images/html.jpg" width="300" height="180"/>

    <p class="author__intro">SNT: Sciences Numériques et Technologiques</p>

    <!-- <p class="author__links">
      <a href="//github.com/gridsome/gridsome-starter-blog">GitHub</a>
    </p> -->
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"]
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
    a {
      margin: 0 0.5em;
    }
  }
}
</style>