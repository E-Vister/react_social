import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import React from 'react';

class Users extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:5000/api/1.0/users').then(res => {
                this.props.setUsers(res.data.items);
            }
        );
    }

    render() {
        let usersElements = this.props.usersArray.map((item) => {
            return <UserItem
                cityRenderer={this.props.cityRenderer}
                user={item}
                key={item.id}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        });

        return (
            <div className={scss.content}>
                {usersElements}
            </div>
        );
    }
}

export default Users;


