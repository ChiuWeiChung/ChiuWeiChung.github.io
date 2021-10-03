import React from 'react'
import Navigation from '../components/Navigation/Navigation';
import NewSideBar from '../components/NewSideBar/newSideBar';
import Aux from './Auxiliary.js';
import Auth from '../components/Auth/Auth';
class Layout extends React.Component {

    state = {
        showSideBar: false,
        showList: { name: null, toggle: false },
    }

    sideBarToggler = () => {
        this.setState((prevState) => {
            return {
                showSideBar: !prevState.showSideBar
            }
        })
    }

    listToggler = (name) => {
        this.setState(({ showList }) => {
            let updatedList = { ...showList };
            if (showList.name === name) {
                updatedList.toggle = !showList.toggle;
            } else {
                updatedList.name = name;
                updatedList.toggle = true;
            }
            return { showList: updatedList }
        })

    }

    render() {
        return (
            <Aux>
                <Navigation clicked={this.sideBarToggler} />
                <NewSideBar showSideBar={this.state.showSideBar} showList={this.state.showList} listToggler={this.listToggler} />
                <Auth />
                {this.props.children}
            </Aux>
        )

    }
}

export default Layout