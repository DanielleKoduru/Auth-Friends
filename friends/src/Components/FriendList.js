import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class FriendList extends React.Component {
    state = {
        friendList: []
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get("/api/friends")
            .then(res => {
                console.log(res);
                this.setState({
                    friendsList: res.data
                });
            })
            .catch(err => console.log(err))
    };

    render() {
        console.log(this.state.friendsList)
        return (
            <div>
                {this.state.friendList.map(friend =>
                    <Card key={friend.id}>
                    <CardBody>
                        <CardTitle tag="h1">My Friend:{friend.name}</CardTitle>
                        <CardSubtitle tag="h2">Age:{friend.age}</CardSubtitle>
                        <CardText tag="h2">Email Address:{friend.email}</CardText>
                        <Button >Delete Friend</Button>
                    </CardBody>
                </Card>)}
            </div>
        )
    }

}

export default FriendList;