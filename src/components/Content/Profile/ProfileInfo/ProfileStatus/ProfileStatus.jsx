import scss from "./ProfileStatus.module.scss";
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
            </div>
        )
    }

}

export default ProfileStatus;