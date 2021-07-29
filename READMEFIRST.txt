SPIEGAZIONE ELABORATO:

Non avendo mai affrontato il richiamo di un file .dat utilizzandolo come Database, ho pensato di sfruttare lo stato
dei Class Component in ReactJS, utilizzandolo come fosse un Array di oggetti, piuttosto che richiamare un file esterno.
In alternativa a questo procedimento messo a disposizione di ReactJS, avrei comunque creato un file JSON in cui riportare
i dati messi a disposizione per effettuare la chiamata.

Procedimento:
1. ho creato un'app in ReactJS
2. nel componente app principale ho inserito la Navbar e il tag che va a richiamare il componente teams.js 
3. nel componente teams.js ho creato un array di oggetti che ho poi ciclato tramite il .map di js per stamparli in una tabella.
Questo procedimento, a mio avviso, è utile nel momento in cui i dati dovessero essere modificati (aggiunti, rimossi, o cambiati), 
essendo semplice da riutilizzare.