import { useRouter } from "next/router";

function productDetail() {
  const router = useRouter();
  const productId = router.query.profileId;
  console.log(router.query);
  return <h1>detail about project {productId}</h1>;
}
export default productDetail;
