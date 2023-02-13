import { resolve } from "path";
import { useQuery, useMutation } from "@tanstack/react-query";


const POSTS=[
    { id:1, title: "Post 1"},
    { id:2, title: "Post 2"},

]

export default function React_query_example(){
    const postsQuery = useQuery({
        queryKey:["posts"],
        queryFn: ()=> Promise.reject("Error message")
    })

    if(postsQuery.isLoading) return <h2>Loading...</h2>
    if(postsQuery.isError) return <pre>{JSON.stringify(postsQuery.error)}</pre>
    
    return(
        <>
            <h2>This is React Query!</h2>
        </>
    );

    function wait(duration: number | undefined) {
        return new Promise(resolve => setTimeout(resolve, duration))
    }
}

