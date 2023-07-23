import React from "react";
import '../styles.css'


const CommentsItem = ({number, ...props}) => {
    return (
        <div className="post">
            <div className="post__content">
                <p>
                    <strong>
                        {number}. {props.comments.name}
                    </strong>
                </p>
                <div>
                    <p style={{margin: '10px 0'}}>{props.comments.body}</p>
                    <p>{props.comments.email}</p>
                </div>
            </div>
        </div>
    )
}

export {CommentsItem}