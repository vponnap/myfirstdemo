import React, {Component} from 'react';
import UserService from './UserService';

class UserComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
            </div>

        )
    }
}

export default UserComponent