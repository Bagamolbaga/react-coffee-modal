import {useContext} from 'react'
import {Context} from '../context.js'



const MilkOptions = () => {
  let {syroupOptions,radioButtonsHandler, resetHandler} = useContext(Context);


  return(

  <div className="syrup">
        <h2 className="syrup options_tittle tittle-with-reset">SYRUP OPTION <span name='s' className="btn-reset" onClick={(e)=>{resetHandler(e)}}>reset</span></h2>
        <div className="options-container">
        {syroupOptions.map(item => {
          return (
          <label className="options-container__item">
            <h3 className="options-container__item_tittle">{item.tittle} <span className="options-container__item_tittle_price">($ {item.price})</span></h3>
            <input className="options-container__item_radio" id={item.id} onChange={(e)=>{radioButtonsHandler(e, item.id)}} checked={item.checked} type='radio' name='syroup' />
            <span className="fake-radio"></span>
          </label>
          )
        })}
        </div>
      </div>
  )
}

export default MilkOptions;