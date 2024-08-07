import React from 'react'
import { Link } from 'react-router-dom'
const Carditem = (props) => {
  return (
    <div>
      <li className='cards_item'>
        <Link className='cards__item__link'to={props.path}  >
          <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img src={props.src} alt='Travelimg' className='cards__item__img'></img>
        
        </figure>
        <div className='cards__item__info'>
          <h5 className='crads__item__text'>{props.text}</h5>
        </div>

        </Link>
      </li>

    </div>
  )
}

export default Carditem;
