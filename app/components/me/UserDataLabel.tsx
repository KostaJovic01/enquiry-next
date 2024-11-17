import React from "react";

type Props = {
    label: string;
    value: string;
    icon: React.ReactNode;
};
export default function UserDataLabel(props: Props) {
    const { label, value, icon } = props;
    return (
        <div className="flex items-center gap-2">
            {icon}
            <div>
                <p className="text-sm font-medium text-gray-700">{label}</p>
                <p className="text-base font-semibold">{value}</p>
            </div>
        </div>);
};
