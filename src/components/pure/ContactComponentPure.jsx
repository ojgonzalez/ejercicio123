import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactComponentPure extends Component {

    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div>
              <h1>Pagina de Bienvenida</h1>
              <h2>Ejercicio 123 OB-ReactJS</h2>
              <h2>Nombre complet: { this.props.name } { this.props.lastName }</h2>
              <h3>Email: { this.props.email }</h3>
              <h3>Estado: { this.props.online ? 'Conectado':'No Conectado'}</h3>
            </div>
        );
    }
}


ContactComponentPure.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    online: PropTypes.bool,
};


export default ContactComponentPure;
