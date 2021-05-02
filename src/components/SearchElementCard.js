import React, { useContext } from 'react'
import { Context } from '../components/Store';
const style = {
  container:{
     width: "100%",

     padding: "8px",
     textAlign: "center",
    borderRadius: "5%",
    background: "linear-gradient(0deg, rgba(34, 25, 28, 0.329) 65%, rgb(14, 14, 14) 120%)",
    color: "white",
    boxShadow: "5px 5px 15px 5px #00000080",
  },
  img: {
     width: "100px",
     objectFit: "cover"
  }
}

function SearchElementCard(props) {
  const [ state ] = useContext(Context);
  return (
    <div style={style.container}>
          <div class="">
            { props.el.src !== undefined  ?
              <img class="element-image" style={style.img} src={props.el.src} alt={props.el.name} /> :
              <img class="element-image" style={style.img} src="./assets/images/elements/ocean.png" alt={props.el.name} />
            }
          </div>
          <div class="">
              <h5>{props.name}</h5>
              <p>Current cost: ${props.el.cost * state.aetherRate}</p>
              {/* <img class="searched-price-image" src="assets/images/aether.png" alt="Card cap" /> */}
          </div>
      </div>
  )
}

export default SearchElementCard;
