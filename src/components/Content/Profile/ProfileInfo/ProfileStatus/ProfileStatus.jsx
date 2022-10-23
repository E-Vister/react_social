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
            editMode: false,
            status: this.props.status
        });
    }

    onKeyDown = (e) => {
        if (e.key === "Enter") {
            this.deactivateEditMode();
            this.props.updateStatus(this.state.status);
        }

        if (e.key === "Escape") {
            this.deactivateEditMode();
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange}
                             onKeyDown={this.onKeyDown}
                             autoFocus={true}
                             onBlur={this.deactivateEditMode}
                             type="text"
                             value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Change status'}</span>}
            </div>
        )
    }

}

export default ProfileStatus;