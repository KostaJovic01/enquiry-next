'use client'
import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { UserSchemaData } from "@/zod/UserSchema";

type Props = {
    type: "button" | "submit" | "reset";
    label: string;
    name: "givenName" | "familyName" | "email" | "language" | "languages";
    register: UseFormRegister<UserSchemaData>;
    error: FieldError | undefined;
    onClick?: () => void;
};

const FormButton = (props: Props) => {
    const { type, label, name, register, error } = props;
    return (
        <div className={"flex w-full flex-col space-y-1"}>
            <label className="block text-sm/6 font-medium text-gray-900">
                {label}
            </label>
            <button
                type={type}
                {...register(name)}
                className="block flex-1 rounded-md bg-blue-500 py-1.5 pl-1 text-white ring-2 ring-gray-300 focus:ring-0 sm:text-sm/6"
            >
                {label}
            </button>
            {error && <span className="text-sm text-red-500">{error.message}</span>}
        </div>
    );
};

export default FormButton;