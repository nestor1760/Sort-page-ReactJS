import React, { useEffect, useState } from "react";
import './styles.css'
import { UsersItem } from "./components/UsersItem";
import { PostsItem } from "./components/PostsItem";
import { CommentsItem } from "./components/CommentsItem";
import { MySelect } from "./UI/MySelect";



const App = () => {
    const [type, setType] = useState('users')
    const [items, setItems] = useState([])
    const [selectedSort, setSelectedSort] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [type])

    const sortItems = (sort) => {
        setSelectedSort(sort)
        console.log(sort);
        setItems([...items].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <div className="btnType">
                <button onClick={() => setType('users')} className="btnType-item">Users</button>
                <button onClick={() => setType('posts')} className="btnType-item">Posts</button>
                <button onClick={() => setType('comments')} className="btnType-item">Comments</button>
            </div>
            <hr style={{margin: '15px 0', border: '1px solid black'}}/>
            {(type === 'users')
              ?
                <MySelect 
                  defaultvalue='Sort by...'
                  value={selectedSort}
                  onChange={sortItems}
                  options={[
                    {value: 'name', name: 'Sort by name'},
                    {value: 'website', name: 'Sort by website'},
                  ]}
                />
              : (type === 'posts')
                  ?
                    <MySelect 
                      defaultvalue='Sort by...'
                      value={selectedSort}
                      onChange={sortItems}
                      options={[
                        {value: 'title', name: 'Sort by title'},
                        {value: 'body', name: 'Sort by body'},
                      ]}
                    />
                  :
                    <MySelect 
                      defaultvalue='Sort by...'
                      value={selectedSort}
                      onChange={sortItems}
                      options={[
                        {value: 'name', name: 'Sort by name'},
                        {value: 'body', name: 'Sort by body'},
                        {value: 'email', name: 'Sort by email'},
                      ]}
                    />
            }
            {
            (type === 'users')
                ?
                items.map(user => 
                    <UsersItem key={user.id} users={user}/>  
                )
                : (type === 'posts')
                    ?
                    items.map(post =>
                        <PostsItem number={post.id} key={post.id} posts={post}/>
                    )
                    :
                    items.map(comment =>
                        <CommentsItem number={comment.id} key={comment.id} comments={comment}/>
                    )
            
            }
        </div>
    )
}

export default App