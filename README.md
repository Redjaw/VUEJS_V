# VUEJS_V

## Esercitazione Finale: L'applicazione per gestire il tuo mondo del Padel

Attraverso l'utilizzo di tutte le cose che avete visto dovrete sviluppare un'applicazione per gestire le partite di padel, per arbitri e giocatori.

L'applicazione dovrà:

-   Mostrare una pagina iniziale con la lista filtrabile degli incontri già avvenuti caricandoli dal servizio api/matches
-   Mostrare una pagina di dettaglio degli incontri che indichi data, giocatori, punteggio.
-   Se si è un giocatore i campi non saranno editabili, se si è uno dei giocatori indicati allora si vedrà anche il campo note, accessibile solo ai giocatori della partita.
-   Se si è un arbitro si potrà modificare tutti i campi, ovviamente prima di salvarli nella post api/matches?id=<IDPARTITA> dovranno essere validati.
-   Gli arbitri inoltre, vedranno nella lista il bottone "nuova partita" che permetterà di andare in una pagina che mostrerà il form di informazioni più due bottoni per gestire la partita: uno per i punti segnati dal giocatore 1 e uno per i punti del giocatore 2.
-   Le regole del padel sono semplici: i punti sono 0/15/30/40/game. Un set è vinto da chi per primo arriva a 6 games. La partita è vinta da chi per primo arriva a 2 set su 3.
-   Extra: sul 40 pari si va ai vantaggi fino a quando un giocatore non supera l'avversario di 2 punti.
