import { useRouter } from "next/router";
function ReviewId(){
    const router = useRouter()
    const { productId,reviewId} = router.query;
    return <h1>Review for cart -{reviewId} in product-{productId}</h1>
}

export default ReviewId;