import React from "react";
import '../styles.css'


const PostsItem = ({number, ...props}) => {
    return (
        <div className="post">
            <div className="post__content">
                <p style={{marginBottom: '10px'}}>
                    <strong>{number}. {props.posts.title}</strong>
                </p>
                <div>{props.posts.body}</div>
            </div>
        </div>
    )
}

export {PostsItem}