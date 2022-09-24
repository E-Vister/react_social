import LastFriendsItem from "./LastFriendsItem/LastFriendsItem";
import LastFriends from "./LastFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
      friendsItems: state.navbar.friends.map(item => <LastFriendsItem name={item.name} avatar={item.avatar}/>)
  }
};

const LastFriendsContainer = connect(mapStateToProps, null)(LastFriends);

export default LastFriendsContainer;
