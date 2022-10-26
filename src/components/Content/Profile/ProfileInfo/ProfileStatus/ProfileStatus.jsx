import scss from "./ProfileStatus.module.scss";
import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus(props.status);
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            deactivateEditMode();
            props.updateStatus(status);
        }

        if (e.key === "Escape") {
            deactivateEditMode();
        }
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode
                ? <input onChange={onStatusChange}
                         onKeyDown={onKeyDown}
                         autoFocus={true}
                         onBlur={deactivateEditMode}
                         type="text"
                         value={status}/>
                : <span onDoubleClick={activateEditMode}>{props.status || 'Change status'}</span>}
        </div>
    );
}

export default ProfileStatus;