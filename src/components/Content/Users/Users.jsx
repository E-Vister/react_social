import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";
import axios from "axios";
import React from 'react';

class Users extends React.Component {
    componentDidMount() {
        let url = `http://localhost:5000/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`;

        axios.get(url).then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalUsersCount);
            }
        );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        let url = `http://localhost:5000/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`;

        axios.get(url).then(res => {
                this.props.setUsers(res.data.items);
            }
        );
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages = [...pages, i];
        }

        let pagesElements = pages.map(p => {
            return <span className={this.props.currentPage === p && scss.selectedPage}
                         onClick={() => this.onPageChanged(p)}>{p}</span>
        })

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
                <div className={scss.pagination}>{pagesElements}</div>
                {usersElements}
            </div>
        );
    }
}

export default Users;


