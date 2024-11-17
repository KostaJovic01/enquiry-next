import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/TranslationsProvider";
export async function generateStaticParams() {
    const locales = ['en', 'de', 'it', 'ms'];
    return locales.map(locale => ({
            locale: locale
        })
    );
}

export default async function Layout({children, params,}: {children: React.ReactNode, params:  Promise<{ locale: string}>}) {
    const {locale}= await params;
    const { resources} = await initTranslations(locale, ['me','common']);
    return (
        <div className={'text-additive-blue'}>
            <TranslationsProvider locale={locale??'en'} namespaces={['me','common']} resources={resources}>
                {children}
            </TranslationsProvider>
        </div>
    );
}