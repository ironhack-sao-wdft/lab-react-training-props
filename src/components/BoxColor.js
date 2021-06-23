import React from 'react';

function BoxColor(props) {
  const color = props.hex
    ? props.hex
    : `rgb(${props.r}, ${props.g}, ${props.b})`;

  console.log(props);

  let hexaDecimal;

  if (!props.hex) {
    hexaDecimal =
      '#' +
      '0' +
      props.r.toString(16).substr(-2) +
      props.g.toString(16).substr(-2) +
      props.b.toString(16).substr(-2);
  }

  console.log(hexaDecimal);

  return (
    <div
      className={props.class}
      style={{
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {props.children}
      <p>{hexaDecimal}</p>
    </div>
  );
}

export default BoxColor;
