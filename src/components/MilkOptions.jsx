import {useContext} from 'react'
import {Context} from '../context.js'


const MilkOptions = () => {
  let {milkOptions, radioButtonsHandler} = useContext(Context);


  return(

    <div className="milk">
      <h2 className="milK options_tittle">MILK OPTION<span className="options_tittle-required">(REQUIRED)</span></h2>
      <p className="milk__select-item">Please select 1 item</p>
      <div className="options-container">
        {milkOptions.map(item => {
          return(
            <label className="options-container__item">
              <h3 className="options-container__item_tittle">{item.tittle} <span className="options-container__item_tittle_price">($ {item.price})</span></h3>
              <input className="options-container__item_radio" id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id)}} checked={item.checked} type='radio' name='milk' />
              <span className="fake-radio"></span>
            </label>
          )
          })}

        
      </div>
    </div>
  )
}

export default MilkOptions;