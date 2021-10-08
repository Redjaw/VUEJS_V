import { createI18n } from "vue-i18n"

const messages = {
  it: {
    message: {
          dataPartita: "Data Partita",
          selectMatch: "Nessuna partita selezionata",
          giocatore: "Giocatore",
          notePartita: "Note",
          update: "Aggiorna",
        save: "Salva"
    }
  },
  en: {
    message: {
        dataPartita: "Match Date",
          selectMatch: "No Match Selected",
          giocatore: "Player",
          notePartita: "Notes",
          update: "Update",
        save: "Save"
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'it', 
  messages, 
})


export default i18n