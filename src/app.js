import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name: 'Jay',
    phone: '555 333 5555'
}, {
    id: 2,
    name: 'Lucy',
    phone: '222 444 3333'
}, {
    id: 3,
    name: 'Amber',
    phone: '999 888 9999'
}, {
    id: 4,
    name: 'John',
    phone: '333 777 7777'
}]

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Contacts List</h1>
                <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

ReactDOM.render(<App contacts={contacts} />, document.getElementById('app'));