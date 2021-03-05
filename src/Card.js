import React from 'react';
import './Card.css'

function Card(props) {


  return (  
    <>
      <div className="card">
        <img src={props.imgsrc} alt="Img" className="card__img" />
        <div className="card__info">
              <h3 className="card__title">{props.sname}</h3>
                <p className="card__desc">{props.desc}</p>
          <a className="link" href={props.links} target="_blank" rel="noreferrer">
            Watch Now
            </a>
          
        </div>
      </div>
    </>
  )
}

export default Card
