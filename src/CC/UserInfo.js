import React from 'react'

export default function UserInfo(props) {
    return (
        <div>
            {props.userInfo.username}, {props.userInfo.password}
        </div>
    )
}
