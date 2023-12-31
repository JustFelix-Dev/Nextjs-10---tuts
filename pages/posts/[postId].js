function eachPost({post}){
   return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
   )
}

export default eachPost;

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(post=>{
        return{
            params:{
                postId : `${post.id}`
            }
        }
    })

    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const { params } = context;
    const res = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json()

    return {
         props:{
            post:data,
         },
    }
}