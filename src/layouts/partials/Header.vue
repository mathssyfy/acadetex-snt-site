<template>
  <header>
    <div class="header-bar"></div>
    <div class="header-inner container flex gap-30">
      <LazyHydrate on-idle>
        <Logo/>
      </LazyHydrate>

      <LazyHydrate on-idle>
        <Nav class="flex-fit"/>
      </LazyHydrate>

      <LazyHydrate ssr-only>
        <nav class="header-actions flex">
          <ToggleTheme/>

        </nav>
      </LazyHydrate>
    </div>
  </header>
</template>


<script>
import Logo from "./Logo";
import Nav from "./Nav";
import SearchForm from "~/components/SearchForm.vue";
import GithubLogo from "@/assets/images/github-logo.svg";
import TwitterLogo from "@/assets/images/twitter-logo.svg";
import DiscordLogo from "@/assets/images/discord-logo.svg";
import LazyHydrate from "vue-lazy-hydration";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  components: {
    Logo,
    GithubLogo,
    TwitterLogo,
    DiscordLogo,
    SearchForm,
    Nav,
    LazyHydrate,
    ToggleTheme
  }
};
</script>

<style lang="scss">
header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--light-bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;

  .header-bar {
    background-color: var(--primary-color);
    padding: 2px;
    text-align: center;
    color: #fff;
    font-size: 1rem;

    a {
      color: currentColor;
    }
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}
</style>
