import React from 'react'
import PropTypes from 'prop-types'
import ContactComponentFunctional from './ContactComponentFunctional'

const ContactComponentList = props => {
  return (
    <div>
        <ContactComponentFunctional name='Nayibe' lastName='Gomez' email='ElcorreodeNayibe@abc.net' online={true}></ContactComponentFunctional>
    </div>
  )
}

ContactComponentList.propTypes = {

}

export default ContactComponentList
