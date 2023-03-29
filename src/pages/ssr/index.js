// Note: LearningServerSideRendering component...!

import React from 'react';

// Note: server side rending code...!
export const getServerSideProps = async () => {
    // console.log('I am runing in server!');

    let apiUrl = "https://dummyjson.com/quotes";

    let response = await fetch(apiUrl);
    let dataInJSON = await response?.json();

    return {
        props: {
            data: dataInJSON
        }
    };
};

const LearningServerSideRendering = (props) => {
    console.log('Props of SSR component: ', props);

    return (
        <>
            <h1> Learning Server Side Rendering in Next JS! </h1>
        </>
    );
};

export default LearningServerSideRendering;