type Props = {
    user: {
        name: string;
        email: string;
    }
}

export default function ProfileCard(props:Props) {
    const {email, name} = props.user;
    return (
        <div className="bg-[#0f172a] h-1/2 flex items-center justify-center">
            <div className="text-center flex flex-col sm:flex-row items-center sm:space-x-10">
                <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8 text-gray-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11c2.485 0 4.5-2.015 4.5-4.5S14.485 2 12 2 7.5 4.015 7.5 6.5 9.515 11 12 11zm0 2c-3.038 0-9 1.522-9 4.5V20h18v-2.5c0-2.978-5.962-4.5-9-4.5z"
                        />
                    </svg>
                </div>
                <div className='flex flex-col items-center sm:items-start'>
                    <h1 className="text-white text-sm font-medium sm:text-5xl mt-4 sm:font-semibold">{name}</h1>
                    <p className=" text-white block text-sm font-medium">{email}</p>
                </div>
            </div>
        </div>
    );
}