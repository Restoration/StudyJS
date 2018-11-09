import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tarot  extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
        return (
            <div>
                <ul>
                  <li id="past"></li>
                  <li id="present"></li>
                  <li id="future"></li>
                </ul>
                <button id="shuffle">
                    Shuffle
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Tarot />,
    document.getElementById('root')
);
