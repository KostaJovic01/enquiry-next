'use client'
import RoundButton from "@/app/components/RoundButton";
import Modal from "@/app/components/Modal";
import FormInput from "@/app/components/FormInput";
import Dropdown from "@/app/components/Dropdown";
import React, {useState} from "react";
import {PencilIcon} from "@heroicons/react/24/outline";
import {useForm} from "react-hook-form";
import {User} from "@/types/User";
import {UserSchema, UserSchemaData} from "@/zod/UserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
import Button from "../common/Button";
import DiscardModal from "../common/DiscardModal";


type Props = {
    user:User
};
const UserForm = (props: Props) => {
    const [user] = useState<User>(props.user)
    const {t} = useTranslation(['me', 'common']);
    const {
        register,
        handleSubmit,
        formState,
        reset,
        setValue,
        getValues,
        trigger
    } = useForm<UserSchemaData>({
        resolver: zodResolver(UserSchema),
    });
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const { isDirty, errors } = formState;
    const closeModal = (close: boolean) => {
        //TODO: implement a service which renders the confirmation modal use the createPortal method
        if (isDirty) {setIsConfirmationOpen(true)}
        else setIsModalOpen(close)
    } 
    const discard = () =>{
        reset()
        setIsConfirmationOpen(false)
        setIsModalOpen(false)
    }
    const justClose = () =>{
        setIsConfirmationOpen(false)
        setIsModalOpen(false)
    }
    const addLanguage = (language: string) => {
        const currentLanguages = getValues("languages") || [];
        
        // Check if the language is already in the array
        if (!currentLanguages.includes(language)) {
            // Update the languages array
            setValue("languages", [...currentLanguages, language], { shouldDirty: true }); // Mark as dirty
        }
        // Trigger validation and mark field as dirty
        trigger("languages");
        
        // Log current languages for debugging
        console.log(getValues("languages"));
    };
    return (
        <div id="modal-root" >
            <RoundButton onClick={() => setIsModalOpen(true)}>
                <PencilIcon width={"24"} height={"24"} />
            </RoundButton>
            <Modal open={isModalOpen} setOpen={closeModal}>
                <form className={"flex flex-col space-y-5"} 
                onSubmit={handleSubmit(
                    (data)=>{console.table(data)}, 
                    (errors)=>{console.table(errors)})}>
                    <span className={"text-xl"}>{`${user.givenName} ${user.familyName}`}</span>
                    <FormInput
                        type={"email"}
                        placeholder={t('email_address')}
                        register={register}
                        name={"email"}
                        error={errors.email}
                    />
                    <FormInput
                        type={"text"}
                        placeholder={t('name')}
                        register={register}
                        name={"givenName"}
                        error={errors.givenName}
                    />
                    <FormInput
                        type={"text"}
                        placeholder={t('last_name')}
                        register={register}
                        name={"familyName"}
                        error={errors.familyName}
                    />
                    <div className="flex flex-row space-x-2 justify-center">
                        {["de", "en", "it", "ms"].map((lang) => (
                            <Button key={lang} label={lang} onClick={() => addLanguage(lang)} />
                        ))}
                    </div>
                    <Dropdown
                        label={"Language"}
                        optionSelected={user.language}
                        options={["de" , "en",'it','ms']}
                        register={register}
                    />
                    <div className="mt-5 flex flex-row justify-end">
                        <Button label={t('common:save')} type='submit' />
                    </div>
                </form>
            </Modal>
            <DiscardModal isOpen={isConfirmationOpen} setIsOpen={setIsConfirmationOpen} onDiscard={discard} onClose={justClose} />
        </div>
    );
};
export default UserForm;
