---
title: Fonts · Eigenschaften
author: "Stefan Huber"
date: "2019-09-25"
draft: false
path: "/articles/font-anatomy/"
category: "article"
tags:
  - "fonts"
  - "Eigenschaften"
  - "Typografie"
description: "Im Zusammenhang mit Schrift gibt es diverse Fachbegriffe, die eine präzise und einfache Kommunikation ermöglichen."
---

import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';
import StyleLoaderAnatomy from "./styleLoader";

<StyleLoaderAnatomy/>



## Vierliniensystem

Die lateinische Schrift basiert auf einem so genannten Vierliniensystem. Alle Schriftzeichen des Alphabet orientieren sich an der Schriftlinie und haben maximal zwei weitere Linien, an denen Sie sich orientieren.

<Grid>

![Font anatomy](./img/anatomy/SVG/font-lines.svg)
<Column start="1" end="7">

1. Kegelunterkante · CSS: `text-bottom`
2. p-Linie (Decenderline, beardline)
3. Schriftlinie, Grundlinie (Baseline) · CSS: `baseline`
4. x-Linie, Mittellinie (x-line)
5. H-Linie, Versallinie (Cap line)
6. k-Linie (Acenderline)
7. Kegeloberkante · CSS: `text-top`

</Column>

<Column start="7" end="13">



<div class="list--upper-alpha">

1. x-Höhe, Mittellänge (x-Height)
2. Unterlänge, Unterhöhe (Decender depth)
3. Versalhöhe (Cap height)
4. Oberlänge (Acender height)
5. Überhang (Overshoot)
6. Vertikaler Raumbedarf, Kegelgrösse, Schriftgrösse (Font Size, em)
7. Fleisch (buffer space, shoulder)

</div>


</Column>

</Grid>


## Anatomie der Buchstaben


<Grid>

<Column start="1" end="9">

![Font anatomy](./img/anatomy/SVG/font-anatomy-01.svg)

</Column>

<Column start="9" end="13">

1. Anstrich
2. geschlossener Punzen (closed counter)
3. offener Punze (open counter)
4. Ohr, Fähnchen (ear)
5. Abstrich (terminal)
6. Schulter (shoulder)

</Column>

</Grid>



<Grid>

<Column start="1" end="9">

![Font anatomy](./img/anatomy/SVG/font-anatomy-02.svg)


</Column>

<Column start="9" end="13">


1. Stamm, Grundstrich (stem)
2. Haarstrich (hairline)
3. Serife (serif)
4. Anstrich/Dachansatz (ascender)
5. Halbserife
6. Schleife (loop)
7. Achslage (axis)

</Column>

</Grid>



## Spezielle Buchstabenformen

<Grid>

<Column start="1" end="9">

![Font anatomy](./img/anatomy/SVG/font-character-forms.svg)

</Column>

<Column start="9" end="13">

1. Einstöckiges a | Zweistöckiges a (two storey a)
2. Zweistöckiges g | Dreistöckiges g
3. Krückstock l (Erik Spiekermann) | normales l
4. Amerikanische 1 | Europäische 1

</Column>

</Grid>




<Grid>

<Column start="1" end="9">

</Column>

<Column start="9" end="13">

</Column>

</Grid>







<Grid>

<Column start="1" end="5">

</Column>

<Column start="5" end="13">

</Column>

</Grid>


### CSS
Objekte in HTML können mittels CSS an der Schrift ausgerichtet werden.


<div class="big-anatomy">
  <code><span class="inlinebox" style=""></span>vertical-align: baseline; </code>
  <code><span class="inlinebox" style="vertical-align: text-top"></span>vertical-align: text-top; </code>
  <code><span class="inlinebox" style="vertical-align: text-bottom"></span>vertical-align: text-bottom; </code>
</div>



## Weiterführende Informationen


### Technik
* [Panose Werte](https://twitter.com/ellmerstefan/status/934190602421448705/photo/1)


<br />
<br />
<br />
<hr />


### Dokumentgeschichte
März 2018: Erstellung  
Februar 2020: Überarbeitung  



<br />
<br />
