import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import G6 from '@antv/g6';

import Topbar from "../../components/topbar/topbar";
import Graph from "./graph";
import './style/index.less';

const prefix = "first-demo";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {

    }

    componentDidMount() {
        let elementById = document.getElementById("mountNode");
        console.log(elementById)

    }



    componentWillUnmount() {

    }



    render() {

        return (
            <div className={prefix}>
                <Topbar title="first demo" onClick={() => this.props.history.goBack()}/>
                <div className={prefix + "-box"}>
                   <Graph/>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(withRouter(Home));
