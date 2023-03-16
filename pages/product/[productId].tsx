import { useRouter } from "next/router";
import { userAgent } from "next/server";

function ProductID(){
    const router = useRouter()
    const ID = router.query.productId;
    return (
        <>
            <h1>Details about product {ID}</h1>
        </>
    )
}

export default ProductID