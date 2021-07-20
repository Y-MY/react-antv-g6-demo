import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Topbar from "../../../components/topbar/topbar";
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

        /*

        const graph = new G6.Graph({
            container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800, // Number，必须，图的宽度
            height: 500, // Number，必须，图的高度
        });

        // 读取数据
        graph.data(data);
        // 渲染图
        graph.render();*/

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
