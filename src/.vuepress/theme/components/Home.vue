<template>
  <main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <header class="hero">
      <h1 v-if="data.heroText !== null" id="main-title" class="Base-h1">
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <p v-if="data.tagline !== null" class="Base-p description">
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p v-if="data.actionText && data.actionLink" class="Base-p action">
        <NavLink class="action-button Base-button" :item="actionLink"/>
      </p>
    </header>

    <div v-if="data.features && data.features.length" class="GridCol3Even-row u-row">
      <div v-for="(feature, index) in data.features" :key="index" class="GridCol3Even-col u-col">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Slot class="theme-content"/>

    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@parent-theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: {NavLink},

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
