import React, { Component } from 'react'
import axios from 'axios'

import ContactListItem from './ContactListItem'

const CONTACTS_API = 'https://contacts-monolith.herokuapp.com/api/contacts'
const style = {
    listStyle: 'none'
}

class App extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         contacts: []
    //     }
    // }
    state = {
        contacts : []
    }
    renderContacts = (data) => {
        const contacts = data.map((contact) => 
            <ContactListItem key={contact._id} contact={contact}/>
        )
        this.setState({contacts})
    }
    getContactsFetch = async () => {
        const response = await fetch(CONTACTS_API);
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
        this.renderContacts(myJson)
    }
    getContactsAxios = () => {
        axios.get(CONTACTS_API)
            .then((response) => {
                // handle success
                console.log(response);
                this.renderContacts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    componentDidMount () {
        // this.getContactsFetch()
        this.getContactsAxios()
    }
    render () {
        return (
            <div>
                Hello from App
                <ul style={style}>
                    {this.state.contacts}
                </ul>
            </div>
        )
    }
}

export default App