import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setPosts, setProfileInfo} from "../../../redux/profile-reducer";


class ProfileAPIContainer extends React.Component {
    componentDidMount() {
        let url = `http://localhost:5000/api/1.0/profile/0`;

        axios.get(url).then(res => {
            this.props.setPosts(res.data.posts);
            this.props.setProfileInfo(res.data.items);
        })
    }

    render() {
        return <Profile posts={this.props.posts} newPostTextField={this.props.newPostTextField}
                        profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        newPostTextField: state.profile.newPostTextField,
        profileInfo: state.profile.profileInfo,
    }
}

const ProfileContainer = connect(mapStateToProps, {
    setPosts,
    setProfileInfo,
})(ProfileAPIContainer);

export default ProfileContainer;