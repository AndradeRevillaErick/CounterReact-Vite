
//las funciones siempre van afuera de los functional component
// const getMessage = () => {
//   return newMessage.message;
// }

// const newMessage = {
//   message: 'Hola Mundo madafaka',
//   title: 'Erick'
// };

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle }) => {


  return (
    <>
      <h1>{ title }</h1>
      {/* <h1>{ getMessage() }</h1> */}
      {/* <h1>{ JSON.stringify(newMessage) }</h1> */}
      <p>{ subTitle }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}