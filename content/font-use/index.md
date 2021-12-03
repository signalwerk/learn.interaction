---
title: Fonts · Verwendung
author: "Stefan Huber"
date: "2021-09-16"
draft: false
path: "/articles/font-use/"
category: "article"
tags:
  - "fonts"
  - "css"
  - "html"
  - "Typografie"
description: "Heute können im Web beliebige Fonts geladen werden und somit die Gestaltung und Lesbarkeit bestmöglich unterstützen. "
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';




## Fonts auf Websites
### Geschichte



<Margin>

#### Browser mit Webfont-Unterstüzung
* Chrome 4+
* Internet Explorer 4+
* Microsoft Edge 1+
* Firefox 3.5+
* Safari 3.1+


Quelle: [Web typography - Wikipedia](https://en.wikipedia.org/wiki/Web_typography)


#### Browser mit WOFF-Unterstüzung
* Chrome 6+
* Internet Explorer 9+
* Microsoft Edge 1+
* Firefox 3.6+
* Safari 5.1+

#### Browser mit WOFF2-Unterstüzung
* Chrome 36+
* Microsoft Edge 14+
* Firefox 35+
* Safari 10+


Quelle: [Web Open Font Format - Wikipedia](https://en.wikipedia.org/wiki/Web_Open_Font_Format)


</Margin>


Seit Computer eine Darstellung an einem Bildschirm aufweisen, wurde immer wieder nach technischen und gestalterischen Möglichkeiten gesucht, Schriften möglichst den Wünschen des Gestalters entsprechend dar zu stellen. Als das World Wide Web 1993 durch das CERN frei gegeben wird, war die Formatierung noch nicht durch einen Gestalter zu beeinflussen. Lediglich der Browser bestimmte das aussehen. Mit der Einführung von CSS im Jahre 1996 wurde dann die Möglichkeit geschaffen, Schriften einem Inhalt zu zuweisen. Allerdings musste der entsprechende Font bereits auf dem Zielgerät installiert sein. Bereits 1997 ermöglichte Microsoft mit damaliger Technologie in Ihrem Browser das Laden von Fonts über das Internet. Somit wurde es möglich, eigene Schriften einzusetzen. Doch diese Technologie war nur auf Internet Explorer (Windows) verfügbar und auch von den Font-Anbietern sehr schlecht akzeptiert. Erst im Jahre 2009 wurde auf Grundlage von OpenType ein neues Format namens «WOFF» (Web Open Font Format) entwickelt. Dieses Format wurde sehr schnell von Browser-Herstellern und von Font-Anbietern akzeptiert, so dass heute Problemlos auf allen wichtigen Browsern der vom Gestalter gewünschte Font dynamisch in die Seite geladen werden kann. Das Format [«WOFF2»](https://www.w3.org/TR/WOFF2/) wurde im Jahre 2018 von google an das [W3C-Konsortium](https://www.w3.org/) übergeben und verbessert mit einem neuartigen Komprimierungs-Algorithmus (Brotli) die Ladezeit von Fonts.


### Web Safe Fonts (Systemfonts)
Unter Systemfonts wird häufig eine Auswahl an Schriften verstanden, die zu einer sehr hohen Wahrscheinlichkeit auf dem Betriebssystem installiert sind, auf dem ein Browser eine Website darstellt. Somit ist der Browser in der Lage diesen Font zu verwenden und es muss kein zusätzlicher Font übertragen werden. Die Auswahl dieser Fonts ist sehr beschränkt und variiert stark von Betriebssystem zu Betriebssystem. Um dennoch die Gestaltung mehr oder weniger unter Kontrolle zu behalten, werden in einem CSS sogenannte Fallbacks angegeben. Das heisst, wenn eine Schrift nicht vorhanden ist, so kommt eine andere zum Einsatz.


#### Beispiel
CSS-Definition mit Font-Fallbacks:

```css
p {
  font-family: Arial, Helvetica, sans-serif;
}
```

Es wird versucht zuerst Arial einzusetzen. Wenn keine Arial vorhanden ist, soll Helvetica zum Einsatz kommen und sonst eine beliebige Serifenlose.



### Verbreitung und Vorteile von Webfonts



Meist kommt bei Webfonts das WOFF (Web Open Font Format) zum Einsatz. Seit [2014](https://developers.googleblog.com/2015/02/smaller-fonts-with-woff-20-and-unicode.html) sind auch die besser komprimierten WOFF2-Dateien im Gebrauch, die heute von allen modernen Browsern unterstützt werden. Auch ältere Browser können mit älteren Font-Formaten (EOT)  Schriften einbinden.
Verfügt man über eine Lizenz eines Webfonts, so kann diese Schrift dynamisch zur Seite hinzugeladen werden. Der Gestalter weiss somit, wie seine Seite aussehen wird und kann die Typografie vollständig kontrollieren.

#### Beispiel



<Margin>


#### Fallback
Damit der Webfont von möglichst vielen Browsern gelesen werden kann, können Fallbacks definiert. So kann zum Beispiel Woff2 und Woff1 definiert werden.

</Margin>




CSS-Definition für Webfonts:

```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-reg-web.woff2') format('woff2'), /* Modern Browsers */
  url('opensans-reg-web.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

p {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
```







#### Beispiel google-Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

p {
  font-family: 'Open Sans', sans-serif;
}
```



### Unicode Range
Möchte man nur eine speziefische Auswahl an Buchstaben (Subset) eines Fonts von einer anderen Font-Datei beziehen, so kann dies mittels `unicode-range` gemacht werden. Dies ist vor allem nützlich, wenn wichtige Zeichen in einem Font fehlen (beispielsweise geschütztes schmales Leerzeichen) und von einer anderen Datei bezogen werden müssen.

#### Beispiel
CSS-Definition mit `unicode-range` aus zwei font-faces:

```css
@font-face {
  font-family: 'Open Sans';
  src: url('opensans-reg-web.woff2') format('woff2'), /* Modern Browsers */
  url('opensans-reg-web.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  unicode-range: U+000-5FF; /* Latin glyphs */
}

@font-face {
  font-family: 'Open Sans';
  src: url('special-web.woff2') format('woff2'), /* Modern Browsers */
  url('special-web.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  unicode-range: U+0061; /* overwrite for letter a */
}

p {
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
}
```


### OpenType features





<Margin>


#### Links
* [Fonts untersuchen – FontDrop](https://fontdrop.info/)
* [Übersicht über die OpenType-Features von Adobe](https://helpx.adobe.com/typekit/using/open-type-syntax.html#ordn)
* [Anwendung – css-tricks](https://css-tricks.com/almanac/properties/f/font-feature-settings/)
* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings)
* [Google vs. Font Features](https://blog.bramp.net/post/2018/01/21/google-font-features/)

</Margin>



Auch im Web sind OpenType features wie Ligaturen oder verschiedenen Zahlensets möglich. Der Browser-Support ist hierfür gut, jedoch müssen natürlich die entsprechenden Features im Font vorhanden sein.


#### Beispiele
CSS-Definition mit aktivierten Brüchen:

```css
.bsp1  {
    font-feature-settings: "frac";
}
```




CSS-Definition mit aktivierten tabelarischen (`lnum`) Mediävalziffern (`onum`):

```css
.bsp2  {
    font-feature-settings: "lnum", "onum";
}
```





CSS-Definition mit ausgeschalteten Ligaturen:

```css
.bsp3  {
    font-feature-settings: "liga" 0;
}
```


#### Gängige Features
Um bei eienm Font OpenType-Features zu nutzen, muss die Dokumentation vom Font/Schriftenhersteller konsultiert werden um zu erfahren, welche Features verfügbar sind.

Einige gängige Features sind die auch in CSS abrufbar sind;

| Feature  | Englisch                      | Deutsch                                          |
|---------------|-------------------------|----------------------------------------------|
| liga          | Standard Ligatures      | Standard Ligatures                           |
| dlig          | Discretionary Ligatures | Bedingte Ligaturen                           |
| lnum          | Lining figures          | Versalziffern                                |
| onum          | Oldstyle figures        | Mediävalziffern (Minuskelziffern)            |
| pnum          | Proportional figures    | Proportionale Ziffern (nicht gleiche Breite) |
| tnum          | Tabular figures         | Tabellenziffern (gleiche Breite)             |
| frac          | Fractions               | Bruchziffern                                 |
| smcp          | Small caps              | Kapitälchen                                  |
| ss01–ss20     | Stylistic sets          | Formatsätze                                  |
| sups          | Superscript/Superior    | Hochgestellt                                 |
| subs          | Subscript/Infirior      | Tiefgestellt                                 |
| numr          | Numerator               | Zähler                                       |
| dnom          | Denominator             | Nenner                                       |



### Unterstreichung
Möchte man einen Text unterstreichen (zum Beispiel um einen Link anzuzeigen), so sollte der Browser die Definition für die Dicke und den Abstand zur Grundline aus dem Font auslesen. Wenn man darauf jedoch einen bewussten Einfluss nehmen möche, so kann dies auch via CSS übersteuert werden. [Browser-Support](https://caniuse.com/?search=text-underline-offset)

Beispiel für eine schwarze Linie unter dem Text:

```css
a {
  text-decoration: underline solid blue;
  text-underline-offset: 0.2em;
  text-decoration-thickness: 0.1em;
}
```

## Font-Konzepte fürs Web
### Responsive Grösse
Fonts können auf die grösse des Geräts oder die grösse des Fensters reagieren. So können zum Beispiel Schriftgrössen abhängig von der Fenstergrösse (Viewport) definiert werden. Oder aber wenn das Layout von einer zweispaltigen Darstellung in eine einspaltige Darstellung wechselt (bei mobilen Geräten), kann eine ander Schriftgrösse gewählt werden.



<Grid>


![Schriftgrösse wird gemäss Viewport angepasst](./img/ViewportSizedAll.png)

Mit CSS ist es möglich je nach Fensterbreite die Schrift in der Grösse anzupassen.


</Grid>



### Font abhängig von Fenstergrösse
Bei diesem noch eher neuen Konzept ist die Idee, dass sich nicht nur die Grösse des Fonts dem Fenster anpasst, sondern dass auch der Font selber dem Fenster oder der Bildschirmgrösse angepasst wird. Diese Technologie ist heute schon möglich.



<Grid>


![Anpassen von Fonts gemäss Fensterbreite](./img/FontToWidthAll.png)

Fontwechsel – Auswechseln von Fonts abhängig von der Fenstergrösse.


</Grid>








## Variable Fonts


### Vorgeschichte



<Margin>


#### Links

* [Verzeichnis von Variable Fonts](https://v-fonts.com/)
* [Übersicht Variable Fonts](https://medium.com/@clagnut/get-started-with-variable-fonts-c055fd73ecd7)
* [Getting started with variable fonts](https://clagnut.com/blog/2389/)
* [Variable Fonts on the Web – WebKit](https://webkit.org/blog/7051/variable-fonts-on-the-web/)
* [The Typekit Blog – Variable fonts](https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/)

</Margin>



Im Jahr 2015 entstanden die ersten JavaScript-Experimente mit denen Fonts live im Web-Browser interpoliert (Zwischenschnitt zwischen zwei Extrem-Schriftschnitten) wurden und dann für die Anzeige verwendet wurden. Somit konnte auf die Umstände der Anzeige (Bildschirmgrösse, Gerät, ...) reagiert werden. Dieses Konzept war jedoch technisch nicht ausgereift genug für produktive Systeme. Es war eher ein «proof of concept».



#### Anpassung an Viewport
Fonts können sich zum Beispiel je anch Viewport/Fenstergrösse anpassen 
<Grid>

![Anpassen von Fonts gemäss Fensterbreite](./img/InterpolationAll.png)


</Grid>


Bildquelle: [A List Apart – Live font interpolation](http://alistapart.com/d/412/interpolation/) – (offline) | [Artikel](https://alistapart.com/article/live-font-interpolation-on-the-web/)



### Standardisierung

Im Oktober 2016 hatte ein breites Konsortium von diversen Herstellern den OpenType-Standard mit der Version 1.8 angekündigt. Adobe, Google, Microsoft und Andere haben zugesagt diesen Standard bald in Ihre Software-Produkte zu integireren. Neben diversen eher technischen Erneuerungen ist vor allem die Möglichkeit für «Variable Fonts» für Gestalter heraus zu streichen. Mit dieser Funktion können Fonts mehrere so genannte Design-Achsen haben. Man kann also Fonts so einrichten, dass Sie zum Beispiel von ganz Light zu super Black stuffenlos (oder mit vom Designer gewählten Stufen) einstellbar sind. Aber auch andere Design-Achsen lassen sich frei vom Schriftdesinger bestimmen. Diese Technologie erinnert an die «Multiple master fonts» (1991), jedoch wird sich der neue Standard wohl besser verbreiten als die damalige Technologie.



### Variable Fonts und CSS
Folgende CSS-Attribute sind vom Standard vorgesehen:

* `font-weight` – Schriftstärke als Zahl von 1–999
* `font-stretch` – Schriftbreite in % (50% = Condesed, 200% Extended)
* `font-style` – Schriftlage zwischen -90° und +90°
* `font-optical-sizing` – Optische Schriftgrösen ein- oder ausschalten



Daneben lassen sich aber auch weitere Werte-Achsen wie folgt definieren;


<Margin>



Hier wird jeweils eine Werte-Achse mit vier Buchstaben (vom Designer bestimmt) mit einem Wert angewandt.


</Margin>


```css
p {
    font-variation-settings: "wdth" 600, "wght" 200, "opsz" 48;
}
```




#### Einbinden eines Fonts
CSS-Definition für ein `@font-face` mit einem variablen Font mit einer `font-weight`-Achse von 300 bis 800:

```css
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300 800;
  font-stretch: 100%;
  font-display: swap;
  src: url("OpenSans[wght@300..800][subset@latin].woff2")
    format("woff2-variations");
}
```





## Fonts finden & testen



<Margin>


#### Mieten von Desktop-Fonts
Auf [fontstand.com](https://fontstand.com/) können Desktop-Fonts gemietet werden. Dies ermöglicht Entwürfe dem Kunden vor zu legen, ohne den Font gekauft zu haben.

</Margin>

Fonts für Web- und Screendesign können von fast allen grossen und kleinen Font-Foundrys erworben werden. Es gibt vereinzelt Schriften, die (noch) nicht für den Web-Einsatz lizenziert werden können, dies ist jedoch eher die Ausnahme. Für Anwendungen ausserhalb des Webs – aber auf Screens – gibt es eher wenige Anbieter. So bietet zum Beispiel Linotype auch für eBooks, Apps und Server-Anwendungen Lizenzen. Diese Lizenztypen sind jedoch bei anderen Firmen oft nur mit Verhandlungen zu erwerben und es gibt keine standardisierten Prozesse.
Das Vorgehen zur Recherche von neuen Schriften unterscheidet sich nicht wesentlich vom finden von Schriften für den Print-Bereich. Sucht man eine Schrift, deren Name schon bekannt ist, so kann direkt zum Anbieter gesprungen werden. Ist man eher auf der Suche nach einem bestimmten Stil, kann eine Font-Plattform wie myfonts.com genutzt werden um ein entsprechendes Design zu finden.

### Testen
Beim Suchen von Schriften ist es ratsam, die Schrift möglichst in einem Live-Preview auf die Tauglichkeit am Bildschirm zu prüfen. Deshalb können Fonts bei Anbietern meist gleich auf der Seite getestet werden.



<Grid class="img--upscale" >

![Fonts auf typotheque.com testen](./img/typoteque-test.png)

</Grid>







## Fontlizenzen



<Margin>

#### Mieten (pro Monat)
* [Adobe Fonts](https://fonts.adobe.com/fonts)

#### Fonts einmalig kaufen
* [→ FontShop](https://www.fontshop.com/)

#### Views kaufen
* [→ linotype.com](https://www.linotype.com/de/)

</Margin>

Es gibt grundsätzlich drei verschiedene Arten von kommerziellen Font-Lizenzen:


### Miet-Lizenzen
Beim mieten von Lizenzen wird meist ein View-Volumen pro Monat gekauft unabhängig jedoch von der Anzahl der Fonts. So kann zum Beispiel ein Account erworben werden, der 50 000 Pageviews pro Monat auf einer Domain erlaubt. Wird diese Zahl überschritten, muss auf ein höherer Preisplan gewechselt werden. Oft kann ein Account für diverse Projekte gleichzeitig verwendet werden. Die Fonts sind beim Anbieter gehostet.

### Einmalige Lizenzkosten
Bei immer wenigen Anbietern kann eine Lizenz einmalig erworben werden. Bei einer solchen Lizenz wird diee Schrift meist auf dem eigenen Server installiert und der Schriftenanbieter vertraut darauf, dass der Käufer die Anzahl Views pro Monat, für die Lizenziert wurde, nicht überschritten wird.

### Kaufen von Views
Es gibt Anbieter, die Views verkaufen. Das heisst, dass mit jedem Besuch einer Webseite mit dem Font das erworbene «Konto» um ein View reduziert wird. Somit muss die Schrift von Zeit zu Zeit wieder mit neuen Views aktiviert werden, so dass immer genügend Views vorhanden sind. Oder aber das Konto erneuert sich immer am Ende des Monats neu.


### Zeichensatz
Wird die Schrift auf einer Seite eingesetzt, bei der viele Sprachen oder sonst spezielle Zeichen vorkommen, so ist es empfehlenswert zu Prüfen, ob die Schrift auch den nötigen Zeichensatz abdeckt. Auch OpenType-Features werden von den Schriftherstellern normalerweise vor dem Kauf angegeben.




## Freefonts – Kommerzielle Fonts
Es gibt von diversen Font Foundries, Firmen und Enthusiasten qualitativ sehr hochwertige und gute Schriften, die frei verfügbar sind. Dabei gibt es diverse Abstufungen. Es gibt ganze Schriftfamilien, die frei sind, dann gibt es Schriftfamilien, bei denen einzelne Schnitte frei sind, oder es gibt Fonts, bei denen ein gewisser Zeichenumfang frei ist. Damit nicht bei den einzelnen Stellen im Web nach den Fonts gesucht werden muss, empfiehlt es sich, Portale zu verwenden, die einem die verschiedenen Fonts sortiert präsentieren oder eine schnelle Suche ermöglichen. Auch bieten solche Portale zum Teil die Möglichkeit, die Fonts gleich von deren Server zu laden (google Fonts) oder gewisse Konvertierungen für den Webgebrauch (fontsquirrel) zu erledigen.
Die benötige Fontlizenz für eine Website sollte mit dem Kunden geklärt werden und bereits in der Offerte sollte geklärt sein, wer die Lizenz zu erwerben hat.

### Kunde oder Agentur
Aus finanzieller Überlegung kann es attraktiv sein, die Schriftlizenzen für alle Kunden über ein Konto der Agentur zu kaufen. So können die Kosten auf die verschiedenen Webprojekte umgelegt werden. Dies hat jedoch auch den Nachteil, dass die Agentur die Verantwortung gegenüber dem Kunden hat, den Account zu bezahlen und pflegen.












## Iconfonts
Icons werden auf Websites oft verwendet um Inhalte schneller und einfacher zugänglich zu machen. Aus technischer Sicht ist es relativ einfach – für einen Programmierer – diese Icons in einen Font zu konvertieren. Zudem haben solche Icons den Vorteil, dass Sie auf vielen Betriebsystemen und Browsern funktionieren und vektorbasiert aufgebaut sind. Als Nachteil ist zu beklagen, dass für die Accessibility (Menschen mit Behinderung einen Zugang ermöglichen) es oftmals keine gute Idee ist, die Icons mit Schrift zu machen, da die Zeichen dann als Inhalt verstanden werden und zum Beispiel Screen-Reader damit Probleme haben können.





<Margin>



### Iconfonts optimieren
Fontello.com bietet die Möglichkeit aus diversen freien Icon-Fonts sich die nötigen Icons zu suchen und dann einen eignenen Icon-Font daraus zu erstellen. Auch können eigene Icons in den Font eingebunden werden.


</Margin>



![Iconfont von fontello.com](./img/fontello.png)










## Weiterführende Informationen


### Freefonts
* [Font Squirrel](http://www.fontsquirrel.com)
* [Google Fonts](https://fonts.google.com/)
* [DaFont](https://www.dafont.com/) (Qualität zum Teil zweifelhaft)

### Icon-Fonts erstellen
* [Fontello](http://fontello.com/)

### Responsive Schriftgrössen
* [Viewport Sized Typography](https://css-tricks.com/viewport-sized-typography/)
* [CSS Values and Units Module Level 3](http://www.w3.org/TR/css3-values/#viewport-relative-lengths)

### Responsive Schriftanpassung
* [A List Apart – Variable Fonts for Responsive Design](http://alistapart.com/blog/post/variable-fonts-for-responsive-design)
* [A List Apart – Live Font Interpolation on the Web](http://alistapart.com/article/live-font-interpolation-on-the-web)
* [LucasFonts – Interpolation Theory](http://www.lucasfonts.com/about/interpolation-theory/)
* [Font‑To‑Width Proof of Concept](http://font-to-width.com/)
* [Viewport Sized Typography](https://css-tricks.com/examples/ViewportTypography/)

### Fonts in Webfonts konvertieren
* [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator)

### Webfonts und Kompression von Webfonts
* [Web Open Font Format - Wikipedia](https://en.wikipedia.org/wiki/Web_Open_Font_Format)
* [WOFF File Format 1.0](http://www.w3.org/TR/WOFF/)
* [WOFF File Format 2.0](https://www.w3.org/TR/WOFF2/)
* [Google Developers Blog – WOFF 2.0](http://googledevelopers.blogspot.hu/2015/02/smaller-fonts-with-woff-20-and-unicode.html)



### Linksammlung
* [Awesome Typography](https://github.com/Jolg42/awesome-typography)


#### Dokumentgeschichte
September 2015: Erstellung  
März 2017: Erweiterung  
März 2018: Erweiterung  
September 2021: Erweiterung  
Dezember 2021: Erweiterung  


<br />
<br />