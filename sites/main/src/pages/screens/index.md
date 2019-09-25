---
title: "Screens"
author: "Stefan Huber"
date: "2019-09-04"
draft: false
path: "/articles/screens/"
category: "article"
tags:
  - "eBook"
  - "Screen"
  - "Typografie"
description: "Der Bildschirm (engl. Screen) ist für die meiste Interaktion im digitalen Umfeld das wichtigste Ausgabemedium. Je nach Technologie oder Eigenschaften, ergeben sich andere Herausforderungen bei der Gestaltung."
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Div from 'gatsby-theme-signalwerk/src/components/Div';



## Bildschirmauflösung
Je nach Auflösung des Bildschirms können mehr oder weniger Pixel auf der Ausgabefläche ausgegeben werden. Je mehr Pixel zur Verfügung stehen, desto grösser kann das Browser-Fenster aufgezogen werden. Bei Websites mit «fixem Layout» werden somit mehr oder weniger Inhalte sichtbar.



<div class="wide-grid space pad bg">
  <div class="col-1to12">
    <figure>
      <img src="../media/data/device/reader-screensize/screensize-desktop-mobile.svg" alt="mobile screen vs. desktop screen" />
      <figcaption>Desktop: Bildschrim hat eine grosse Auflösung und kann Seite vollständig anzeigen. <br /> Mobile: Bildschrim hat eine zu gerine Auflösung und kann Seite nicht vollständig anzeigen. Ungenügende technische Realisation für mobiles Gerät. Lässt sich vermeiden.</figcaption>
    </figure>
  </div>
</div>



