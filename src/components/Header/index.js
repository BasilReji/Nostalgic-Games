import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes.contants";
import SvgIcons from "../SvgIcons";
import style from "./style.module.scss";
class Header extends Component {
  render() {
    return (
      <header className={style.mainHeader}>
        <div className={style.headerInner}>
          <div className={style.headerInner__title}>
            <Link to={ROUTES.INDEX}>
              <SvgIcons type={"home"} />
            </Link>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
