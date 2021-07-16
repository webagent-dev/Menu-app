import React from 'react'


function Menu({item, filterBtn}) {
    return (
        <div className='btn-container'>
           {
               item.map((btn, index) => <button key={index} className='btn' 
               onClick={() => filterBtn(btn)}>{btn}</button>)
           }
        </div>
    )
}

export default Menu
