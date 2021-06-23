import React from 'react';

function Greetings(props) {
  let word = '';

  // switch (props.lang) {
  //   case 'de':
  //     word = 'Hallo';
  //     break;
  //   case 'fr':
  //     word = 'Bonjour';
  //     break;
  //   case 'es':
  //     word = 'Hola';
  //     break;
  //   case 'en':
  //     word = 'Hello';
  //     break;
  //   default:
  //     word = 'Olá';
  // }

  const greetings = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hello',
  };

  return (
    <div className="border border-dark m-2 d-flex p-1">
      <p>
        {greetings[props.lang]} {props.children}
      </p>
    </div>
  );
}
export default Greetings;
