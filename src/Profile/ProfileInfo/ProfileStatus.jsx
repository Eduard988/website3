import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../component/preloader/preloader";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'ooooo'
    }
activateEditMode=()=> {
        this.setState( {
            editMode: true
        });
}
    deactivateEditMode=()=> {
        this.setState( {
            editMode: false
        })
}
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;