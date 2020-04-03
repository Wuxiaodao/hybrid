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
        {/* ����д���ǽ�ȫ������תҳ�涼����Root���� */}
        <Scene key="root" hideNavBar>
          {/* key ���Ǹ�ҳ��ı�ǩ,��Actionsʹ�� */}
          {/* component ���ù�����ҳ�� */}
          {/* title ���Ǹ�ҳ����� */}
          {/* initial ��������Ĭ��ҳ��*/}
          <Scene
            key="one"
            component={Per}
            title="�ҵķ���"
            initial={true}
          />
          <Scene key="two" component={Fa} title="PageTwo" />
        </Scene>
      </Router>
    );
  };
  export default Root;