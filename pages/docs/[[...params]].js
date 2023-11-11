  import { useRouter } from 'next/router';

function Docs() {
  const router= useRouter()
  const { params =[]} = router.query;
  console.log(params)

  if(params.length == 2){
    return <h1>Docs Page for {params[0]} in {params[1]}</h1>
  }else if (params.length == 1){
    return <h1>Docs Page for {params[0]}</h1>
  }
  return <h1>Welcome to the Docs Page!</h1>
}

export default Docs;