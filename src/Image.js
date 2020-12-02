import React from 'react';
import friendsimg from './squad_wedding.jpg';
import './friendsimg.css';

export class Image extends React.Component{
    render() {
        return(
            <div>
                <img className="friendsimg" src={friendsimg} alt={'Group of friends'} />
            </div>
        )
    }
}