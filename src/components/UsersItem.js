import React from "react";
import '../styles.css'


const UsersItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <p><strong style={{marginRight: '10px'}}>{props.users.name}</strong>- (www.{props.users.website})</p>
            </div>
        </div>
    )
}

export {UsersItem}