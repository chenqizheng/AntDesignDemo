/**
 * Created by Chen on 16/8/23.
 */
import React from "react";
import 'antd-mobile/lib/flex/style';
import 'antd-mobile/lib/input-item/style';
import 'antd-mobile/lib/icon/style';
import 'antd-mobile/lib/nav-bar/style';
import 'antd-mobile/lib/button/style';
import Flex from "antd-mobile/lib/flex/index"
import InputItem from "antd-mobile/lib/input-item/index"
import Button from "antd-mobile/lib/button/index"
import NavBar from "antd-mobile/lib/nav-bar/index"
import Icon from "antd-mobile/lib/icon/index"
export default class App extends React.Component {

    render() {
        var layout = this.props.layout.layout;
        var model = this.props.model;
        var node = layout.map(function (val) {
            if (val.type == 'flex') {
                var contentNode = val.content.map(function (item) {
                    var itemNode;
                    if (item.type == 'text') {
                        var value = item.value.replace("$", "");
                        console.log(value)
                        itemNode = <Button>{ model[value]}</Button>
                    } else {
                        var hint = item.hint.replace("$", "");
                        itemNode = <InputItem
                            placeholder={model[hint]}
                            clear
                            maxLength={10}
                            onBlur={function (e) {
                                console.log('onBlur');
                                console.log(e);
                            }}
                            onFocus={function (e) {
                                console.log('onFocus');
                                console.log(e);
                            }}
                        ></InputItem>
                    }
                    return <Flex.Item key={item.id}>{
                        itemNode
                    }</Flex.Item>
                })
                return <Flex>{contentNode}</Flex>
            }
        })
        var novBar = <NavBar iconName={false}
                             rightContent={[<Icon key="2" type="plus"/>]}
        >NavBar</NavBar>

        return <div>{novBar}{node}</div>;
    }
}

