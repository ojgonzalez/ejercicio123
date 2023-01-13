import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ContactComponentFunctional = (props) => {

    const [online, setStatus] = useState(true);
    const changeState = () => {
        setStatus(online ? false : true);
    }
  return (
    <div>
        <div>
            <h2>Nombre Completo: { props.name } { props.lastName }</h2>
            <h3>Email: { props.email }</h3>
            <h3>Online: { online ? 'Conectado' : 'No Conectado' }</h3>
        </div>

        <div>
            <button onClick={changeState}>Cambiar Estado</button>
        </div>
    </div>
  )
}

ContactComponentFunctional.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    online: PropTypes.bool,
}

export default ContactComponentFunctional
