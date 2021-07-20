import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {NavBar, Icon} from 'antd-mobile';
import Proptypes from 'prop-types';
import './style/index.less';

class Topbar extends Component {

    render() {
        const {onClick, title, rightContent,isShowBackBtn} = this.props;
        console.log(isShowBackBtn)
        return (
            <div className={"top-bar"}>
                <NavBar
                    mode="light"
                    icon={isShowBackBtn?<Icon type="left" style={{color: "#F7F8F4", fontSize: ".24rem"}}/>:""}
                    onLeftClick={onClick}
                    rightContent={rightContent}
                >{title}</NavBar>
            </div>
        )
    }
}

Topbar.defaultProps = {
    title: "",
    isShowBackBtn:true

};
Topbar.propTypes = {
    onClick: Proptypes.func.isRequired,
    title: Proptypes.string.isRequired,
    rightContent: Proptypes.any,
    isShowBackBtn:Proptypes.bool
};

export default withRouter(Topbar);

