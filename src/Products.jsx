import React from 'react'
import './Products.css';
import Product from './compount/produc/product.jsx';
export default function Products() {
  const products = [
    {id:1,title:'product one',desc:'this is product one'},
    {id:2,title:'product two',desc:'this is product two'},
    {id:3,title:'product three',desc:'this is product three'},
];
  return (
    <>
      <section className="services-tow" id="Features">
        <div className="">
          <div className="clien-text text-center py-5">
            <h4 className="fs-1">Meet Our Team</h4>
            <p>Who we are</p>
          </div>
          <div className="row">
            {
            products.map((product)=>{
              return <Product {...product} key={product.id}/>
            })
            }
          </div>
        </div>
      </section>
    </>
  );
}
