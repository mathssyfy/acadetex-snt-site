<template>
   <div class="post-meta">
      Posté le {{ post.date }}.
      <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} minutes de lecture.</strong>
      </template>
    </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>