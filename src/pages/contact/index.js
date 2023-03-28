// Note: Contact component...!

// Note: Fethcing data from an api...! (Note: Testing purpose only)

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
        </>
    );
};

export default Contact;