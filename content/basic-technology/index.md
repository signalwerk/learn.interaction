---
title: Technologische Grundlagen des Web – HTML, CSS & JavaScript
author: "Stefan Huber"
date: "2019-10-04"
draft: false
path: "/articles/basic-technology/"
category: "article"
tags:
  - "CSS"
  - "HTML"
  - "JavaScript"
description: "Die zugrunde liegenden Technologien des Webs sind seit mehreren Jahrzehnten gleich geblieben. Jedoch wurden weitere Technologien und Erneuerungen darauf aufgebaut und weiterentwickelt."
---


import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';



## Information und Gestaltung
Eine Website kann in zwei Bereiche unterteilt werden, die sowohl technisch, wie auch konzeptionell zu trennen sind:


<Grid background>
<Column start="1" end="7">

#### Struktur ·  Semantik
Autor erstellt Information


```md
Titel  
Der Text besteht aus Inhalt.
```

</Column>
<Column start="7" end="13">

#### Aussehen · Repräsentation
Gestalter·in definiert Formatierung

```md
Titel = Blau
Text = Bold
```

</Column>
</Grid>


In der technischen Realisation für Webseiten wird dies in HTML und CSS umgesetzt:



<Grid background>
<Column start="1" end="7">

#### HTML · Semantik

```html
<h1>
  Titel
</h1>
<p>
  Der Text besteht aus Inhalt.
</p>
```

</Column>
<Column start="7" end="13">

#### CSS · Repräsentation

```css
h1 {
  color: #24588d;
}
p {
  font-weight: bold;
}
```

</Column>
</Grid>


Die fertige Website wird dann aufgrund der beiden Komponenten visuell aufbereitet (Rendering):



### Browser
![Rendering](./img/rendering.svg)



## Grundtechnologie – HTML, CSS und JavaScript

### HTML
HTML steht als Abkürzung für «Hypertext Markup Language» (DE: Hypertext-Auszeichnungssprache). Es handelt sich hierbei um eine Auszeichnungssprache, die in Form von Text die Strukturierung von digitalen Inhalten übernimmt. HTML-Dokumente gelten als Grundlage zum darstellen und beschreiben von modernen Webseiten in einem Browser. In einer HTML-Datei können Inhalte eingeschlossen werden (Text, Links, ...) oder aber logisch mit dem Dokument verknüpft werden (Bilder, CSS, Ton, Video, ...). HTML wurde ursprünglich von Tim Berners-Lee am Cern 1990 erfunden und wird stetig weiter entwickelt. SGML (Standard Generalized Markup Language) gilt als Vorbild und Ursprung für HTML, welches jedoch später stark von dessen Ursprung entfernt wurde. HTML wird heute vom World Wide Web Consortium (W3C) und der Web Hypertext Application Technology Working Group (WHATWG) entwickelt. Die Version 5 des HTML-Standards (HTML5) ist seit 2014 verabschiedet, jedoch werden über weitere in HTML verwendete Standards (z.B. JavaScript) die Möglichkeiten von Websiten stetig erweitert.


### HTML-Dokument
Ein HTML-Dokument besteht aus verschiedenen Tags und aus verschiedenen Teilen. Beispielhaft eine minimale HTML-Datei.




```html
<!DOCTYPE html>
<html>
<head>
  <title>Testseite</title>
  <link href="styles.css"
        rel="stylesheet">
</head>
<body>
  <h1>Titel</h1>
  <p>Der Text.</p>
</body>
</html>
```



|Tag|Beschreibung                 |
|---|-----------------------------|
|`<DOCTYPE ...>`|Gibt an, dass es sich um ein HTML 5 Dokument handelt.|
|`<html>`|Start-Tag der anzeigt, dass hier das Dokument beginnt.|
|`<head>`|Start-Tag für nicht sichtbare Informationen zur Website.|
|`<title>`|Start- und End-Tag umschliesst den Titel der Seite|
|`<link>`|Externe Dateien werden verknüpft. Hier eine CSS-Datei.|
|`</head>`|End-Tag gibt an, dass der nicht sichtbare Kopf-Teil nun endet.|
|`<body>`|Start-Tag in dem der sichtbare Inhalt eingebunden ist.|
|`<h1></h1>`|Start- und End-Tag umschliesst den Titel 1. Hierarchie|
|`<p></p>`|Start- und End-Tag umschliesst den Inhalt eines Paragrafen|
|`</body>`|End-Tag der sichtabaren Inhalte|
|`</html>`|End-Tag des Dokuments        |



### Tag-Aufbau
Ein Tag wird in HTML wie folgt gebildet:

```html
<NameVonTag>Inhalt von Tag.</NameVonTag>
```

Beispiel:

```html
<p>Der Text besteht aus Inhalt.</p>
```

Zusätzlich können Attribute in einem Tag gesetzt werden:

