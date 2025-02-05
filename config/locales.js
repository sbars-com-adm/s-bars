/**
 * webmanifest   - gatsby-config.js: htmlLang, siteTitle, siteDescription, siteShortName
 * SEO           - SeoBase.jsx:      htmlLang, siteTitle, siteDescription, ogLocale
 * datePublished - PostInfo.jsx:     formatLocale
 * Site Title    - Logo.jsx:         siteShortName
 */
module.exports = {
  uk: {
    default: true,

    htmlLang: 'uk', // uk-ua
    formatLocale: 'uk-UA',
    ogLocale: 'uk_UA',
    name: 'Ukranian',
    shortName: 'Укр',
    localName: 'Український',
    shortLocalName: 'Укр',

    dateFormat: 'dd.MM.yyyy',

    siteTitle: 'КОМПАНІЯ «СНІЖНИЙ БАРС»',
    siteDescription:
      'Мы предлагаем широкий спектр услуг в сфере промальпа, заказывайте строительные работы на высоте от компании Снежный Барс.',
    siteShortName: 'СНІЖНИЙ БАРС',
  },

  ru: {
    htmlLang: 'ru', // ru-UA
    formatLocale: 'ru-UA',
    ogLocale: 'ru_UA',
    name: 'Russian',
    shortName: 'Рус',
    localName: 'Русский',
    shortLocalName: 'Рус',

    dateFormat: 'dd.MM.yyyy',

    siteTitle: 'КОМПАНИЯ «СНЕЖНЫЙ БАРС»',
    siteDescription:
      'Мы предлагаем широкий спектр услуг в сфере промальпа, заказывайте строительные работы на высоте от компании Снежный Барс.',
    siteShortName: 'СНЕЖНЫЙ БАРС',
  },
};
