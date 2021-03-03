<template>
  <main class="page-container">
    <slot name="top" />
    <Content class="theme-content"/>
    <slot name="bottom" />
  </main>
</template>
<script>

export default {
  props: ['sidebarItems']
}
</script>
