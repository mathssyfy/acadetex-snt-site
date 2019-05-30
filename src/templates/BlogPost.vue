<template>
  <Layout>
    <Section class="post" container="md" dots="true" >

      <div class="post-header container-md text-center mb-x2">
        <h1 v-html="$page.post.title"/>
        <PostMeta :post="$page.post"/>
      </div>

      <div class="post-content">

        <g-image v-if="$page.post.cover" quality="1" width="600" :src="$page.post.cover" />

        <p class="lead" v-html="$page.post.description"/>

        <div v-html="$page.post.content"/>

      </div>
    </Section>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date (format: "D. MMMM YYYY")
    timeToRead
    content
    cover
    author {
      id
      title
      path,
      avatar (width: 60)
    }
    description
  }
}
</page-query>

<script>
import PostMeta from '@/components/posts/PostMeta.vue'

export default {
  components: {
    PostMeta,
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.excerpt
        }
      ]
    }
  }
}
</script>