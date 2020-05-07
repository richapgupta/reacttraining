import React from "react";
import PropTypes from "prop-types";
import Clock from "../Clock";

export function Footer(props) {
  const footer = props.footermsg;
  const year = props.year;
  return (
    <div className="footer">
      {/* {props.year} &nbsp;
      {props.footermsg} */}
      {year} &nbsp;
      {footer}
      <Clock initial={new Date()} />
    </div>
  );

  Footer.propTypes = {
    footerdata: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
  };
}
