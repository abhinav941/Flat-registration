import React, { Component } from 'react';
import Sidebar from '../../Component/Sidebar/Sidebar';

class Layout extends Component {
    render() {
        return (
            <>
                <div>Header</div>
                <Sidebar />
                <div>page</div>
            </>
        );
    }
}

export default Layout
