import React from 'react';
import {useRouter} from "next/router";

function ClientProjectsPage() {
    const router = useRouter();
    console.log(router.query)

    function loadProjectHandler () {
        //this is how to navigate programmatically. can also use an object like with href
        router.push('/clients/max/projecta');
    }
    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}

export default ClientProjectsPage;