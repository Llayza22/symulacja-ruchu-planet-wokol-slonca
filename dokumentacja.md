# ☀️ Symulacja Układu Planetarnego

## Opis projektu

Projekt przedstawia interaktywną symulację ruchu planet wokół Słońca. Aplikacja została wykonana w technologiach HTML, CSS oraz JavaScript i działa bezpośrednio w przeglądarce internetowej.

Symulacja wykorzystuje podstawowe prawa mechaniki klasycznej, w szczególności prawo powszechnego ciążenia Newtona oraz zależność pomiędzy siłą, masą i przyspieszeniem. Program wizualizuje ruch planet po orbitach oraz pozwala użytkownikowi modyfikować parametry wpływające na zachowanie układu.

---

## Cel projektu

Celem projektu jest przedstawienie działania siły grawitacji w Układzie Słonecznym oraz pokazanie zależności pomiędzy masą centralnego ciała a ruchem obiektów znajdujących się na orbitach.

Projekt ma charakter edukacyjny i demonstracyjny.

---

## Wykorzystane technologie

* HTML5
* CSS3
* JavaScript (ES6)
* Canvas API
* GitHub Pages

---

## Zastosowane zagadnienia fizyczne

### Prawo powszechnego ciążenia Newtona

Siła grawitacji pomiędzy dwoma ciałami opisana jest wzorem:

F = G · (m₁ · m₂) / r²

gdzie:

* G – stała grawitacyjna,
* m₁ i m₂ – masy ciał,
* r – odległość pomiędzy środkami mas.

### Druga zasada dynamiki Newtona

Przyspieszenie ciała wynika z działającej na nie siły:

F = m · a

Na podstawie tych zależności można wyznaczyć ruch planet wokół gwiazdy centralnej.

---

## Funkcjonalności

### Wizualizacja planet

Program przedstawia:

* Wenus
* Ziemię
* Marsa
* Słońce

Każda planeta posiada własną orbitę oraz ślad trajektorii.

### Sterowanie symulacją

Użytkownik może:

* uruchomić symulację,
* zatrzymać symulację,
* zresetować położenie planet.

### Regulacja masy Słońca

Za pomocą suwaka można zwiększać lub zmniejszać masę gwiazdy centralnej.

Zmiana masy wpływa na prędkość orbitalną planet.

### Regulacja czasu

Możliwe jest przyspieszenie lub spowolnienie przebiegu symulacji.

### Wizualizacja orbit

Program wyświetla:

* aktualne położenie planet,
* ślady ruchu,
* przewidywane orbity.

---

## Struktura projektu

```text
projekt/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Odpowiada za strukturę strony internetowej oraz elementy interfejsu użytkownika.

### style.css

Zawiera definicje wyglądu aplikacji, kolorystyki, animacji oraz układu elementów.

### script.js

Odpowiada za logikę działania programu, obliczenia ruchu planet i renderowanie animacji.

---

## Sposób uruchomienia

1. Pobrać pliki projektu.
2. Umieścić je w jednym folderze.
3. Otworzyć plik `index.html` w przeglądarce internetowej.

Alternatywnie projekt można opublikować za pomocą GitHub Pages.

---

## Możliwe kierunki rozwoju

Projekt można rozbudować o:

* dodatkowe planety,
* rzeczywiste dane astronomiczne,
* eliptyczne orbity,
* księżyce planet,
* symulację problemu trzech ciał,
* wykresy prędkości i energii,
* system kolizji obiektów.

---

## Wnioski

Projekt pokazuje praktyczne zastosowanie praw fizyki w programowaniu komputerowym. Dzięki wizualizacji możliwe jest łatwiejsze zrozumienie wpływu siły grawitacji na ruch ciał niebieskich. Symulacja stanowi przykład połączenia wiedzy z zakresu fizyki, matematyki oraz informatyki w jednym interaktywnym środowisku edukacyjnym.
