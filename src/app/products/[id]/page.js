import { BASE_URL } from "@/utils/contrain";

export async function generateMetadata({params}){
    const product = await fetchProductById(params.id);
    return{
        title:product.title,
        description:product.description,
        thumnail:product.images,
        metadataBase: new URL('https://istad.co'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images:product.images,
    title:product.title,
    description:product.description
  },
    }

}
export default async function Product({params}){
    const {id} = params
    const product=await fetchProductById(id)
    return(
    <section className="mt-4 container">

      <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading fw-normal lh-1">{product.title}</h2>
        <p class="lead">{product.description}</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"  role="img" 
           src={product.images} alt={product.title}
           />
     
      </div>
    </div>
        </section>
    )
}

export async function fetchProductById(id){
  const resp= await fetch(`${BASE_URL}products/${id}`,{cache:"no-store"})
  return resp.json()
}