// import { getStaticProps } from "next/dist/build/templates/pages";

import User from "../components/users";

function userList ({ users }){
    return(
        <>
        <h1>This is the User's List!:</h1>
          {
            users.map(user=>{
                return (
                    <div key={user.id}>
                       <User user={user}/>
                    </div>
                )
                })
          }
        </>
    )
}
export default userList;

export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log("Data:", data)

    return {
        props : {
            users : data
        },
    }
}