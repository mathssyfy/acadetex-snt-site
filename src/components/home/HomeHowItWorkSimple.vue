<template>
  <Section class="works">
    <div class="grid-cols grid-cols--gap-large grid-cols--full-md">

      <Card title="Réseaux">
        <h4>Internet</h4>
        <p>Routage, TCP/IP, DNS, Peer-To-Peer</p>      
        <h4>Résaux sociaux</h4>
        <p>Identité numérique, Légalité</p>

        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>
<Card title="Création numérique"> 
        <h4>Web</h4>
        <p>HTML, CSS, HTTP, histoire du Web</p>      
        <h4>Photographie numérique</h4>
        <p>Traitement de l'image, EXIF, algorithmes</p>
        
        <template slot="outer">
          <Dots class="hide-for-small"/>
          <Dots class="dots--vertical show-for-small"/>
        </template>
      </Card>
      <Card title="Technologie" class="text-center flex-align-middle">

        <h4>Données</h4>
        <p>Bases de données, Cloud, Python</p>      
        <h4>Objets connectés</h4>
        <p>Informatique embarquée, IHM, Robots</p>
        <h4>Localisation</h4>
        <p>Localisation, cartographie, mobilité, GPS</p>
  
        
      </Card>

      

    </div>
  </Section>
</template>

<script>
import GraphQlLogo from '~/assets/images/graphql-logo.svg'
import VueLogo from '~/assets/images/vue-logo.svg'
import WebpackLogo from '~/assets/images/webpack-logo.svg'
import GridsomeLogo from '~/assets/images/gridsome-small-white.svg'
import Bullet from '~/assets/images/bullet.svg'
import Dots from '~/components/Dots.vue'

export default {
  components: {
    Bullet,
    VueLogo,
    GridsomeLogo,
    WebpackLogo,
    GraphQlLogo,
    Dots
  }
}
</script>

<style lang="scss">
.works {

  .bullet-list li {
    margin-bottom: .3rem;
  }

  .card__inner {
    padding: 30px 40px;
  }

  @media screen and (max-width: 850px) {
    .card {
      margin-bottom: 40px;
    }
  }


  &__tools {
    font-weight: 500;
    background-color: rgba(255,255,255,.9);
    border: 1px solid rgba(0,0,0,.1);
    max-width: 230px;
    border-radius: 4px;
    z-index: 9;
    margin: 0 auto!important;
    padding: 10px;

    li {
      margin-bottom: 0;
    }
  }

  &__logo {
    background-color: var(--primary-color);
    width: 100px;
    z-index: 1;
    position: relative;
    height: 100px;
    margin: 0 auto;
    margin-top: 18%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 100%;
    z-index: 0;
    margin-bottom: 1rem;
    animation: bounce 2s infinite;

    svg {
      width: 70px;
      height: 70px;
    }
  }

  &__pulse-bg {
    animation: pulse 2s infinite;
    border: 3px solid var(--primary-color);
    width: 100px;
    height: 100px;
    position: absolute;
    border-radius: 100%;
    opacity: .3;
    z-index: -1;

    + .works__pulse-bg {
      width: 95px;
      height: 95px;
      animation-delay: .3s;
    }
  }

  &__powered-by {
    opacity: .8;
    line-height: 1.3;
    padding-bottom: 1.2rem;
  }
}
</style>
