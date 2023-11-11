  import Link from 'next/link';
  import { useRouter } from 'next/router';

function Product ({productLink = 20}) {
    const router = useRouter();
    
   const handleClick =()=>{
        alert("Working as it should!")
        router.push('/blog')
        
    }
    return<>
     <h1>Welcome to my Product's Page</h1>
     <Link href={`/product/${productLink}`}>Product 1</Link>
     <Link href={`/product/${productLink}`}>Product 2</Link>
     <button onClick={handleClick}>Navigate Here &arr;</button>
     </>
}

export default Product;