import { useRouter } from 'next/router'
function ProductId (){
            const router = useRouter()
            const productId = router.query.productId
    return <h1>Details about my Product - {productId}</h1>
}

export default ProductId;