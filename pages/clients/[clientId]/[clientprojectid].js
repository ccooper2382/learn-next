import React from 'react';
import {useRouter} from "next/router";

function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router.query);
    return(
    <div>
        <h1>Specific Client Project</h1>
    </div>
)
;
}

export default SelectedClientProjectPage;