---
title: Unicode
author: "Stefan Huber"
date: "2020-01-10"
draft: false
path: "/articles/unicode/"
category: "article"
tags:
  - "CSS"
  - "HTML"
  - "JavaScript"
description: ""
---


import Margin from 'gatsby-theme-signalwerk/src/components/Margin';
import Grid from 'gatsby-theme-signalwerk/src/components/Grid';
import Column from 'gatsby-theme-signalwerk/src/components/Column';
import Box from 'gatsby-theme-signalwerk/src/components/Box';



## Unicode

Das Unicode Konsortium wurde geschaffen um eine Standardisierung zu erreichen, welcher **Wert/Zeichencode (Codepoint)** welchem **Schriftzeichen (Glyph)** entspricht.




## Vorläufer
* Diverse Standards für verschiedene Betriebsysteme und Sprachregionen
* [ASCII](http://ascii-table.com/) diente für die ersten 127 Zeichen des späteren Unicode



## Unicode Version 1 · Oktober 1991
* 7161 Zeichen
* 24 Schriftsysteme



## Unicode Version 13 · März 2020
* 143 859 Zeichen
* 154 Schriftsysteme




## Beispiel

* Wert 65 entspricht einem lateinischen A (Grossbuchstabe)
* Notation meist in Hex `U+0041`
* In HTML in DEC `&#65;` oder HEX `&#x41;` geschrieben.
* [Unicode Eintrag für A](http://unicode.org/cldr/utility/character.jsp?a=0041)




## Encoding

Beim Encoding wird festgehalten, wie der Codepoint abgespeichert wird.

### Verbreitete Encodings für Unicode
* [UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* UTF-16 (nur verwenden, wenn UTF-8 nicht möglich)
* UTF-32 (nur verwenden, wenn UTF-8 nicht möglich)

### Beispiel
* A = BIN `01000001` in UTF-8 Encoding




## Falsches Encoding
<div class="example example--h1">
Wörter → Wˆrter

</div>
Encoding «Windows Latin 1» als «Mac OS Roman» interpretiert.


## Fehlende Glyphen – replacement character

<div class="example example--h1">
W□rter – W�rter
</div>



## Noto
* [Google-Font Noto](https://www.google.com/get/noto/)
* Ziel: alle Zeichen des Unicode-Standards
* «No Tofu»
* «replacement character» □ = Tofu




## The Unicode Consortium
* [→ Zeichencode Standard](http://www.unicode.org/)
* [→ Sortierung](https://www.unicode.org/reports/tr10/tr10-38.html) [(→ siehe auch Wikipedia)](https://de.wikipedia.org/wiki/Alphabetische_Sortierung)
* [→ Normalisierung – ß = ss](http://unicode.org/reports/tr15/)
* [→ Quelle für Lokalisierung](https://www.unicode.org/cldr/charts/33/summary/root.html)



## Unicode encoding

Standardisiert, welcher Wert/Zeichencode (Codepoint) welchem Schriftzeichen (Glyph) entspricht.


## Beispiel

* Wert 65 entspricht einem lateinischen A (Grossbuchstabe)
* Notation meist in Hex `U+0041`
* In HTML in DEC `&#65;` oder HEX `&#x41;`

[→ Unicode Eintrag](http://unicode.org/cldr/utility/character.jsp?a=0041)



## Vorläufer

* Diverse Standards für verschiedene Betriebsysteme und Sprachregionen
* ASCII diente für die ersten 127 Zeichen von Unicode



## Unicode 11
* 5. Juli 2018
* 137 374 Zeichen
* 7 neue Sprachen
* Neue Emojis
* [→ Halbe Sterne](https://www.unicode.org/L2/L2016/16230-half-star-unicode.pdf)
* Copyleft symbol



## Encoding

Beim Encoding wird festgehalten, wie der Codepoint abgespeichert wird.



## UTF-8 Encoding
### A = BIN `01000001`
<br />
Verbreitete Standards für Unicode:
* [→ UTF-8](https://en.wikipedia.org/wiki/UTF-8)
* UTF-16 (nur verwenden, wenn UTF-8 nicht möglich)
* UTF-32 (nur verwenden, wenn UTF-8 nicht möglich)


siehe auch [→ ASCII-Table](http://ascii-table.com/)
<!-- .element: class="footer" -->



## HTML Encoding

```HTML
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>title</title>
  </head>
  <body>
    <!-- page content -->
  </body>
</html>
```
siehe auch [→ Verbreitung](https://googleblog.blogspot.com/2012/02/unicode-over-60-percent-of-web.html)
<!-- .element: class="footer" -->




## Emoji 12.1

* Unicode Emoji Subcommittee
* Emoji-Versionsnummern sind mit Unicode-Nummern in Sync
* [iOS 13.2 kann Emoji 12.1](https://www.theverge.com/2019/10/28/20936966/apple-ios-13-2-new-emoji-accessibility-inclusivity-gender-neutral-skin-color)






## Varianten

# ❤︎ = U+2764
* U+2764 HEAVY BLACK HEART  

# ❤️ = U+2764 & U+FE0F
* U+2764 HEAVY BLACK HEART  
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))



## Hautton Modifier

# 👏 👏🏻 👏🏼 👏🏽 👏🏾 👏🏿




## Fitzpatrick

* [Diverse Modifier](https://en.wikipedia.org/wiki/Miscellaneous_Symbols_and_Pictographs#Emoji_modifiers) nicht nur Hautton
* [Dermatologe Thomas Fitzpatrick (1919 – 2003)](https://de.wikipedia.org/wiki/Hauttyp#Hauttypen_nach_Fitzpatrick)
* Skala I – VI


## Fitzpatrick Modifier


* U+1F3FB EMOJI MODIFIER FITZPATRICK TYPE-1-2 = 🏻
* U+1F3FC EMOJI MODIFIER FITZPATRICK TYPE-3 = 🏼
* U+1F3FD EMOJI MODIFIER FITZPATRICK TYPE-4 = 🏽
* U+1F3FE EMOJI MODIFIER FITZPATRICK TYPE-5 = 🏾
* U+1F3FF EMOJI MODIFIER FITZPATRICK TYPE-6 = 🏿



## Fitzpatrick Modifier


* 🏻 U+1F3FB EMOJI MODIFIER FITZPATRICK TYPE-1-2
* 🏼 U+1F3FC EMOJI MODIFIER FITZPATRICK TYPE-3
* 🏽 U+1F3FD EMOJI MODIFIER FITZPATRICK TYPE-4
* 🏾 U+1F3FE EMOJI MODIFIER FITZPATRICK TYPE-5
* 🏿 U+1F3FF EMOJI MODIFIER FITZPATRICK TYPE-6




## Fitzpatrick Modifier


* 🏻 U+1F3FB EMOJI MODIFIER FITZPATRICK TYPE-1-2 = 🏻
* 🏼 U+1F3FC EMOJI MODIFIER FITZPATRICK TYPE-3 = 🏼
* 🏽 U+1F3FD EMOJI MODIFIER FITZPATRICK TYPE-4 = 🏽
* 🏾 U+1F3FE EMOJI MODIFIER FITZPATRICK TYPE-5 = 🏾
* 🏿 U+1F3FF EMOJI MODIFIER FITZPATRICK TYPE-6 = 🏿




## U+1F44F Clapping Hands

# 👏 👏🏻 👏🏼 👏🏽 👏🏾 👏🏿

* U+1F44F = 👏
* U+1F44F & U+1F3FB = 👏🏻
* U+1F44F & U+1F3FC = 👏🏼
* U+1F44F & U+1F3FD = 👏🏽
* U+1F44F & U+1F3FE = 👏🏾
* U+1F44F & U+1F3FF = 👏🏿



## Zero Width Joiner (ZWJ)

* Wird eigentlich verwendet um eine Trennung zu vermeiden.



## Man Health Worker

# 👨 + ZWJ + ⚕ + Emoji = 👨‍⚕️
* U+1F468 MAN = 👨
* U+200D ZERO WIDTH JOINER = ((nicht sichtbar))
* U+2695 STAFF OF AESCULAPIUS = ⚕
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))



## Woman Health Worker

# 👩 + ZWJ + ⚕ + Emoji = 👩‍⚕️
* U+1F469 WOMAN = 👩
* U+200D ZERO WIDTH JOINER = ((nicht sichtbar))
* U+2695 STAFF OF AESCULAPIUS = ⚕
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))




## Woman Health Worker: Medium Skin Tone

# 👩 + 🏽 + ZWJ + ⚕ + Emoji = 👩‍⚕️
* U+1F469 WOMAN = 👩
* 🏽 U+1F3FD EMOJI MODIFIER FITZPATRICK TYPE-4
* U+200D ZERO WIDTH JOINER = ((nicht sichtbar))
* U+2695 STAFF OF AESCULAPIUS = ⚕
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))





## 👩‍⚕️ Woman Health Worker

* 👩🏻‍⚕️ Woman Health Worker: Light Skin Tone
* 👩🏼‍⚕️ Woman Health Worker: Medium-Light Skin Tone
* 👩🏽‍⚕️ Woman Health Worker: Medium Skin Tone
* 👩🏾‍⚕️ Woman Health Worker: Medium-Dark Skin Tone
* 👩🏿‍⚕️ Woman Health Worker: Dark Skin Tone




## Fallstrick – Zeichenlängen

### Wie viele Zeichen sind: 👩‍⚕️?

# 👩 + ZWJ + ⚕ + Emoji = 👩‍⚕️
* U+1F469 WOMAN = 👩
* U+200D ZERO WIDTH JOINER = ((nicht sichtbar))
* U+2695 STAFF OF AESCULAPIUS = ⚕
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))



## Fallstrick – Normalisation


* U+00DC LATIN CAPITAL LETTER U WITH DIAERESIS = Ü
* U+0055 LATIN CAPITAL LETTER U + U+0308 COMBINING DIAERESI = &#x0055;&#x0308;




## Gender


# 🧟
zombie

# 🧟‍♀
woman zombie

# 🧟‍♂️
man zombie



## man zombie

* U+1F9DF ZOMBIE = 🧟
* U+200D ZERO WIDTH JOINER = ((nicht sichtbar))
* U+2642 MALE SIGN = ♂
* U+FE0F [VARIATION SELECTOR-16 (Emoji)](https://en.wikipedia.org/wiki/Variation_Selectors_(Unicode_block)) = ((nicht sichtbar))
