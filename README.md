# Moments

En mobilapp för att spara minnen med titel, foto och plats. Byggd med React Native, Expo och TypeScript.

## Beskrivning

Moments är en enkel minnesapp för den som vill samla små stunder på ett ställe. Du skapar ett minne genom att skriva en titel, välja ett foto från galleriet och lägga till var du är. Alla minnen visas i en lista, och när du trycker på ett öppnas en detaljsida med fotot och platsen. Därifrån kan du kopiera minnets text till urklipp.

Obs: minnena sparas bara i appens minne medan den körs. När appen startas om är listan tom.

## Så bygger och kör du projektet

Du behöver:
- Node.js (LTS) och Git installerade på datorn
- Appen **Expo Go** installerad på din telefon (gratis i App Store eller Google Play)
- Ett gratis Expo-konto om du behöver använda tunnel-läget (steg 5)

1. Klona projektet:
```bash
   git clone https://github.com/IsaWar96/moments.git
   cd moments
```
2. Installera beroenden:
```bash
   npm install
```
3. Starta utvecklingsservern:
```bash
   npx expo start
```
4. Skanna QR-koden som visas i terminalen.
   - iPhone: använd kameraappen, den öppnar Expo Go.
   - Android: använd skannern i Expo Go.
   Telefonen och datorn ska sitta på samma wifi.
5. Fungerar det inte (till exempel på skol-wifi), starta med tunnel i stället:
```bash
   npx expo start --tunnel
```
   Tunnel kräver att du är inloggad med samma Expo-konto på datorn (`npx expo login`) och i Expo Go.

När du trycker på **Välj foto** eller **Lägg till plats** frågar telefonen om tillåtelse. Platsen kräver att du tillåter åtkomst.

## Använda React Native-komponenter

| Komponent | Används till |
|---|---|
| `View` | Behållare för layout på alla skärmar |
| `Text` | Visar titlar, platser, knapptexter och meddelanden |
| `Image` | Visar det valda fotot i förhandsvisningen och på detaljsidan |
| `Pressable` | Alla knappar, och gör varje rad i minneslistan tryckbar |
| `TextInput` | Fältet där du skriver minnets titel |
| `FlatList` | Visar listan med minnen på startsidan |

## Använda Expo SDK-moduler

| Modul | Används till |
|---|---|
| `expo-image-picker` | Väljer ett foto från telefonens galleri när du skapar ett minne |
| `expo-location` | Frågar om tillstånd, hämtar telefonens position och gör om den till ett ortnamn |
| `expo-haptics` | Ger en kort vibration när ett minne sparas, och en varning om titeln är tom |
| `expo-clipboard` | Kopierar minnets titel och plats till urklipp från detaljsidan |

## Navigering med Expo Router

Appen använder Expo Router, där varje fil i `src/app/` blir en skärm.

| Fil | Skärm |
|---|---|
| `src/app/index.tsx` | Startsidan med listan över minnen |
| `src/app/new-memory.tsx` | Skapa ett nytt minne |
| `src/app/memory/[id].tsx` | Detaljsida för ett minne |

Skärmen `memory/[id].tsx` tar emot parametern `id`. Den skickas med från listan via `router.push({ pathname: "/memory/[id]", params: { id } })` och läses på detaljsidan med `useLocalSearchParams`.

## Projektstruktur

```
src/
├── app/
│   ├── _layout.tsx        Stack-navigering och rubriker
│   ├── index.tsx          Lista över minnen
│   ├── new-memory.tsx     Formulär för nytt minne
│   └── memory/
│       └── [id].tsx       Detaljsida (tar emot id)
└── memories.ts            Gemensam lista och funktioner för minnen
```

## Uppfyllda krav

Krav för godkänt (G):

- [x] Projektet använder minst 4 RN-komponenter (6 st) och minst 4 Expo SDK-moduler (4 st)
- [x] Komponenterna och modulerna är antecknade i README.md, tillsammans med den här kravlistan
- [x] Expo Router används för navigering, och en skärm (`memory/[id]`) tar emot en parameter
- [x] Git och GitHub har använts, med commits spridda över arbetets gång
- [x] Projektmappen innehåller en README.md

## Användning av AI-verktyg

Jag har använt Claude som hjälp under arbetet, till att föreslå appidé och projektstruktur, skriva kodexempel. Jag har kört och testat varje steg på min egen telefon i Expo Go och committat efter varje fungerande steg.