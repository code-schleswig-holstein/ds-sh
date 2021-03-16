---
title: Buttons
tagline: Buttons
---
# Buttons

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

::: demo [vanilla]
```html
<html>
<div id="vanilla-box"></div>
<div class="Base-theme--light u-marginBottom--1">
  <h5 class="Base-h5">Theme: Light</h5>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button</button>
  <button class="Base-button" title="Das ist ein button" type="button" disabled>Disabled button</button>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button mit sehr viel Text, damit  dieser umbricht.</button>
</div>
<div class="Base-theme--dark u-background--sh-blau">
  <h5 class="Base-h5">Theme: Dark</h5>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button</button>
  <button class="Base-button" title="Das ist ein button" type="button" disabled>Disabled button</button>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button mit sehr viel Text, damit  dieser umbricht.</button>

</div>
</html>
<style lang="scss">
  $fontColor: #ffffff;
  $activeColor: #D4004B;
  $bgColor: #E5EAEF;
  $bgColor--dark: #003064;
  
  .Base-button {
    font-family: serif;
    font-size: 18px;

    cursor: pointer;
    color: $fontColor;
    padding: 0.7em 1.25em 0.75em;
    align-self: baseline;
    display: inline-flex;
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
    border: none;
    line-height: 1.25;
    background-color: $bgColor;
    justify-content: center;

      &:focus,
      &:hover,
       .u-linkWrap:hover &,
      .u-linkWrap.is-active &,
      .u-linkWrap:active &,
      &.is-active,
      &:active {
         color: $fontColor;
         background-color: $activeColor;
       }

      &:disabled {
         cursor: default;
         opacity: 0.4;
         pointer-events: none;
       }

      .Base-theme--dark & {
        background-color: $bgColor--dark;
    
      &:focus,
      &:hover,
       .u-linkWrap:hover &,
      .u-linkWrap.is-active &,
      .u-linkWrap:active &,
      &.is-active,
      &:active {
         color: $fontColor;
         background-color: $activeColor;
       }
    }
  }
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
