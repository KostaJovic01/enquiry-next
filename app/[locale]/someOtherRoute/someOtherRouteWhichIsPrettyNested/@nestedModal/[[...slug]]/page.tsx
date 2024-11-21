'use client'

import MultiMedia from "@/app/components/mm/MultiMedia";

const Page = () => {
    return (
        <MultiMedia currentEntryPoint={'someOtherRoute/someOtherRouteWhichIsPrettyNested'} />
    );
};
export default Page;
