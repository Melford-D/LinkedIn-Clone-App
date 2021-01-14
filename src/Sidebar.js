import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1610182155296-2e8ffac8bcd7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fHJhbmRvbSUyMGNvbG9yJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="background"/>
                <Avatar className="sidebar__avatar"
                src="https://media-exp1.licdn.com/dms/image/C4E35AQEQSPurbhOwrA/profile-framedphoto-shrink_100_100/0/1604667909525?e=1610506800&v=beta&t=t9n8bP5xEsCB59RSv_OX_or7SuRJi9guhpQZxAFz_js" />
                <h2>Melford Birakor</h2>
                <h4>melfordbirakor@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2.5k</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">3.3k</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    )
}

export default Sidebar
