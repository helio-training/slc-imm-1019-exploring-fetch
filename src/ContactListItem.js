import React from 'react'

const ContactListItem = (props) => {
    return (
        <li >
            {props.contact.name} : {props.contact.email}
        </li>
    )
}

export default ContactListItem