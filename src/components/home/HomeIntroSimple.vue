<template>
  <Section class="intro" dots="true" dark="true">
    <div class="container text-center ">

        <div class="intro__message mb" hidden></div>

        <h1 class="intro__title post"> 
          <span>Sciences Numériques et Technologiques</span>
          <transition name="rotate">
            <div v-if="currentText == 0" key="0">
              Internet
            </div>
            <div v-else-if="currentText == 1" key="1">
              Le Web
            </div>
            <div v-else-if="currentText == 2" key="2">
              Données structurées
            </div>
            <div v-else-if="currentText == 3" key="3">
              Localisation
            </div>
            <div v-else-if="currentText == 4" key="4">
              Photographie
            </div>
            <div v-else-if="currentText == 5" key="5">
              Objets connectés
            </div>
          </transition>
        </h1>
        
        <!-- <p class="intro__lead lead post mb">
          L'enseignement des sciences numériques et techologie en classe de seconde a pour objet
          de permettre d'appréhender les principaux concepts des sciences numériques, mais aussi
          de permettre de comprendre le poids croissan du numérique et les enjeux qui en découlent.
        </p> -->
        <p class="intro__lead lead post mb">
          Conforme au programme officiel de SNT 2019.
        </p>

        <p class="intro__links">
          <g-link  to="/docs" class="button primary button--large">
            <span>Démarrer</span>
          </g-link>
        </p>

        
    </div>
  </Section>
</template>

<static-query>
query HomeIntro {
  metaData {
    gridsomeVersion
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      currentText: 0
    }
  },
  mounted () {
    this._counter = setInterval(() => {
      this.currentText = (this.currentText + 1) % 6
    }, 1500)
  },
  destroyed () {
    clearTimeout(this._counter)
  },
}
</script>

<style lang="scss">

@keyframes Type {
  from  {
    opacity: .6;
  }
}

.intro {
  padding: calc(2.5% + var(--space)) 0;
  color:var(--body-color);
  background-color: var(--light-bg);

  &__title {
    font-size: 3.5rem;
    color: var(--primary-color-dark);
    letter-spacing: -1px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;

    div {
      color: var(--primary-color);
    }

    @media screen and (max-width: 850px) {
      & {
        font-size: 2rem;
      }
    }
  }

  &__lead {
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.4rem;
    @media screen and (max-width: 850px) {
      & {
        font-size: 1.2rem;
      }
    }
  }

  &__info {
    font-size: .9rem;
    color: rgba(0,0,0,.7);
  }

  &__message {
    margin-bottom: 1.5rem;
    a {
      display: inline-block;
      background-color: var(--primary-color-dark);
      text-decoration: none;
      padding: 4px 15px;
      border-radius: 99px;
      &:hover {
        background-color: rgba(0,0,0,.3);
      }
    }
  }
}
</style>
