import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="chat">
                {
                    this.props.message.map((mess, i) =>
                        <div key={i} className="alert alert-success" role="alert">{mess.message}</div>)
                }
            </div>
        );
    }
}

export default App;