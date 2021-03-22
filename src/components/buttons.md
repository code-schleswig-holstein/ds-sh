---
title: Buttons
tagline: Buttons
---
# Buttons

Mithilfe von Buttons werden verschiedene Handlungsmöglichkeiten des Nutzers dargestellt und klar hierarchisiert. Welche Zielseite durch sie aufgerufen oder welche Aktion ausgelöst wird, kommunizieren Buttons mit einem Label in Audi Type Screen Normal, mit einem Icon oder einer Kombination aus beidem. Buttons geben bei Klick bzw. Tap ein visuelles Feedback in Form eines Response-Effekts sofern die Buttons nicht deaktiviert sind.  
Die Buttons stehen in 2 Themes zur Verfügung.
## Themes
### Default Theme
::: demo [vanilla]
```html
<html>
<div id="vanilla-box">
<div class="Base-theme--light u-stack--2">
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button</button>
  <button class="Base-button" title="Das ist ein button" type="button" disabled>Disabled button</button>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button mit sehr viel Text, damit  dieser umbricht.</button>
</div>
</div>
</html>

```
:::
### Dark Theme
::: demo [vanilla]
```html
<html>
<div id="vanilla-box">
<div class="Base-theme--dark u-background--sh-blau u-stack--2">
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button</button>
  <button class="Base-button" title="Das ist ein button" type="button" disabled>Disabled button</button>
  <button class="Base-button" title="Das ist ein button" type="button">Das ist ein button mit sehr viel Text, damit  dieser umbricht.</button>
</div>
</div>
</html>

```
:::


Die Anwendung des Themes hängt von der Hintergrundfarbe des Layouts ab um ein besseren Farkontrast zu bieten.

