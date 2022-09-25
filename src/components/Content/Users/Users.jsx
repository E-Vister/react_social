import scss from './Users.module.scss';
import UserItem from "./UserItem/UserItem";

const Users = (props) => {
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