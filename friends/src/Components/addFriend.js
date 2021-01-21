import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddFriend extends React.Component {

    state = {
        friend: {
            id: Date.now,
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })

    }

    addFriend = (e) => {
        e.preventDefault()
        axiosWithAuth().post('/api/friends', this.state.friend)
            .then(
                res => {console.log(res)})
            .catch(err => {
                console.log(err)})
    }


    render() {
        return (
            <form onSubmit={this.addFriend}>
                <h2>Add A New Friend!</h2>
            <div className="addFriend">

                <div className="name-field">
                    <label>
                        Name: &nbsp;
                    <input
                            type="text"
                            maxlength="25"
                            name="name"
                            value={this.state.friend.name}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>

                <div className="age-field">
                    <label>
                        Age: &nbsp;
                    <input
                            type="text"
                            maxlength="3"
                            name="age"
                            value={this.state.friend.age}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>

                <div className="email-field">
                    <label>
                        Email: &nbsp;
                    <input
                            type="text"
                            maxlength="25"
                            name="email"
                            value={this.state.friend.email}
                            onChange={this.handleChange}
                        />
                    </label>
                </div>

                </div>
                
                <button>Add Friend</button>
            </form>
        );
    }
}

export default AddFriend;
