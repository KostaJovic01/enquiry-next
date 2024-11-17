import React from "react";
import ProfileCard from "@/app/components/me/ProfileCard";
import UserInfo from "@/app/components/me/UserInfo";
import UserForm from "@/app/components/me/UserForm";
import {User} from "@/types/User";
export async function generateStaticParams() {
    const locales = ['en', 'de', 'it', 'ms'];
    return locales.map(locale => ({
            locale: locale
        })
    );
}
//Promise<{ [key: string]: string | undefined }>
const Page = async ({params}:{params: Promise<{locale:string}>}) => {
    const apiURL = process.env.BASE_DEV_URL
    const getUser = async () =>{
        try{
            const response = await fetch(`${apiURL}/api/me`, { cache: "force-cache" });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const userData: User  = await response.json()
            return userData
        }
        catch (error){
            console.log('couldnt fetch the user, ERROR: ',error)
        }
    }
    const user = await getUser() as User
    const {locale}= await params;
    return (
        <div className={'relative w-screen h-screen'}>
            <ProfileCard user={{email: user.email, name: user.fullName}}/>
            <UserInfo locale={locale??'en'} user={{email_address: user.email, name:user.fullName, language:user.language}} />
            <UserForm user={user} />
        </div>
    );
};
export default Page;

