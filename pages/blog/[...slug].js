//the name of the file isnt important only the ...

import React from 'react';
import {useRouter} from "next/router";

function BlogPostsPage()
{
    const router = useRouter();
    console.log(router.query);
    return (

        <div>
            <h1>The Blog Posts</h1>
        </div>
    );
}

export default BlogPostsPage;