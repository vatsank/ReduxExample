import React, { Component } from 'react';

import Medicine from './containers/Medicine.js';

/*App component starts here */
class App extends Component {

    render() {
        return ( <div className = "container">
            <div className = "row">
            <div className = "col-sm-7 offset-sm-2">
            <span className = "title" > Medicines </span> 
            <Medicine / >
            </div> 
            </div> 
            </div>



        );
    }
}

export default App;