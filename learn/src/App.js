import React, {Component} from 'react';
import Chat from './component/chat/chat';
import Input from './component/input/input';
import './App.scss';
import Echo from "laravel-echo"

window.io = require('socket.io-client');


class App extends Component {
    echo = window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: window.location.hostname + ':6001'
    });

    chanel = window.Echo.channel('dattq')
        .listen('ChatMessage', (e) => {
            this.setState({
                date: this.state.date.concat(e.chatMessage)
            });
        });

    constructor(props) {
        super(props);
        this.state = {date: []};
    }

    render() {
        return (
            <div className="App">
                <Chat message={this.state.date}/>
                <Input/>
            </div>
        );
    }
}

export default App;
