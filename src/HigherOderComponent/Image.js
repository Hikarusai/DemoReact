import React, { Component } from 'react';

export default class extends Component{
    render(){
        return(
            <div className='Image'>
                <img src={this.props.src}></img>
            </div>
        )
    }
}