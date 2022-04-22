import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, getTotal, increment, removeItem } from '../../redux/cartSlice';

const Cart = () => {


    const dispatch= useDispatch()
    const { cart, cartTotal } = useSelector((state) => state.cart)

    

    useEffect(() => {
        if (cart.length > 0) {
            dispatch(getTotal())
        }
    }, [cart, dispatch])
    return (
        <div>
            
            

           <div className="h-100" style={{backgroundColor: '#eee'}}>
                <div className="container h-100 py-5">
                   <div className="row d-flex justify-content-around align-items-center h-100">
                   {  cart.length === 0 ? "No Products added in cart" :
                    cart.map((item) =>{
                    
                  return <><div className="col-10">
                            <div className="card rounded-3 mb-4">
                              <div className="card-body p-4">
                                <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-2 col-lg-2 col-xl-2">
                  <span>Product Image</span>
                <img src={item?.img}
                  className="img-fluid rounded-3" alt="organic Food"/>
              </div>
              <div className="col-md-1 col-lg-2 col-xl-2">
                <span>Title</span>
                <p className="lead fw-normal mb-2">{item?.title}</p>
                
              </div>
              
              <div className="col-md-2 col-lg-2 col-xl-2 d-flex">
                
                <button className="btn btn-link px-2 cart-btn"
                 onClick={() => dispatch(decrement(item))}>
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" value={item.quantity} type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2 cart-btn"
                 onClick={() => dispatch(increment(item))}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 d-flex justify-content-center align-items-center">
                <div>
                <span>Unit Price</span>
                <h5 className="mb-0">${item.price}</h5>
                </div>
                <div>
                <span>Total Price</span>
              <h5 className="mb-0">
                                {" "}
                                ${item.price * item.quantity}
                              </h5>
                </div>
              </div>
              
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={() => dispatch(removeItem(item))} type="submit" className="text-danger"><i className="fas fa-trash fa-lg"></i></button>
              </div>
            </div>
          </div>
                                </div>
                     
                      </div>
                      
                      </>


                    })}
                     
                     <hr />
                     <div className='fs-1'> Grand Total :  ${cartTotal}</div>
                     </div>
                    
                    
                 
                    </div>
                </div>
                
            
        </div>
    );
};

export default Cart;