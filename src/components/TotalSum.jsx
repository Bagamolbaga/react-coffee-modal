import {useContext} from 'react'
import {Context} from '../context.js'


const TotalSum = () => {
  let {cartSum, count} = useContext(Context);
  return (
    <div className="btn-add">
			<div className="btn-add__icon"><i class="fas fa-shopping-cart"></i></div>
			<div className="btn-add__tittle">ADD 1 TO CART</div>
			<div className="btn-add__sum">$ {cartSum * count}</div>
		</div>
  )
  
}

export default TotalSum;