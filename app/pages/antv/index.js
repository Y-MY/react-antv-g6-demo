import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button} from 'antd-mobile';
import Topbar from "../../components/topbar/topbar";

import './style/index.less';

const prefix = "my_home";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div className={prefix}>
                <Topbar title="Antv Demo" onClick={() => this.props.history.goBack()}/>
                <div className={prefix + "-box"}>
                    <Button onClick={() => this.props.history.push('firstDemo')}>first demo</Button>
                    <Button onClick={() => this.props.history.push('minimap')}>Minimap demo</Button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(withRouter(Home));
