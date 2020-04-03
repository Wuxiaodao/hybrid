import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
  } from 'react-native';
  import {Router, Scene, Tabs} from 'react-native-router-flux';
  import Per from './Per';
  import Fa from './Fa';

const Root = () => {
    return (
      <Router>
        {/* 这种写法是将全部的跳转页面都放在Root下面 */}
        <Scene key="root" hideNavBar>
          {/* key 就是给页面的标签,供Actions使用 */}
          {/* component 设置关联的页面 */}
          {/* title 就是给页面标题 */}
          {/* initial 就是设置默认页面*/}
          <Scene
            key="one"
            component={Per}
            title="我的发布"
            initial={true}
          />
          <Scene key="two" component={Fa} title="PageTwo" />
        </Scene>
      </Router>
    );
  };
  export default Root;