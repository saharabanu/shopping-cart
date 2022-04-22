import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../redux/cartSlice';
import "./Products.css";

const Products = () => {
    const dispatch = useDispatch();
  const { cart, cartTotal } = useSelector((state) => state.cart);
    const [products,setProducts]= useState([]);
    
    useEffect(()=>{
        fetch('/products.json')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            console.log(data)
        })



    },[])


   
    return (
        <div>
            <div id='prducts'>
      <h1 className=' mt-2 text-center title'>Organic Mart & Grocery</h1>

      <div className='products-details mt-3'>
        {products.map((product) => (
          <div className="container" key={product.id}>
          <main className="grid mt-3">
            <article>
              <img
                className="mt-2"
                src={product?.img}
                alt="Organic food"
                style={{ width: "220px", height: "220px" }}
              />
              <div className="text">
                <h3>{product?.pTitle}</h3>
                <p>
                {product?.price}
                  {/* Price{" "}
                  <a href="https://teespring.com/stores/dog-lover-graphic-design">
                    {price}
                  </a> */}
                </p>
                <p className="text-start">{product.desc}</p>
                <button className="btn btn-outline-dark fa-light fa-cart-circle-arrow-down" onClick={() =>
                                        dispatch(
                                          addToCart({
                                            id: product.id,
                                            quantity: 1,
                                            img:product.img,
                                            price: product.price,
                                            title: product.pTitle,
                                          })
                                        )
                                      }>Add To Cart</button>
              </div>
            </article>
          </main>
        </div>
        ))}
      </div>
    </div>




            {/* ----------- */}
            
            {/* <h2 className='text-center'>All Products Here</h2>
            <div className='container'>
                <div className="row g-4">
                   {products?.map(product=><div className="col-md-4" key={product?.id}>
                        <div>
                            <div className="image">
                                <img className='img-fluid' src={product?.img} alt="" />
                            </div>
                            <div>
                                <h3>{product?.pTitle}</h3>
                                <p>{product?.price}</p>
                            </div>
                            <button onClick={() =>
                                        dispatch(
                                          addToCart({
                                            id: product.id,
                                            quantity: 1,
                                            img:product.img,
                                            price: product.price,
                                            title: product.pTitle,
                                          })
                                        )
                                      }>Add To Cart</button>
                        </div>
                    </div>)} 
                    
                   
                </div>

            </div> */}

        </div>
    );
};

export default Products;