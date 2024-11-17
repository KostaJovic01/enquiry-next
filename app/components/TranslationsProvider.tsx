'use client';
import { createInstance } from "i18next";
import initTranslations from "@/app/i18n";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

type Props = {
    children: ReactNode,
    locale: string,
    namespaces: string[],
    resources: Record<string, unknown>
};
const TranslationsProvider = (props: Props) => {
    const i18n = createInstance();
    initTranslations(props.locale, props.namespaces, i18n, props.resources);
    return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};
export default TranslationsProvider;