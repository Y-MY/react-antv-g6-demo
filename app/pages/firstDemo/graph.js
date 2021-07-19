import React, {Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import G6 from '@antv/g6';
import {data,initData} from "./data";

export default function () {

    //查看G6版本
    console.log(G6.Global.version);

    const ref = React.useRef(null);
    let graph = null;

    useEffect(() => {
        if (!graph) {
            graph = new G6.Graph({
                container: ReactDOM.findDOMNode(ref.current),
                width: 300,
                height: 400,
                fitView: true,//设置是否将图适配到画布中
                fitViewPadding: [20, 40, 50, 20],//画布上四周的留白宽度
                // 节点在默认状态下的样式配置（style）和其他配置
                defaultNode: {
                    size: 50, // 节点大小
                    // ...                 // 节点的其他配置
                    // 节点样式配置
                    style: {
                        fill: 'steelblue', // 节点填充色
                        stroke: '#666', // 节点描边色
                        lineWidth: 1, // 节点描边粗细
                    },
                    // 节点上的标签文本配置
                    labelCfg: {
                        // 节点上的标签文本样式配置
                        style: {
                            fill: '#fff', // 节点标签文字颜色
                        },
                    },
                },
                // 边在默认状态下的样式配置（style）和其他配置
                defaultEdge: {
                    // ...                 // 边的其他配置
                    // 边样式配置
                    style: {
                        opacity: 0.6, // 边透明度
                        stroke: 'grey', // 边描边颜色
                    },
                    // 边上的标签文本配置
                    labelCfg: {
                        autoRotate: true, // 边上的标签文本根据边的方向旋转
                    },
                },
                modes: {
                    default: ['drag-canvas', 'zoom-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
                },
                layout: {
                    type: 'dagre',
                    direction: 'LR',
                }
            });
        }
        //graph.data(data);
        graph.data(initData);
        graph.render();
    }, []);

    return <div ref={ref}></div>;
}
