import {useContext} from 'react'
import {Context} from '../context.js'


const MilkOptions = () => {
  let {chocoladeOptions, radioButtonsHandler, resetHandler} = useContext(Context);


  return(
    <div className="chocolade">
      <h2 className="chocolade options_tittle tittle-with-reset">CHOCOLADE<span className="btn-reset" name='c' onClick={(e)=>{resetHandler(e)}}>reset</span></h2>
      <div className="options-container">
      {chocoladeOptions.map(item => {
        return (
        <label className="options-container__item">
          <h3 className="options-container__item_tittle">{item.tittle} <span className="options-container__item_tittle_price">($ {item.price})</span></h3>
          <input className="options-container__item_radio" type="checkbox" id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id)}} checked={item.checked} type='checkbox' name='chocolade' />
          <span className="fake-checkbox"></span>
        </label>
          )
        })}
      </div>
    </div>
  )
}

export default MilkOptions;