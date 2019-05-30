<template>
  <nav class="main-nav flex gap-15">
    <g-link to="/docs">
      <span class="main-nav__label">Thèmes</span>
    </g-link>


    <g-link to="/docs/ressources">
      <span class="main-nav__label">Ressources</span>
    </g-link>

    <g-link to="/blog">
      <span class="main-nav__label">Blog</span>
    </g-link>
  </nav>
</template>


<style lang="scss">
@media screen and (max-width: 850px) {
 .main-nav {
    order: 10;
    min-width: 100%;
    a {
      padding-top: 5px;
      padding-bottom: 10px;
    }
  }
}
</style>