### Standards
Es gibt diverse Grössen und Standards für Bildschirme und deren Auflösungen. Die Produktevielfallt (Desktop und Mobile) ist so gross, dass wir von keinem Standard mehr ausgehen können. Vielmehr muss man sich gedanken machen, wieviele Geräte man bei einer bestimmten Design-Minimalgrösse noch erreicht. Dabei helfen aktuelle [Satistiken](http://gs.statcounter.com/screen-resolution-stats).



<div class="wide-grid space pad">
  <div class="col-1to12">
    <figure>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Video_Standards8.svg" alt="Screen Standards" />
    	<figcaption>Einige Desktop-Grössen und deren Namen</figcaption>
    </figure>
  </div>
</div>



## Bildschirmabmessung
Die Bildschirmabmessung wird häufig auch in Zoll (Inch) angegeben. Spricht man von Zoll, so meint man im allgemeinen die Diagonale des Bildschirms. Die Grösse gibt meist eher eine Bildschirm-Grössenklasse an, denn eine effektive Grösse. Ein «15"-Bildschirm» hat also meist etwa 15 Zoll in der Diagonale. Die Bildschirmproportion ist dadur aber zum Beispiel nicht definiert.


## Visuelle Grösse
Die visuelle wahrgenommene Grösse eines Gestaltugnselements auf dem Bildschirm, ist abhängig von der effektiven Grösse auf dem Bildschirm und dem Betrachtungsabstand. Obwohl kleine Screens (Smartphones) weniger Platz bieten, so ist der Betrachtungsabstand auch kleiner und es können somit auch ähnliche Lesbarkeiten erreicht werden.

![](../media/data/device/reading-distance/SizeCalculator.png)
Bildquelle: [Size Calculator](https://sizecalc.com/)


## Auflösungsdichte – DPI
Eine Auflösungsdichte wird in DPI (Dots per Inch) angegeben. Diese Einheit gibt an, wie viele Bildpunkte pro Inch (25,4 mm = 1 Inch) – also eine Strecke – liegen. Je höher die Auflösung ist, desto weniger erkennt man die einzelnen Punkte in der Ausgabe und die Ausgabe wirkt weniger «verpixelt». Die Auflösung eines Bildschirms kann in DPI angegeben werden.



### DPI Wert ermitteln

<Margin>


### Rechnungsbeispiel
Ein Tablet kann 3000 Pixel in der Breite anzeigen und hat eine Breite von 25,4 cm. Somit beträgt die Auflösung 300 dpi (in der Breite).

3000 Pixel ÷ 10 Inch (25,4 cm) = 300 Dots per Inch

</Margin>

Höhe oder Breite des Bildes in Pixel ÷ Höhe oder Breite in Ausgabe (in Inch) = Auflösung in DPI (Dots per Inch)



<div class="column__text">
<div class="video">
<iframe src="https://player.vimeo.com/video/169809377" frameborder="0"></iframe>
</div>
</div>



## Auflösung im CSS
Mit einer Media-Query lassen sich abhängig von Auflösung verschiedene definitionen ein- und ausschalten.

### Beipiel für Media-Query mit minimaler DPI-Anzahl:



<Margin>

1 Zoll (Inch) = 25.4 mm  
1 dpi ≈ 0.39 dpcm  
1 dpcm = 2.54 dpi  

</Margin>

```css
@media
only screen and ( min-resolution: 190dpi),
only screen and ( min-resolution: 75dpcm)
{
  /* Definitionen hier */
}
```
[Support-Matrix für Browser](https://caniuse.com/#feat=css-media-resolution)

## Pixel zu Dots/Point (Device Pixel Ratio)

<Margin>

Microsoft verfolgt mit [Device-Independent Pixels](https://docs.microsoft.com/en-us/windows/desktop/learnwin32/dpi-and-device-independent-pixels) ein ähnliches Konzept für Desktop-Applikationen.

</Margin>

So genannte hochauflösende Bildschirme (High pixel density display) zeichnen einen Pixel (Ausmass) mit mehreren Bildschirmpunkten (Dots/Point) an. Ist jedoch pro Pixel mehr Information vorhanden (zum Beispiel bei Bildern), werden die effektiven Bildschirmpunkten mit voller Auflösung genutzt. Je höher die Auflösung eines Bildschrims ist, desto schärfer wirkt der Bildschirm für den Menschen.
Apple spricht bei hochaufgelösten Bildschirmen von Retina-Auflösung.

[The Ultimate Guide To iPhone Resolutions](https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions)


### Beispiel für Media-Query mit minimaler pixel density
```css
@media
only screen and ( min-device-pixel-ratio: 2),
only screen and ( min-resolution: 2dppx)
{
  /* Definitionen hier */
}
```
[Support-Matrix für Browser](https://caniuse.com/#feat=css-media-resolution)




## Display Technologien
Grundsätzlich können wir bei modernen Displays zwischen zwei Technologien unterscheiden. Bei klassischen Displays am Smartphone, Desktop oder bei Farb-Tablets werden meist Monitore mit der Technologie TFT LCD (Thin-film-transistor liquid-crystal display) verwendet. Dabei handelt es sich pro Pixel um in den drei Lichtfarben (Rot, Grün, Blau) leuchtende Elemente. Durch additive Farbmischung können Farben erzeugt werden.
Bei elektrophoretischen Anzeigen (eInk) oder ähnlichen Technologien, werden kleine Kugeln oder deren Inhalt so polarisiert, dass es eine schwarze und eine weisse Seite gibt. Daraus können dann mit ganz vielen dieser Kugeln ein S/W-Bild erzeugt werden. Die Kugeln selber sind nicht leuchtend und müssen durch Licht in der Aufsicht (Sonne) oder Hinterleuchtung sichtbar gemacht werden.




<Div className="wide-grid space pad">
<Div className="col-1to6">

### Elektrophoretische Anzeige
Kugeln enthalten weisse und schwarze Stellen
Bild-Quelle: [Wikipedia](http://de.wikipedia.org/wiki/Elektronisches_Papier)

![](../media/data/screen/eInk-tft-principle/eInk-principle.svg)

#### Geräte mit eInk
eBook-Reader
![](../media/data/device/category-by-screen/eInk.svg)

</Div>
<Div className="col-7to12">

### LCD-Anzeige
Drei kleine leuchtende Elemente erzeugen je Pixel eine Ausgabe (Farbe)

![](../media/data/screen/eInk-tft-principle/tft-principle.svg)

#### Geräte mit LCD
Smartphone, Tablet, Desktop
![](../media/data/device/category-by-screen/tft.svg)


</Div>
</Div>








### OLED
<Margin>

[Weitere Informationen](http://www.lg.com/global/business/information-display/technology-solution/oled)

</Margin>

Seit wenigen Jahren sind OLED (organic light emitting diode) eine weitere Display-Technologie, die vermehrt Einsatz findet. Vor allem kleinere Screens, wie in Smartphones verbaut, halten vermehrt mit dieser neuen Technologie einzug. Während beim TFT LCD das Licht über eine weisse Hingergrundbeleuchtung kommt und gefiltert wird, wird beim OLED farbiges Licht ausgestrahlt.


<video controls>
  <source src="https://cdn.jsdelivr.net/gh/signalwerk/IAD.LAB.DOC@35af6c6774dd58657eaf9a66d186d1bc36dd6505/pages/screens/img/REC016.mp4" type="video/mp4" />
  <source src="https://cdn.jsdelivr.net/gh/signalwerk/IAD.LAB.DOC@35af6c6774dd58657eaf9a66d186d1bc36dd6505/pages/screens/img/REC016.webm" type="video/webm" />
</video>

iOS 11 San Francisco Pro Text Regular 17pt auf iPhone X (Foto)

Quelle: Stefan Huber


![](../media/data/screen/oled-principle/OLED_detail.jpg)

Bildquelle: [LG](http://www.lg.com/global/business/information-display/technology-solution/oled)



![](../media/data/screen/oled-principle/OLED.png)

Bildquelle: [Gamezone/LG](https://www.mweb.co.za/games/NewsArticles/tabid/2561/Article/30977/Samsung-QLED-How-does-its-display-work-and-is-it-better-than-OLED.aspx)

OLED Varriante, bei dem zusätzlich zu RGB auch noch eine Weisskomponente angesteuert wird ([WRGB OLED](https://www.youtube.com/watch?v=3qRhTKOu9Pw)).

### OLED & Darkmode

<Margin>

### Betriebsystem mit Darkmode
* **MacOS Mojave (2018)** <br />erster Dark Mode auf Desktop
* **Android 9 (2018)** <br />erster Dark Mode auf Mobile
* **iOS 13 (2019)** <br />Dark Mode auch auf Apple Mobiles

</Margin>


Da mit OLED lediglich die beleuchteten Stellen auf dem Screen energie benötigen, kann es sinnvoll sein, möglichst grosse flächen des Screens dunkel zu belassen um zum Beispiel bei mobilen Geräten möglichst wenig Akku zu brauchen.  
Seit etwa 2018 gibt es auf diversen Betriebsystemen Unterstüztung für so genannte «Dark Modes», bei denen der User seine Präferenz für ein Farbschema auf Systemebene festlegen kann.


## Bildwiederholrate

<Margin>

* Animation flüssig: ab [20 – 30 Frames pro Sekunde (fps)](https://en.wikipedia.org/wiki/Frame_rate#/media/File:Animhorse.gif)
* Gut: 60 Frames pro Sekunde
* Ideal: einige Geräte haben heute 120 fps

</Margin>

Damit eine Animation flüssig auf dem Bildschirm erscheint, sollten zwischen 20 – 30 Frames pro Sekunde (fps) neu gezeichnet werden. 60 Frames pro Sekunde sind ideal. Viele Monitore können 60 Frames pro Sekunde anzeigen. Die limitierende Komponente ist meist eher ob der Computer in der Lage ist, so schnell die Bilder zu berechnen.












## Weiterführende Informationen


### Kennzahlen zu Bildschirmen
* [Lichtstärke – Lumen](https://de.wikipedia.org/wiki/Lumen_(Einheit))
* [Leuchtdichte – Nits](https://de.wikipedia.org/wiki/Leuchtdichte)
* [Farbraum](https://de.wikipedia.org/wiki/Farbraum)


### Übliche Bildschirmauflösungen
* [Browser Market](http://gs.statcounter.com/)
* [Browser Display Statistics](http://www.w3schools.com/browsers/browsers_display.asp)

### Screens
* [Kathodenstrahlröhre (Cathode ray tube – CRT)](https://youtu.be/3BJU2drrtCM?t=2m17s) & [Wikipedia](https://de.wikipedia.org/wiki/Kathodenstrahlr%C3%B6hre)
* [Quantum-Dot Displays](https://spectrum.ieee.org/consumer-electronics/audiovideo/your-guide-to-televisions-quantumdot-future)
* [iPhone X Display](https://www.theverge.com/2017/10/31/16579748/apple-iphone-x-review)
* [Framerate](https://www.youtube.com/watch?v=mjYjFEp9Yx0)



<br />
<br />
<br />
<hr />

### Autor
Stefan Huber  
sh@signalwerk.ch  
+41 78 744 37 38

### Dokumentgeschichte
Juni 2018: Erstellung  
Januar 2019: Überarbeitung  
September 2019: Überarbeitung  


<br />
<br />
