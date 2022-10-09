import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";
import axios from "axios";

const Users = (props) => {
    if (props.usersArray.length === 0) {
        axios.get('http://localhost:5000/api/1.0/users').then(r => {
                props.setUsers(r.data.items);
            }
        );
    }

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
            {usersElements}
        </div>
    );
}

export default Users;


