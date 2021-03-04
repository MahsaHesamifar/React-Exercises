import React from 'react';
import './app.css';
import userPic from './user.png';

const CommentDetail = (props) => {
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
        <div className="messageBlock">
            <img src={users[0].avatar} className="userPic" alt=""/>
            <span className="name">{users[0].name}</span>
            <span className="time">{users[0].time}</span>
            <p className="text">{users[0].comment}</p>
        </div>
    )
}
export default CommentDetail;