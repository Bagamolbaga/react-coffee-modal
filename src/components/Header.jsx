import { useContext } from "react";
import { Context } from "../context.js";

const Header = () => {
  let { count, countHandler } = useContext(Context);
  return (
    <div className="header">
      <div className="back">
        <i class="fas fa-arrow-left"></i>
      </div>
      <img
        className="header__coffee-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD47Ql9kzrGiNnJyHmIM5S-FovO0_ODRdFLw&usqp=CAU"
        alt=""
      />
      <h1 className="header__coffee-name">Flat White</h1>
      <p className="header__coffee-info">
        Freshly-ground beans and streamed milk
      </p>
      <div className="header__counts">
        <div className="header__counts__price">$ 125</div>
        <div className="header__counts__btn_box">
          <button
            className="header__counts_btn"
            name="minus"
            onClick={countHandler}
          >
            <i class="fas fa-minus"></i>
          </button>
          <span className="header__counts_btn_count">{count}</span>
          <button
            className="header__counts_btn plus"
            name="plus"
            onClick={countHandler}
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
