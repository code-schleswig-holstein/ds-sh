<template>

  <section class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <div class="u-background--gradient-itvsh-10 u-paddingTop--r4 u-paddingBottom--r4">
      <div class="u-container">
        <section class="u-limitWidth-12 u-align-center">
          <div class="GridCol1Main-row u-row">
            <div class="GridCol1Main-col u-col u-stack--2">
              <lottie-animation class="u-align-center"  :path="$withBase('./img/doku.json')" :speed="0.8" :width="415"/>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="u-background--white u-paddingTop--r4 u-paddingBottom--r4">
      <div class="u-container">
        <section class="u-limitWidth-6 u-align-center">
          <div class="GridCol1Main-row u-row">
            <div class="GridCol1Main-col u-col u-stack--2">
              <h1 v-if="data.heroText !== null" id="main-title" class="Base-h1">
                {{ data.heroText || $title }}
              </h1>

              <p v-if="data.tagline !== null" class="Base-p description">
                {{ data.tagline || $description }}
              </p>

              <p v-if="data.actionText && data.actionLink" class="Base-p">
                <a :href="data.actionLink" class="Base-button Base-button--large"><span class="Base-button-icon"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 512 512" preserveAspectRatio="xMidYMin slice" class="u-scalingInlineSVG" style="padding-bottom: 100%;"><path d="M290.132 34l-34.06 34.06 163.722 163.72H0v48.175h419.794L256.072 443.677l34.06 34.06L512 255.868z"/></svg></span>{{data.actionText}}</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="u-background--gradient-itvsh-10 u-paddingTop--r2 u-paddingBottom--r2 u-marginBottom--r4">
      <div class="u-container">
        <section class="u-limitWidth-12 u-align-center">
          <div v-if="data.features && data.features.length" class="GridCol3Even-row u-row">
            <div v-for="(feature, index) in data.features" :key="index" class="GridCol3Even-col u-col">
              <h2 class="Base-h2 u-marginBottom--r1">{{ feature.title }}</h2>
              <p class="Base-p u-marginBottom--r1">{{ feature.details }}</p>
              <a class="Base-iconLink-page" :href="feature.link">{{feature.linkText}}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Slot class="theme-content"/>
  </section>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';

export default {
  name: 'Home',

  components: {NavLink, LottieAnimation},

  computed: {
    data() {
      return this.$page.frontmatter
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>
