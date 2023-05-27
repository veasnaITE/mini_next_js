import { ProductCard, Profile } from "@/components/ProductCard";
import { BASE_URL } from "@/utils/contrain";


export const metadata={
title:'ISTAD Institute of Science and Technology Advanced Development',
description:'ISTAD is a noteworthy science and technology institute in Cambodia. ISTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.'
}
export default async function Products() {
  const products = await fetchProducts();
  const users = await fetchUsers();
  const category = await fetchCategory();
  return (
    <>
      <section>
        {category.map((catego) => (
          <div
            class="btn-group my-3 mx-1"
            role="group"
            aria-label="Basic radio toggle button group"
            
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id={catego.id}
              autocomplete="off"
              checked
            />
            <label class="btn btn-outline-primary" for={catego.id}>
              {catego.name}
            </label>
          </div>
        ))}
      </section>
      <section >
        <h1 className="text-center text-primary">Our Products</h1>
        <div className="row gx-1 d-flex justify-content-center ">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.images}
              description={product.description}
              id={product.id}
            />
          ))}
        </div>
      </section>
      <section>
      <h1 className="text-center text-primary">Our Team</h1>
        <div className="row g-1 d-flex justify-content-center">
          {users.map((user) => (
            <Profile key={user.id} name={user.name} avatar={user.avatar} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function fetchProducts() {
  const resp = await fetch(`${BASE_URL}products/?offset=0&limit=20`, {
    cache: "no-store",
  });
  return resp.json();
}
export async function fetchUsers() {
  const res = await fetch(`${BASE_URL}users?limit=8`, { cache: "no-store" });
  return res.json();
}
export async function fetchCategory() {
  const res = await fetch(`${BASE_URL}categories/`, { cache: "no-store" });
  return res.json();
}
