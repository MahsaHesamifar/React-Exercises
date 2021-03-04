import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import userPic from './user.png';
import './CommentDetail';
import CommentDetail from './CommentDetail';

const App = () => {
    let users = [
        {
            avatar: userPic,
            name: "Alex",
            time: "Today at 5:00",
            comment: "Great blog post!"
        },
        {
            avatar: userPic,
            name: "Sam",
            time: "Today at 7:51",
            comment: "Informative. Thanks."
        },
        {
            avatar: userPic,
            name: "Jane",
            time: "Today at 9:01",
            comment: "Looks great."
        },

    ]
    return (
        <div id="container">
            <CommentDetail />
            <div className="messageBlock">
                <img src={users[0].avatar} className="userPic" alt=""/>
                <span className="name">{users[0].name}</span>
                <span className="time">{users[0].time}</span>
                <p className="text">{users[0].comment}</p>
            </div>
            <div className="messageBlock">
                <img src={users[1].avatar} className="userPic" alt=""/>
                <span className="name">{users[1].name}</span>
                <span className="time">{users[1].time}</span>
                <p className="text">{users[1].comment}</p>
            </div>
            <div className="messageBlock">
                <img src={users[2].avatar} className="userPic" alt=""/>
                <span className="name">{users[2].name}</span>
                <span className="time">{users[2].time}</span>
                <p className="text">{users[2].comment}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));