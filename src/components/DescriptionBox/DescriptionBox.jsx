import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
          <div className="descriptionbox-nav-box">
            Description
          </div>
          <div className="descriptionbox-nav-box fade">
            Reviews(122)
          </div>
        </div>
          <div className="descriptionboxdescription">
            <p>An ecommerce website is an online store where customers can 
            find products, browse offerings, and place purchases online. It 
            facilitates the transaction between a buyer and seller. A digital 
            storefront can serve as the virtual equivalent of the product shelves, 
            sales staff, and cash register of a physical shop.</p>
            <p>
            Ecommerce owes its rapid growth in part to the ease of access to products and 
            speed of placing purchases. Once set up, an online store is open 24 hours a day
             without the need to be monitored or staffed like a physical store. Customers can
              browse a broad selection of offers from around the world, from anywhere with an 
              internet connection, and place purchases with just a few clicks.
            </p>
          </div>
        
    </div>
  )
}

export default DescriptionBox