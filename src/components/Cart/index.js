import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      return (
        <div>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-list-container">
                <h1 className="heading">My Cart</h1>
                <CartListView />
                <CartSummary />
              </div>
            </div>
          )}
        </div>
      )
      // TODO: Update the functionality to remove all the items in the cart
    }}
  </CartContext.Consumer>
)
export default Cart
