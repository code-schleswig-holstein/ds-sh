<template>
  <main class="page-container">
    <slot name="top" />
    <Content class="theme-content u-stack--2"/>
    <PageEdit />
    <slot name="bottom" />
  </main>
</template>
<script>
import PageEdit from "@theme/components/PageEdit";
export default {
  components: {
    PageEdit
  },
  props: ['sidebarItems']
}
</script>
