import React, { Component } from 'react';
import './DefaultLayout.css';

class DefaultLayout extends Component {

    render() {

        return (
            <layout>
                <div className="nav">
                    navbar test
                </div>
                <div className="body">
                    body test
                </div>
            </layout>
            
        )
    }
}

export default DefaultLayout;