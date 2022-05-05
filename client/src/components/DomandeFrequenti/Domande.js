import flowChartCovid from "../../assets/isolamento-flowchart-FIMMG-2022-covid.jpg";

const DOMANDE = [
  {
    title: "Devo prenotare l'appuntamento in studio?",
    answer: ` Si. Invia la richiesta tramite mail lasciando il contatto telefonico o tramite messaggio whatsapp. \n 
    La durata massima di ogni visita per paziente e' di 30 minuti. \n
    Durante il primo colloquio verrà creata la cartella clinica elettronica. Al fine di essere il più dettagliata possibile,
    si prega di inoltrare in formato PDF tutti i documenti medici ed eventualmente portarli con se al colloquio. \n
    NB: Visto il momento pandemico si raccomanda l'accesso in ambulatorio solo se strettamente necessario (es. visita medica, rilascio di certificazioni etc.). Si ricorda inoltre
    che se presenti sintomi quali febbre, tosse e 'Covid-correlati' sara' necessario prima della visita effettuare la consulenza telefonica ed eventuale tampone naso-faringeo(rapido o molecolare).
    `,
  },

  {
    title:
      "Dove inoltrare la richiesta di ricette per terapie croniche, referti medici e certificati di malattia?",
    answer: `Tutte le richieste vanno effettuate via mail. Le ricette delle terapie croniche verranno evase entro le 24-48h dalla ricezione.
     Al fine di garantire una maggiore privacy, i referti di eventuali esami ed accertamenti dovranno esserre mandati via mail (e NON tramite Whatsapp).
      Il telefono verra' riservato per le consulenze mediche e le richieste urgenti. `,
  },
  {
    title:
      "Quando bisogna contattare la guardia medica e non il medico di famiglia?",
    answer: `Il medico di famiglia e la guardia medica rientrano nella stessa categoria definita "continuita' assistenziale". Cio' vuol dire che negli orari notturni dalle 20:00 alle 08:00, nei weekend, nei giorni pre-festivi (se lo studio ha orario pomeridiano) e nei giorni festivi sara' possibile contattare il medico di guardia medica piu' vicino alla propria residenza.
    
    Tra i compiti della guardia medica : visita, rilascio certificato di malattia, prescrizione farmaci indifferibili, inizio isolamento in caso di positivita' al covid. 
     
     NB: La guardia medica non puo' rilasciare prescrizione di esami ematochimici e di diagnostica strumentale. `,
  },

  // {
  //   title: "Quanto si paga un certificato?",
  //   answer: ` Sana e buona costituzione 35 euro.
  // `,
  // },
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

  {
    title: "Quando posso richiedere una visita domiciliare?",
    answer: `Le visite a domicilio vanno sempre richieste al medico e non alla segretaria. Vengono effettuate:
  - ai pazienti non trasportabili o le cui condizioni cliniche sono tali da non potersi recare in studio
  - ai pazienti in assistenza domiciliare programmata (ADP) o integrata (ADI)
  - ai pazienti che non possono superare le barriere architettoniche dello studio
  
  Si raccomanda di richiedere visite domiciliari solo se strettamente necessario: il tempo per effettuare una visita domiciliare è quello impiegato per visitare 3-4 pazienti in studio, quindi le visite a domicilio sono molto onerose per il medico, che ha anche diversi pazienti non trasportabili, invalidi o con gravi problemi di salute, da controllare periodicamente in modo programmato. 

  NB: Si ricorda che il medico di medicina generale non e' un medico di Emergenza e Urgenza. Pertanto in situazioni critiche non esitate a chiamare il 118!
  `,
  },
  {
    title: "Quali Vaccinazioni sono disponibili? Come posso prenotarmi?",
    answer: `Vaccino anti influenzale, vaccino anti pneumococco, vaccino anti herpes zoster, vaccino anti covid-19.
     Per prenotare inviare la richiesta via mail o telefonicamente e verrete ricontattati per programmare insieme giorno e orario.
  `,
  },
  {
    title: "Quali certificati posso richiedere?",
    answer: `Certificati a pagamento e non...`,
  },
  {
    title: "Ho dubbi inerente l'isolamento da COVID. Cosa faccio?",
    answer: `Le normative COVID sono in continua evoluzione. Di seguito il flow chart della Federazione Italiana Medici di Medicina Generale spiega il processo di isolamento.`,
    src: flowChartCovid,
    alt: "FIMMG covid flow chart",
  },
  {
    title: "Come posso richiedere il greenpass?",
    answer: (
      <p>
        Per il rilascio della certificazione verde (Green pass) e' stato creato
        un padiglione dedicato presso la Fiera del Mediterraneo. Per
        prenotazione ed ulteriori informazioni consultare il seguente &nbsp;
        <a href="https://fiera.asppalermo.org/site/greenpass-index">link</a>
      </p>
    ),
  },
];

export default DOMANDE;
