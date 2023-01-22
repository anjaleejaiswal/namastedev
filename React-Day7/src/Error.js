import { useRouteError } from "react-router-dom";

const Error = () => {
    const {status , statusText} = useRouteError();
    return (
        <>
            <p>Something went wrong!!!</p>
            <p>{status + " " + statusText}</p>
        </>
    )
}

export default Error;