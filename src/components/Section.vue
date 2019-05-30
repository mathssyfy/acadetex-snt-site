<template>
  <section class="section" :class="sectionClass">
    <div class="section--inner container" :class="sectionClassInner">
      <slot/>
    </div>
    <!-- <div v-if="dots" class="section__dots-bg dots-bg" /> -->
    <slot name="outer" />
  </section>
</template>

<script>
export default {
  props: ['dark', 'dots', 'container', 'framed', 'primary', 'sway' ],
  computed: {
    sectionClass() {
      let classes = []
      // if(this.primary) classes.push('section--primary')
      // if(this.dark) classes.push('section--dark')
      return classes
    },
    sectionClassInner() {
      let classes = []
      if(this.framed) {
        classes.push('container--framed')
      }
      if(this.container) {
        classes.push('container-' + this.container)
      }
      return classes
    }
  }
}
</script>

<style lang="scss">
.section {
  padding: calc(2% + var(--space)) 0;
  position: relative;
  width: 100%;
  flex: 1;
  background-color: var(--primary-bg);

  &--primary {
    background-color: var(--primary-bg);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);

    + .section--primary {
      border-top-color: transparent;
      margin-top: -1px;
    }
  }


  

  &--inner {
    position: relative;
    z-index: 2;
  }

  
}
</style>
