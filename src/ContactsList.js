import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            placeholder: 'Type a name...',
            contacts: props.contacts
        };
    }
    
    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }
    
    addContact(event) {
        event.preventDefault();
        let name = this.refs.name.value;
        let phone = this.refs.phone.value;
        let id = Math.floor((Math.random() * 100) + 1);
        this.setState({
            contacts: this.state.contacts.concat({id, name, phone})
        })
        // reset form fields after submission
        this.refs.name.value = '';
        this.refs.phone.value = '';
    }
    
    render() {
        
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        
        return (
            <div>
                <input type="text" 
                    value={this.state.search} 
                    placeholder={this.state.placeholder} 
                    onChange={this.updateSearch.bind(this)} 
                />
                <form onSubmit={this.addContact.bind(this)}>
                    <input type="text" ref="name" />
                    <input type="number" ref="phone" />
                    <button type="submit">Add New Contact</button>
                </form>
                <ul>
                    {filteredContacts.map((contact)=> {
                        return <Contact contact={contact} item="hello" key={contact.id} />
                    })}
                </ul>
            </div>
        )
    }
}

export default ContactsList;