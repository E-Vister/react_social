import scss from "./ProfileStatus.module.scss";
import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        console.log(this.props.status);
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Change status'}</span>}
            </div>
        )
    }

}

export default ProfileStatus;