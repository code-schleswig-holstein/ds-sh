<template>
  <aside class="sidebar">
    <slot name="top"/>
    <SidebarLinks :depth="0" :items="items"/>
    <slot name="bottom"/>
  </aside>
</template>

<script>
import SidebarLinks from '@parent-theme/components/SidebarLinks.vue'

export default {
  name: 'Sidebar',

  components: {SidebarLinks},

  props: ['items']
}
</script>
<style lang="stylus">
</style>
