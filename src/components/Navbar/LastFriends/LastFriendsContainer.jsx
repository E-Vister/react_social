import LastFriendsItem from "./LastFriendsItem/LastFriendsItem";
import LastFriends from "./LastFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
      friendsItems: state.navbar.friends.map(item => <LastFriendsItem name={item.name} key={item.id} avatar={item.avatar}/>)
  }
};

export default connect(mapStateToProps, null)(LastFriends);
