<template>
  <Section dots="true" primary="true">
    <div class="container text-center container-sm mb">
      <h2>Derniers articles</h2>
    </div>
    <div class="blog-posts container container-md">
      <PostCard v-for="edge in $static.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    

    <div class="container text-center">
      <g-image width="400" alt="Performance Matters" style="width: 200px; margin:0" src="~/assets/images/perfmatters.svg" />
    </div>

  </Section>
</template>

<script>
import PostCard from '@/components/posts/PostCard.vue'


export default {
  components: {
    PostCard
  }
}
</script>

<static-query>
query BlogPosts {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover (width: 770, height: 380, blur: 10)
        content
        author {
          id
          title
          path
          avatar (width: 60)
        }
        excerpt
      }
    }
  }
}
</static-query>
