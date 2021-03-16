---
title: Grid Elemente
tagline: Grid Elemente
---
# Verlinkungen

## Wann soll diese *Komponente* verwendet werden.

Lorem markdownum acernae: rorat et fessa spesque stivave sustinuere feres
convertit has Iovem corpora patulosque frons viribus, criminis. Tempore sit in
solito. Animum iras, intremuere ficto servat nec Pergama tot sit. Quoque maesta
in Triptolemo ut interea occupat caestibus *lacrimae semper*, habet. Atria quae
finitur rivo in verbisque lassa, et esse, igitur.

## Wann sollte diese Komponente nicht verwendet werden.

Lorem markdownum acernae: rorat et fessa spesque stivave sustinuere feres
convertit has Iovem corpora patulosque frons viribus, criminis. Tempore sit in
solito. Animum iras, intremuere ficto servat nec Pergama tot sit.

::: demo
```html
<template>
  <div class="box-vue">
    <button @click="plus">+</button>
    <button @click="minus">-</button>
    {{ number }}
  </div>
</template>
<script>
  export default {
    data: () => ({ number: 0 }),
    methods: {
      plus () { this.number++ },
      minus () { this.number-- }
    }
  }
</script>
<style>
  .box-vue { color: red; }
</style>
```
:::

### Funktionsweise 

Always place back links at the top of a page, before the `<main>` element. Placing them here means that the ‘Skip to main content’ link allows the user to skip all navigation links, including the back link.

Make sure the link takes users to the previous page they were on, in the state they last saw it. Where possible, ensure it works even when JavaScript is not available.

If this is not possible, you should hide the back link when JavaScript is not available.

<code-group>
<code-block title="HTML" active>
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="YARN">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>
