import React from 'react'
import './Show.css'

const Show =()=>{
    return(
        <div className='show-one'>
          <div className="show-pr">
            <div className='text'>نمایش بر اساس استان
                <span className='arrow'>&#11206;</span>

            </div>
          
          
          
          </div>
            <div class="dropdown-menu">
            <ul>
                <li>Settings</li>
                <li>Sports</li>
                <li>Log Out</li>
            </ul>
            </div>
        
        </div>
    )
}

export default Show;