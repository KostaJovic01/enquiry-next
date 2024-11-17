import React from "react";
import initTranslations from "@/app/i18n";
import UserDataLabel from "@/app/components/me/UserDataLabel";
import { UserIcon , AtSymbolIcon, LanguageIcon  } from "@heroicons/react/24/outline";
import LanguageChanger from "@/app/components/LanguageChanger";


type Props = {
    locale: string
    user: {
        email_address: string
        name: string
        language: string
    }
}
export default async function UserInfo(props:Props) {
    const {name, email_address, language} = props.user;
    const {t} = await initTranslations(props.locale, ['me']);
    return (
        <div className=" h-1/2 w-full flex justify-center px-10 pt-14">
            <div className='flex flex-col h-full max-w-[800px] w-full p-6  space-y-8  items-start'>
                <UserDataLabel label={t('name')} value={name} icon={<UserIcon className={'w-6 h-6'}/>}/>
                <UserDataLabel label={t('email_address')} value={email_address} icon={<AtSymbolIcon className={'w-6 h-6'}/>}/>
                <UserDataLabel label={t('language')} value={language} icon={<LanguageIcon className={'w-6 h-6'}/>}/>
                <LanguageChanger/>
            </div>
        </div>
    );
}