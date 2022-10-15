import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";
import React from 'react';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages = [...pages, i];
    }

    let pagesElements = pages.map(p => {
        return <span className={props.currentPage === p && scss.selectedPage}
                     onClick={() => props.onPageChanged(p)}>{p}</span>
    })

    let usersElements = props.usersArray.map((item) => {
        return <UserItem
            cityRenderer={props.cityRenderer}
            user={item}
            key={item.id}
            follow={props.follow}
            unfollow={props.unfollow}
        />
    });
    return (
        <div className={scss.content}>
            <div className={scss.pagination}>{pagesElements}</div>
            {props.isFetching ?
                <img className={scss.preloader} src={'/preloader.svg'} alt={'preloader'}/> : usersElements}
        </div>
    );
}

export default Users;


