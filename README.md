# VUEJS_V

## Esercitazione Finale: L'applicazione per gestire il tuo mondo del Padel

Attraverso l'utilizzo di tutte le cose che avete visto dovrete sviluppare un'applicazione per gestire le partite di padel, per arbitri e giocatori.

L'applicazione dovrà:

-   Mostrare una pagina iniziale con la lista filtrabile degli incontri già avvenuti caricandoli dal servizio `api/matches`
-   Mostrare una pagina di dettaglio degli incontri che indichi data (formattata!), giocatori, punteggio. (sarebbe carino mostrare un'iconcina sul team vincente)
-   Gli iscritti all'applicazione sono identificati tramite un id... Solo la chiamata `api/players` contiene anche i nomi e il ruolo!
-   Se si è un giocatore i campi di input non saranno editabili, se si è uno dei giocatori indicati allora si vedrà anche il campo note, accessibile solo ai giocatori della partita.
-   Se si è un arbitro si potrà modificare tutti i campi, ovviamente prima di salvarli nella post `api/matches?id=<IDPARTITA>` dovranno essere validati.
-   Gli arbitri inoltre, vedranno nella lista il bottone "nuova partita" che permetterà di andare in una pagina che mostrerà il form di informazioni più due bottoni per gestire la partita: uno per i punti segnati dal team 1 e uno per i punti del team 2.
-   Le regole del padel sono semplici: i punti sono 0/15/30/40/game. Un set è vinto da chi per primo arriva a 6 games. La partita è vinta dalla squadra che per prima arriva a 2 set su 3.
-   Extra: sul 40 pari si va ai vantaggi fino a quando un team non supera l'avversario di 2 punti.
-   Extra: esiste una funzionalità in sviluppo che si chiama condividi, accessibile con una chiamata al servizio `api/share`. Purtroppo non funziona, sarebbe bello se ci fosse un toast message a ricordarlo all'utente quando ci clicca.
-   Extra: stiamo aprendo l'applicazione all'utilizzo da parte di un pubblico inglese. Sarebbe bello se da qualche parte ci fosse un'iconcina che permettesse di cambiare lingua.
