import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";
import React from 'react';
import Preloader from "../../common/Preloader";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    let pagesElements = pages.map(p => {
        return <span className={props.currentPage === p ? scss.selectedPage : "false"}
                     key={props.usersArray[pages.indexOf(p)].id.toString()}
                     onClick={() => props.onPageChanged(p)}>{p}</span>
    })

    let usersElements = props.usersArray.map((item) => {
        return <UserItem
            cityRenderer={props.cityRenderer}
            user={item}
            key={item.id.toString()}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}
            toggleFollowingProgress={props.toggleFollowingProgress}
        />
    });
    return (
        <div className={scss.content}>
            <div className={scss.pagination}>{pagesElements}</div>
            {props.isFetching ?
                <Preloader/> : usersElements}
        </div>
    );
}

export default Users;


