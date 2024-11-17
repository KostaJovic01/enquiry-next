type I18nConfig = {
    locales: string[];
    defaultLocale: string;
}
const i18nConfig:I18nConfig = {
    locales: ['en', 'it', 'de', 'ms'],
    defaultLocale: 'en'
};

export default i18nConfig;