```html
<p class="special">Der Text besteht aus Inhalt.</p>
```



### Absatz · P-Tag

```html
<p>Der Text ist hier.</p>
<p>Der Folgetext ebenso.</p>
```

Jeder Paragraf eines Textes wird üblicherweise mit einem P-Tag umschlossen.


### Titel · H-Tag (H1, H2, H3 ...)

```html
<h1>Haupttitel</h1>
<h2>Untertitel</h2>
```
Jede Überschrift wird mit einem H-Tag markiert. Die hierarchische Ordnung wird über Zahlen gesteuert. H1 hat die höchte Priorität. H2 ist H1 untergeordnet. Einen H-Tag ohne Zahl gibt es nich.


### Links · A-Tag

```html
<p>
  Der Text mit
  <a
    href="http://google.com"
    title="Beispiellink"
  >
    Link
  </a>
</p>
```


Wird in einem Text ein Link erzeugt, so geschieht dies über einen A-Tag mit dem Attribut «href» (wohin gelinkt wird) und dem Attribut «title» (Information über den Link).




### Bilder · IMG-Tag

```html
<img src=" http://test/t.jpg" alt="Testbild">
```

Bilder werden mit einem IMG-Tag erzeugt. Es muss ein «src»-Attribut (Pfad zu Bild) und ein «alt»-Attribut (Beschreibung des Bildes) angegeben werden.






## Struktur einfügen

Es gibt nebst den semantischen Tags auch Tags, die der Darstellung oder der Auswahl von Text-Teilen dienen.

### Kontainer · DIV-Tag

```html
<div class="box">
  <p>Der Text.</p>
</div>
```
Möchte man ein Element mit einem zusätzlichen Tag umschliessen, der danach eine Box erzeugt (für Hintergrund oder ähnliches), kann ein DIV-Tag gewählt werden. Häufig wird dazu eine Klasse oder ein ID als Attribut mit angegeben.



### Auszeichnung · SPAN-Tag
```html
<p>Der
  <span class="blau">Text</span>
  besteht aus Inhalt.
</p>
```

Innerhalb von Text kann mittels SPAN-Text eine Formatierung gesteuert werden, die dann jedoch keine Box erzeugt. Häufig wird dazu eine Klasse oder ein ID als Attribut mit angegeben.








### CSS


<Margin background>

