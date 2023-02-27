import React from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import { StoreItem } from '../models'
import CartItemComp from './CartItemComp'
import {clearCart} from '../features/cart/cartSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import {toggleCart} from '../features/cart/cartSlice'











const ShoppingCart = () => {

    const cart = useSelector(store => store.cart)
    const products = useSelector(store => store.data.products)

    const dispatch = useDispatch()
    


  return (
      <Offcanvas show={cart.isOpen}  onHide={() => dispatch(toggleCart(false))} placement="end">
          <Offcanvas.Header closeButton >
              <Offcanvas.Title>
                  Cart
              </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <Stack gap={3}>
                  {cart.cartItems.map((item) => (
                      <CartItemComp key={item.id} {...item} />
                  ))}
                  <div className="ms-auto fw-bold fs-5">
                      Total: ${cart.cartItems.reduce((total, cartItem) => {
                          const item = products.find(i => i.id === cartItem.id)
                            return total +(item?.price || 0)  * cartItem.quantity
                      } ,0) }
                  </div>
              </Stack>
              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart