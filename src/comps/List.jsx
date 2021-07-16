import React from 'react'

function List({menu}) {
    return (
        <div className='menu-container'>
           {
               menu.map((item) => {
                   const {id, desc, img, price,title } = item
                   return(
                       <div className='menu' key={id}>
                           <div className='image-container'>
                               <img src={img} alt={title} className='image'/>
                           </div>
                           <div className='details'>
                               <div className='price-container'>
                                   <h3 className='name'>{title}</h3>
                                   <h4 className='price'>{price}</h4>
                               </div>
                               <p className='text'>{desc}</p>
                           </div>
                       </div>
                   )
               })
           }
        </div>
    )
}

export default List