CSS hat sich über die Jahre immer weiter entwickelt. Heute gibt es für einige Dinge mehrere Möglichkeiten einen ähnlichen Effekt zu erzielen (Beispiel: [Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) vs. [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)). Leute wie [Stephanie Eckles](https://moderncss.dev/) oder [Lea Verou](https://lea.verou.me/) betreiben spannende Blogs und zeigen neue Technologien zu CSS.


</Margin>


Cascading Style Sheets (DE: verschachtelte Gestaltungsvorlagen) ist eine Definition (deklarative Sprache), die das bestimmen von Stilvorlagen für HTML-Dateien ermöglicht. Der Namen bezieht sich auf die Eigenschaft, dass sich verschiedene Definitionen gegenseitig überschreiben oder ergänzen können. So können komplexe Formatierungen relativ einfach und für Menschen lesbar geschrieben werden. Der Browser führt dann den Inhalt der HTML-Datei mit der Formatierung aus dem CSS zusammen und sorgt so für die korrekte Darstellung.


#### CSS-Datei

```css
h1 {
  color: #24588d;
}
p {
  font-weight: bold;
}
```


#### Beschreibung



| Definition | Beschreibung                                |
|------------|---------------------------------------------|
| `h1 {`       |  Startet die Definition für den h1-Tag      |
| `color`      |  Definiert die Farbe als hexadezimalen Wert |
| `}`       |  Endet die Definition für den h1-Tag        |
| `p {`         |  Startet die definition für den p-Tag       |
| `font-weight`       |  Definiert den Schriftschnitt               |
| `}`        |  Endet die Definition für den p-Tag         |



### Allgemein
Alle Formatierungen, die auf das Dokument Einfluss nehmen, beschränken ihren Wirkungskreis über so genannte Selektoren. Es gibt grundsätzlich drei Selektoren, die zusammen kombiniert werden können:

* Tag-Selektor
* Class-Selektor
* ID-Selektor

Daneben gibt es noch Selektor-Regeln und Pseudo-Selektoren, die hier jedoch nicht behandelt werden. Die Attribute, die über Selektoren vergeben werden können sind unter folgendem Link gut verständlich erklärt: [CSS Reference](http://www.w3schools.com/cssref)

### Definition
Eine einzelne Definition in CSS wird über einen Selektor gefolgt von einem Paar aus geschweiften Klammern {} definiert. Mehrere Selektoren können mit einem Koma abgetrennt werden.
Innerhalb der Klammern folgt dann die eigentliche Definition. Auf jeder Zeile wird zuerst ein Attribut angegeben und nach einem Doppelpunkt der Wert, der diesem Attribut zugewiesen werden soll.



#### Aufbau


```css
selektor {
  attribut: wert;
}
```

Aufbau einer CSS-Definition mit mehreren Selektoren und mehreren Werten:

```css
selektor1, selektor2 {
  attribut1: wert;
  attribut2: wert;
}
/* nächste Definition wie oben */
```



### Tag-Selektor
Da verschiedenen semantische Teile einer HTML-Datei verschieden Tag-Namen haben, kann eine CSS-Definition auf einen Tag angewendet werden und somit nur einen Teil der HTML-Datei beeinflussen.
Ein Selektor für einen Tag gibt lediglich den Namen des Tags an. Es werden keine weiteren Hilfszeichen benötigt. Der Selektor entspricht dem Tag-Name.

#### Aufbau

```css
tag-name { ... }
```

H1- uns P-Tags in der HTML-Datei:

```html
<h1>Titel</h1>
<p>Der Text.</p>
```

Selektoren entsprechen dem Tag-Name:

```css
h1 {
  color: #24588d;
}
p {
  font-weight: bold;
}
```




### Class-Selektor
Einem HTML-Tag kann immer auch eine Klasse zugewiesen werden. Die Klasse wird in der HTML-Datei im Tag über ein das Attribut «class» definiert.
Im CSS-Selektor wird die Klasse über einen Punkt, gefolgt vom Klassenname, ausgewählt.

#### Aufbau
```css
.klassen-name { ... }
```

H1-Tag und H1-Tag mit einer Klasse:

```html
<h1>Titel</h1>
<h1 class="big">Titel gross</h1>
```

Klassen werden über einen Punkt angezeigt:

```css
h1 {
  color: #24588d;
}
.big {
  font-size: 60px;
}
```



### ID-Selektor
Einem HTML-Tag kann immer auch eine ID zugewiesen werden. Die ID wird in der HTML-Datei im Tag über ein das Attribut «id» definiert.
Im CSS-Selektor wird die ID über eine Raute (#), gefolgt vom ID-Name, ausgewählt.

#### Aufbau
```css
#id-name { ... }
```


H1-Tag und H1-Tag mit einer ID:
```html
<h1>Titel</h1>
<h1 id="spezial">Titel 2</h1>
```





Das Attribut in der ID-Selektion überschreibt das Attribut in der Tag-Selektion.:

```css
h1 {
  color: red;
}
#spezial {
  color: blue;
}
```





### Überschreiben und ergänzen von Regeln
Mehrere Definitionen innerhalb einer CSS-Datei, die auf den selben Tag sich auswirken können sich überschreiben und ergänzen. Dabei gelten (sehr grob gesprochen) folgende Regeln:

* Die letzt genannten Attribute einer Regel überschreiben die vorangehenden Attribute in anderen Regeln
* Eine spezifischere CSS-Regel überschreibt eine generellere Regel


#### Beispiel

```html
<h1>Titel</h1>
<h1 class="spezial">Titel spezial</h1>
```


```css
h1 {
  color: red;
}
.spezial {
  color: blue;
}
```


#### Resultat
Titel = rot, Titel spezial = blau




### Veschiedene Arten von CSS-Einheiten
CSS werte können verschiedene Einheiten annehmen. Einige Grössen-/Längeneinheiten können wie folgt kategorisiert werden:

* fixe Einheiten (immer gleich)
* flexieble Einheiten (abhängig von Kontext)
* ohne Einheiten
* Mischung von Einheiten

Nachfolgend die gebräuchlichsten fixen Einheiten.

#### Fixe Einheiten
* `px` – Pixel (1 px = 1 Inch ÷ 96)

#### Fixe Einheiten (nur für Druck!)
* `pt` – Punkt (1 pt = 1 Inch ÷ 72)
* `mm` – Millimeter (25.4 mm = 1 Inch)


#### Beispiel
```css
html {
  font-size: 16px;
  line-height: 24px;
}
h1 {
  font-size: 32px;
  line-height: 48px;
}
```
Nachteile:
* Verhältnis von Schriftgrösse und Zeilenabstand nicht intuitiv (muss errechnet werden)
* Verhältnis von H1 zur normalen Schriftgrösse schwer ersichtlich



### Flexieble Einheiten
Flexieble Einheiten haben den Vorteil, dass sie sich auf verschiedene Gegenbheiten anpassen können.

Folgende Kategorieren können gebildet werden:

* Dokumenteabhängige CSS-Einheiten
* Viewportabhängige CSS-Einheiten

#### Dokumenteabhängige CSS-Einheiten
* `%` – Relativ zum Parent-Element
* `rem` – Entspricht der Schriftgrösse des Root-Elements (`HTML`)
* `em` – Entspricht der aktuellen Schriftgrösse des Elements

#### Viewportabhängige CSS-Einheiten
* `vh` – 1% der Fensterhöhe (Viewport)
* `vw` – 1% der Fensterbreite (Viewport)
* `vmin` – 1% der schmaleren Fensterdimension (Viewport)
* `vmax` – 1% der grösseren Fensterdimension (Viewport)



#### Beispiel
```css
html {
  font-size: 16px;
  line-height: 1.5;
}
p {
  font-size: 1rem;
}
h1 {
  font-size: 2rem;
}
```

* `line-height` wird im verhältnis zur Schriftgrösse angegeben
* `font-size` wird im Verhältnis zum Root-Element (HTML-Tag) angegeben.


### Mischung von Einheiten
Die Funktion `calc()` ermöglicht es verschiedene Einheiten im CSS zu mischen. Diese Funktion sollte nur genutzt werden, wenn flexieble und variable Einheiten gemischt werden müssen

#### Beispiel

```css
html {
  font-size: 16px;
  line-height: 1.5;
}
.fullsreen {
  width: calc(100vw - 2rem);
  height: calc(100vh - 2rem);
}
```

## CSS Mediaquery

Je nach Eigenschaft des Ausgabemediums werden mit Mediaqueryies andere CSS-Definition aktiviert.
Siehe auch [→ MDN Media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).


### Grössenabhängige Abweichung

Beim Aufbau von CSS-Formatierungen empfiehlt es sich vom kleinsten Screen aus zu gehen und die grösseren Screens als «Ausnahmen» zu sehen (mobile first).

```css
html {
  font-size: 14px;
}
@media screen and (min-width: 600px) {
  html {
    font-size: 16px;
  }
}
```
Die Schriftgrösse wird auf `14px` gestellt und die Mediaquery wird aktiv, wenn das Ausgabemedium ein Bildschirm ist und die Breite mehr als `600px` überschreitet. Dann wird die Schrftgrösse `16px`

#### Medien Abweichung

```css
h1 {
  color: red;
}

@media print {
  h1 {
    color: black;
  }
}
```
Mediaquery wird aktiv, wenn das Dokument gedruckt wird.








### JavaScript
Die Skriptsprache JavaScript wurde für dynamische Websiten in Browsern entwickelt und ermöglicht erweiterte Benutzerinteraktionen, Inhalte zu modifizieren, erzeugen oder gar nachzuladen. Die Möglichkeiten einer klassischen und meist sehr statischen HTML-Seite mit JavaScript zu erweitern sind vielfältig. Im Gegensatz zu HTML und CSS handelt es nicht um Auszeichnungssprachen oder Stilvorlagen, sondern um eine Programmiersprache, die in Vielfallt und Funktion die beiden vorgenannten übersteigt. Die Anwendung von JavaScript ist in den letzten Jahren stark gestiegen und viele Webseiten sind heute ohne JavaScript nicht mehr lauffähig. Die Ausführung dieser Programme geschieht im Browser und wurde dafür als ECMAScript (offizieller Name von JavaScript) standardisiert und nach der Erfindung durch Brendan Eich im Jahre 1995 an die «Ecma International» übergeben.


```js
alert("Hello World!");
```

Im oben aufgeführten Skript wird eine Nachricht mit dem Inhalt «Hello World!» angezeigt. Alert bezeichnet eine Funktion, die der Browser kennt und somit weiss, was er mit dem Text machen muss.

```html
<!DOCTYPE html>
<html>
<head>
  <script type="text/javascript" src="test.js"></script>
</head>
<body>
  <p>JavaScript-Test</p>
</body>
</html>
```

In der HTML-Datei wird die Datei mit einem Script-Tag eingebunden.











## Weiterführende Informationen


### CSS & HTML Grundkurse
* [HTML & CSS – Codecademy](https://www.codecademy.com/learn/learn-html)
* [W3Schools – Web Tutorials](http://www.w3schools.com/)

### CSS-Referenz
* [CSS Reference](http://www.w3schools.com/cssref)

### Platzhalter-Bilder
* [lorempixel.com](http://lorempixel.com/)
* [Placehold.it](http://placehold.it/)

### Ein Inhalt viele Designs
* [CSS Zen Garden](http://www.csszengarden.com/)

### Code und dessen Bedeutung
* [Paul Ford: What Is Code? · Bloomberg](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)

### JavaScript
* [1loc – eine Zeile JS](https://1loc.dev/)
* [DOM mit JavaScript manipulieren](https://htmldom.dev/)

<br />
<br />
<br />
<hr />



#### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

#### Dokumentgeschichte
Mai 2014: Erstellung  
August 2015: Erweiterung  
März 2017: Erweiterung  
Oktober 2019: Überarbeitung  


<br />
<br />
