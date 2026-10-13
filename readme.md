
## Förslag på driftsättning - 0kr till en början.
Hosting: Vercel, netlify eller github?
CMS & Fillagring: Sanity.io?
Källa: https://share.gemini.google/fxgiIpfzjXlk


TODO:
- [x] ~~Färdigställa styling på projekt-korten.~~
- [x] ~~Lägga till "Tjänster" sektionen på startsidan~~
- [x] ~~Lägga till en Footer likt dem flesta stylingmässigt.~~
- [] Koppla offertknappens form med en mail.
- [x] ~~Skriva om quoteBtn & project-loader själv så det är min egna kod~~ 
- [x] ~~Styla Tjänster sektionen.~~
- [x] ~~Lägga till margin bottom på projektkorten och ta bort det från projekt-sektionen när media queries ska börja definieras.~~





## projectLoader.js Funktionalitet
Sidan har en dynamisk projektvisning som laddar projektdata från en extern JSON-fil (`projects.json`) via JavaScript. På startsidan skapas interaktiva förhandsvisningar där ett intervall (`setInterval`) växlar mellan projektbilder och uppdaterar tillhörande indikationselement (prickar) när användaren hovrar med muspekaren över ett kort. Logiken hanteras uppdelad i moduler för att hålla koden överskådlig och återanvändbar.

## Tekniska val
Jag valde att strukturera om JavaScript-koden med hjälp av **ES-moduler (`import`/`export`)**. Istället för att duplicera koden för att hämta projektdata (`fetch`) på flera ställen, bröt jag ut datahämtningen till en egen gemensam funktion. Detta gör att jag följer **DRY-principen (Don't Repeat Yourself)**, vilket gör koden enklare att underhålla och bygga ut i takt med att webbplatsen växer med fler sidor.

## Bedömning av AI-innehåll
AI har använts som ett bollplank under processen, bland annat för att få hjälp med strukturering av koden och felsökning av hovringslogiken (`mouseenter`/`mouseleave`) samt hur man sätter upp moduler på ett snyggt sätt. 
- **Vad jag behöll:** Själva grundstrukturen för modulindelningen och logiken för att nollställa bildspelet när musen lämnar elementet.
- **Vad jag ändrade:** Jag anpassade koden så att den passar direkt med min befintliga HTML-struktur och mallar (`template`), samt såg till att jag till fullo förstår hur funktionerna hänger ihop och exekverar i rätt ordning.