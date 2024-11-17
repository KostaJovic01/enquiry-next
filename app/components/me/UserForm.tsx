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


type Props = {
    user:User
};
const UserForm = (props: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user] = useState<User>(props.user)
    const {t} = useTranslation(['me', 'common']);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSchemaData>({
        resolver: zodResolver(UserSchema),
    });
    return (
        <div>
            <RoundButton onClick={() => setIsModalOpen(true)}>
                <PencilIcon width={"24"} height={"24"} />
            </RoundButton>
            <Modal open={isModalOpen} setOpen={setIsModalOpen}>
                <form className={"flex flex-col space-y-5"} onSubmit={handleSubmit((data)=>{console.table(data)}, (errors)=>{console.table(errors)})}>
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
                    <Dropdown
                        label={"Language"}
                        optionSelected={user.language}
                        options={["de" , "en",'it','ms']}
                        register={register}
                    />
                    <div className="mt-5 flex flex-row justify-end">
                        <button
                            type="submit"
                            className="w-mas inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {t('common:save')}
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};
export default UserForm;
