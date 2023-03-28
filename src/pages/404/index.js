// Note: Custom404 component...!

import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {

    // Note: Handeling navigation here...!
    const router = useRouter();

    // Note: Mounted hook...!
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    }, []);

    return (
        <>
            <h1> 404 - The page you are looking for is not found! 😢 </h1>
        </>
    );
};

export default Custom404;