'use client'

import MultiMedia from "@/app/components/mm/MultiMedia";

const Page = () => {
    return (
        <MultiMedia currentEntryPoint={'someOtherNestedRoute/someOtherRouteWhichIsPrettyNested'} />
    );
};
export default Page;
