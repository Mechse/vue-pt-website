import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export default ({
  app,
  store
}) => {
  app.i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    silentTranslationWarn: true,
    messages: {
      'de': {
        "global": {
          "contact-btn": "Kontakt",
        },
        "index": {
          "hero-text": `Airport transfer
          und personalisierte Touren.`,
          "about-us-headline": `Über uns`,
          "about-us-text": `Unsere Firma besteht bereits seit 2004 und kann auf eine lange Erfahrung zurückgreifen.
            Passion Tours möchten jedem die Möglichkeit bieten Sightseeing und Shopping nach ganz individuellen Wünschen zu gestalten. Mit uns erleben Sie einen ganz entspannten Tag das Tempo bestimmen Sie.
            All unsere Touren sind private Touren je nach Personengröße fahren Sie mit einer unserer Mercedes-Limousinen inkl. Avantgardeausstattung.
            Wir bieten außerdem exklusive Airport Transfers zum Fixpreis an.
            Gerne erstellen wir für Sie maßgeschneiderte Touren und Ausflüge zu Ihren Wunschdestinationen.
            `,
          "salzburg-text": `Bei diesem Tagesausflug entführen wir Sie in das wunderschöne Salzburg.
            Sie haben die Möglichkeit einige der beliebtesten Sehenswürdigkeiten wie Mozarts Geburtshaus, Schloss Mirabell und den Salzburger Dom zu besichtigen. `,
          "wien-text": `Entdecken Sie unsere schöne Hauptstadt ganz entspannt in einer Mercedes Limousine und gewinnen Sie so einen tollen Überblick.
            Ganz egal ob Sie mit einer Fahrt über die berühmte Ringstraße oder mit Schloss Schönbrunn starten möchten, wir richten uns nach Ihnen. `,
          "bratislava-text": `Die slowakische Hauptstadt liegt nur eine kurze Fahrt von Wien entfernt.
            Erkunden Sie die nette Innenstadt,
            das Nationaltheater oder den Maximilianbrunnen wir stehen gerne beratend zur Seite und richten uns nach Ihren Wünschen.`,
        }
      },
      'en': {
        "global": {
          "contact-btn": "Contact",
        },
        "index": {
          "hero-text": `Airport transfer
          and customized Tours.`,
          "about-us-headline": `About us`,
          "about-us-text": `Our company exists since 2004 and has many years of experience.
            Passion Tours would like to give everyone the opportunity to arrange sightseeing and shopping according to their individual wishes.With us you will experience a very relaxed day.
            All our tours are private tours depending on the size of the person you drive with one of our Mercedes limousines incl.avant - garde equipment.
            We also offer exclusive airport transfers at a fixed price.
            We are happy to create customized tours and excursions
            for every destination you wish.`,
          "salzburg-text": `On this day trip you will discover the famous music city Salzburg.
            You have the possibility to visit Mozart´s birth house, Mirabell Palace and the Salzburg Cathedral.`,
          "wien-text": `Discover our beautiful capital totally relaxed in a Mercedes limousine and get a great overview.
            No matter if you want to start with a ride on the famous Ringstreet or Schönbrunn Palace,we will adapt your wishes.`,
          "bratislava-text": `The Slovak capital is only a short drive from Vienna. 
            Explore the nice city center,
            the National Theater or the Maximilianbrunnen we are more than happy to adivise you with suggestions.`,
        }
      },
    },
  })
  //app.i18n.locale = 'bn'
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return ` / $ {
                link
              }
              `
    }
    return ` / $ {
                app.i18n.locale
              }
              /${link}`
  }
}
