// Note: User component...!

import React from 'react';
// import { useRouter } from 'next/router';

// Note: getStaticPaths...!
export const getStaticPaths = async () => {

    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(apiUrl);
    let dataInJSON = await response?.json();

    const paths = dataInJSON.map((item) => {
        return {
            params: {
                userno: item?.id?.toString()
            }
        };
    });

    return {
        paths,
        fallback: false
    };
};

// Note: getStaticProps...!
export const getStaticProps = async (context) => {

    let uid = context?.params?.userno;
    let apiUrl = `https://jsonplaceholder.typicode.com/users/${uid}`;

    let response = await fetch(apiUrl);
    let dataInJSON = await response?.json();

    return {
        props: {
            data: dataInJSON
        }
    };
};

const User = ({ data }) => {
    console.log("Static props: ", data);

    // Note: Handeling routing...!
    // const router = useRouter();
    // const userNo = router.query.userno;

    return (
        <>
            <h2 style={{ color: "white" }}> User id: {data?.id} </h2>
            <h3 style={{ color: "white" }}>
                {`Hi, My name is ${data?.name}, I worked in ${data?.company?.name}.`}
            </h3>
        </>
    );
};

export default User;