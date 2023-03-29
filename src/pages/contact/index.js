// Note: Contact component...!

import Link from "next/link";

// Note: Fethcing data from an api...! (Note: Testing purpose only)

// NOTE: When and why to use getStaticProps...!
/*
1: The data required to render the page is available at build time ahead of a user’s request.
*/

export const getStaticProps = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(apiUrl);
    let dataInJSON = await response?.json();

    return {
        props: {
            data: dataInJSON
        }
    };
};

const Contact = ({ data }) => {
    console.log("Static props: ", data);

    return (
        <>
            <h1> Welcome to Contact Screen! </h1>

            {
                (data && data.length > 0)
                    ?
                    (
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h3 style={{ color: "white" }}>
                                        {`Hi, My name is ${item?.name}, I worked in ${item?.company?.name}.`}
                                    </h3>

                                    <Link href={`/contact/${item?.id}`}>
                                        view profile
                                    </Link>
                                </div>
                            );
                        })
                    )
                    :
                    (null)
            }
        </>
    );
};

export default Contact;