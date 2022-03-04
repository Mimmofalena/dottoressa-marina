import flowChartCovid from "../../assets/isolamento-flowchart-FIMMG-2022-covid.jpg";

const DOMANDE = [
  {
    title: "Devo prenotare l'appuntamento in studio?",
    answer: ` Si. Invia la richiesta tramite mail lasciando il contatto telefonico. \n 
    Quanto dura la visita? Massimo 30' a paziente \n
    Il primo colloquio: Durante il primo colloquio verrà creata la cartella elettronica. Al fine di essere il più dettagliata possibile,
    si prega di inoltrare in formato PDF tutti i documenti medici ed eventualmente portarli con se al colloqui. \n
    NB: Visto il momento pandemico si raccomanda l'accesso in ambulatorio solo se strettamente necessario (es. visita medica). Si ricorda inoltre
    che qualora fossero presenti sintomi quali febbre, tosse e 'Covid-correlati' è necessaria la consulenza telefonica prima della visita e tampone antigenico
    `,
  },

  {
    title: "Ho dubbi inerente l'isolamento da COVID. Cosa faccio?",
    answer: `Le normative COVID sono in continua evoluzione. Di seguito il flow chart della Federazione Italiana Medici di Medicina Generale spiega il processo di isolamento.`,
    src: flowChartCovid,
    alt: "FIMMG covid flow chart",
  },
  {
    title: "Posso vaccinarmi dal mio medico di medicina generale?",
    answer: "...",
  },
  {
    title: "Green pass",
    answer: "...",
  },
  //   {
  //     title: "Cosa fare in caso di emergenza?",
  //     answer: ` In situazioni di emergenza si ricorda la possibilità di chiamare il 118 che invierà un’ambulanza per il trasporto al pronto soccorso. Alcuni esempi possono essere crisi respiratorie o dolore toracico`,
  //   },
  //   {
  //     title: "Quanto si paga un certificato?",
  //     answer: ` Sana e buona costituzione 35 euro.
  // `,
  //   },
  //   {
  //     title:
  //       "Avere l’assistenza sanitaria temporanea quando si è momentaneamente domiciliati presso una Regione diversa da quella di residenza?",
  //     answer: `Il cittadino può scegliere il Medico di Medicina Generale e/o Pediatra di Libera Scelta pur essendo residente in altra Regione purché la durata del trasferimento sia pari o superiore ai tre mesi e sia riconducibile ad una delle seguenti motivazioni:
  // >> lavoro
  // >> salute
  // >> studio

  // L'iscrizione temporanea (che può avere una durata dai 3 mesi ad 1 anno, rinnovabile) a favore dei cittadini domiciliati oltre che nei casi appena riportati può essere estesa:
  // • Ai familiari a carico del richiedente
  // • Ai minori in affido o in attesa di adozione
  // • agli ospiti di comunità protette
  // • ai cittadini a partire dal compimento del 75° anno di età

  // La richiesta va presentata al Servizio Medicina di Base del Distretto Sanitario competente per il Comune dove si è temporaneamente domiciliati.

  // Al momento della richiesta l’utente dovrà presentare la seguente documentazione:
  // a) autocertificazione di residenza temporanea
  // b) tessera sanitaria
  // c) documento riconoscimento
  // d) tesserino / libretto del medico curante
  // e) secondo la motivazione della scelta temporanea:
  // > dichiarazione datore di lavoro
  // > certificazione del Medico di accettazione presa in carico del paziente per motivi di salute.
  // > dichiarazione Università, Scuola, Convitto etc.

  // Riferimenti normativi: Circolare del Ministero della Sanità 11 maggio 1984, n. 1000.116`,
  //   },
  //   {
  //     title: "Quali Vaccinazioni sono disponibili? Come posso prenotarmi?",
  //     answer: `Eseguo sia vaccinazioni COVID-19 e vaccino anti influenzale. Per effettuare i vaccini bisogna prenotarsi al fine di
  //     evitare sprechi. Chiama in studio, invia una mail o contattami via Whatsapp.
  // `,
  //   },
  //   {
  //     title: "Quando posso richiedere una visita domiciliare?",
  //     answer: `Le visite a domicilio vanno sempre richieste al medico e non alla segretaria. Vengono effettuate
  // ai pazienti non trasportabili o che stanno troppo male per venire in studio
  // ai pazienti in assistenza domiciliare programmata (ADP) o integrata (ADI)
  // ai pazienti che non possono superare le barriere architettoniche dello studio.
  // Le visite domiciliari debbono essere richieste entro le ore 10 del mattino, altrimenti possono essere fatte il giorno successivo.

  // Le visite urgenti (a giudizio del medico) sono effettuate nel più breve tempo possibile dopo il recepimento della chiamata.

  // Si raccomanda di richiedere visite domiciliari solo se strettamente necessario: il tempo per effettuare una visita domiciliare è quello impiegato per visitare 3-4 pazienti in studio, quindi le visite a domicilio sono molto onerose per il medico, che ha anche diversi pazienti non trasportabili, invalidi o con gravi problemi di salute,
  // da controllare periodicamente in modo programmato.
  // `,
  //   },
];

export default DOMANDE;
