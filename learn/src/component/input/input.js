import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.chat = this.chat.bind(this);
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFjZGRmYTc4NjBmNjY0NTA2M2Y0YTUzZmMyMWVlYjlmYmU4NjM2M2EyYTg5NDYwNzQ1ODRlNTc2OWJjM2VhMzY3OWFjZDA0MzhiMWIwZGVkIn0.eyJhdWQiOiI0IiwianRpIjoiMWNkZGZhNzg2MGY2NjQ1MDYzZjRhNTNmYzIxZWViOWZiZTg2MzYzYTJhODk0NjA3NDU4NGU1NzY5YmMzZWEzNjc5YWNkMDQzOGIxYjBkZWQiLCJpYXQiOjE1NDIxMDIwNTksIm5iZiI6MTU0MjEwMjA1OSwiZXhwIjoxNTczNjM4MDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.0YJN8b3cdd6VRC26K2rYbgMRbFLx1upOq-pyC0vJz-0xpU1LLIGEH61_q8dhO_otSxOX9SsXbrYVdJ-O7RAGzygx6SlalFgcaTObD2LBOrDH_KP8Af-w4xrzkBsZScxiqn0Bfl8XUwPTfykPYw6HjpoV7IjzTQxk56OM9-I8uk0IkgegLCuzxedMTgEVjOLJjWAFo4yD7WS87j8Uj9z7mVOtAy0Sar_1nEJORLqElhxvf-hDeo6mGkF9bH7As_8mjQq1ov46xgAPknsWZzvuGXeflM465h0ozju-DnOhcxuEKB5meaGItAb1AxE6sP5THkAo0OyBzmUlKOpBP501yTT97v-4ud4IzZkh857NhBzVMHbJJYATEFHhwPBkevDFrGc2REIfqoksCII60Nspohb2rG4dkWGgnyhhRbQMdmUdpw5LHasyyCC8QoTden7f5mTq8f-Xh-J_JQNidybW0_57KH8R123yViZKZtZvqSTSkcObCMofRMqx27ivb_uGm26uW9pAGdgufje-vZehRvShBAsQHW12-hfPcBtg_S5kbY-9YVbDAFx208vGuMHT_LTlKbcn99HtgVJO6z_qh6QdgbmMDcDd-T2kj8W-3ediJC4bUePISZb6q83yjsDkPQ98ESrKotKJa4olLZ8QVrbKrZBwOpAkmViMlI79NSw'
        };
        var data = {
            grant_type : 'authorization_code',
            client_id : '4',
            client_secret: '7XU7QQofIcCSYTwjfEJJHKM4XIsnLjPTlihTI5nH',
            redirect: 'http://localhost:8000',
        };

        axios.post('http://localhost:8000/api/user', data, {headers: headers})
            .then(response => {
                console.log(response.data);
            })
            .catch (response => {
                // List errors on response...
            });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    chat(){
        var headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFjZGRmYTc4NjBmNjY0NTA2M2Y0YTUzZmMyMWVlYjlmYmU4NjM2M2EyYTg5NDYwNzQ1ODRlNTc2OWJjM2VhMzY3OWFjZDA0MzhiMWIwZGVkIn0.eyJhdWQiOiI0IiwianRpIjoiMWNkZGZhNzg2MGY2NjQ1MDYzZjRhNTNmYzIxZWViOWZiZTg2MzYzYTJhODk0NjA3NDU4NGU1NzY5YmMzZWEzNjc5YWNkMDQzOGIxYjBkZWQiLCJpYXQiOjE1NDIxMDIwNTksIm5iZiI6MTU0MjEwMjA1OSwiZXhwIjoxNTczNjM4MDU5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.0YJN8b3cdd6VRC26K2rYbgMRbFLx1upOq-pyC0vJz-0xpU1LLIGEH61_q8dhO_otSxOX9SsXbrYVdJ-O7RAGzygx6SlalFgcaTObD2LBOrDH_KP8Af-w4xrzkBsZScxiqn0Bfl8XUwPTfykPYw6HjpoV7IjzTQxk56OM9-I8uk0IkgegLCuzxedMTgEVjOLJjWAFo4yD7WS87j8Uj9z7mVOtAy0Sar_1nEJORLqElhxvf-hDeo6mGkF9bH7As_8mjQq1ov46xgAPknsWZzvuGXeflM465h0ozju-DnOhcxuEKB5meaGItAb1AxE6sP5THkAo0OyBzmUlKOpBP501yTT97v-4ud4IzZkh857NhBzVMHbJJYATEFHhwPBkevDFrGc2REIfqoksCII60Nspohb2rG4dkWGgnyhhRbQMdmUdpw5LHasyyCC8QoTden7f5mTq8f-Xh-J_JQNidybW0_57KH8R123yViZKZtZvqSTSkcObCMofRMqx27ivb_uGm26uW9pAGdgufje-vZehRvShBAsQHW12-hfPcBtg_S5kbY-9YVbDAFx208vGuMHT_LTlKbcn99HtgVJO6z_qh6QdgbmMDcDd-T2kj8W-3ediJC4bUePISZb6q83yjsDkPQ98ESrKotKJa4olLZ8QVrbKrZBwOpAkmViMlI79NSw'
        };

            var data = {
                value: this.state.value,
                grant_type : 'authorization_code',
                client_id : '4',
                client_secret: '7XU7QQofIcCSYTwjfEJJHKM4XIsnLjPTlihTI5nH',
                redirect: 'http://localhost:8000',
            };
        axios.post('http://localhost:8000/api/chat', data, {headers: headers})
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.chat}>Enter</button>
            </div>
        );
    }
}

export default App;