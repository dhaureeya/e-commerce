import React from 'react'
import "./NewCollection.css"
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW Collection</h1>
        <hr/>
        <div className='collection'>
        {new_collections.map((item,i)=>{
            return <Item key={i}
            id={item.id}
            name={item.name}
            img={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
        })}

        </div>
    </div>
  )
}

export default NewCollection