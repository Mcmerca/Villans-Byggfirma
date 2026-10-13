# [Villans Byggfirma]
## Om sidan
Hemsidan är till en liten byggfirma i marknadsföringssyfte.\ 
Hemsidan visar upp vilka tjänster som företaget tillhandahåller med, tidigare projekt & vem dem är. 

### Länk eller hänvisning till skissfilen i repot.
[/Skiss-hemsida.jpg]

### Skiljer sig den färdiga sidan från skissen? Vad ändrades och varför?
Skissen och hemsidans stuktur är näst-intill identisk då den gjordes i efterhand.\ 
Lärdommarna jag har tagit från det är att det effektiviserar tiden markant om man redan har en färdig grundstruktur att gå efter istället för att bygga on the fly.

## Funktionalitet
### Vad kan besökaren göra på sidan? Vilken fil och vilka funktioner sköter det? 

Beseökaren kan kolla upp tidigare arbeten med hjälp av [projectLoader.js] skriptet som laddar in dem 3 senaste projekten baserat på ett template i index.html, räknar hur många bilder som är inlagda och skapar upp lika många prickar samt håller koll på om musen hovrar bilderna och cyklar då genom dem vart 1,5e sekund. Datan hämtas automatiskt från en mock-databas som är gjord i en JSON-fil.\
När besökaren trycker på flikarna i navbaren så är där en softscroll som scrollar till motsvarande sektion, och om man trycker på "Offert" knappen så öppnas en ruta med ett ifyllnadsbart formulär med hjälp av [quoteBtn.js] där besökaren kan skriva in sina uppgifter samt en beskrivning och skicka in till företaget för att kunna få en offert på önskat arbete.\
Sidans navbar är även byggd för mindre skärmar genom en hamburgare-meny, denna laddas med hjälp av media-query i css filen och sedan gör skriptet [mobileMenu.js] att man kan öppna en rullgardin med navigeringslänkarna.

## AI-användning
### Minst två exempel. För varje:
1. Vad bad jag om?
2. Vad fick jag?
3. Vad gjorde jag med det?

Exempel 1:
1. Jag bad AI att bygga skriptet för [projectLoader.js].
2. Jag fick en funktion som fungerade precis som jag hade tänkt mig.
3. Jag använde den som en placeholder för att kunna styla den sektionen och inlärningsmaterial på hur en sådan funktion kunde se ut. Därefter så byggde jag en egen [projectLoader.js] med AI som bollplank istället för facit,  bland annat för att få hjälp med strukturering av koden och felsökning av hovringslogiken ("mouseenter"/"mouseleave") samt hur man sätter upp moduler på ett snyggt sätt.

Exempel 2: 
1. Jag bad AI att styla offert formuläret.
2. Jag fick ett formulär som såg professionellt ut.
3. Jag gjorde lite mindre designändringar för att formuläret skulle matcha temat på resten av hemsidan.

## Tekniska val (VG)
Jag valde att strukturera om [projectLoader.js] med hjälp av **ES-moduler ("import"/"export")**.\
Istället för att duplicera koden för att hämta projektdata ("fetch") på flera ställen, bröt jag ut datahämtningen till en egen gemensam funktion [projectService.js].\
Detta gjorde jag för att följa **Don't Repeat Yourself-principen**, vilket gör att hemsidan blir mer modulär och kan byggas ut på ett bättre sätt om hemsidan skulle växa i framtiden.

## Bedömning av AI-innehåll (VG)
Genom att läsa genom materialet som genererades och förstå vad det var jag hade fått, samt om det uppfyllde bilden av vad jag hade tänkt mig från början. 





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



