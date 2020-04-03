/**
 * Sample React Native App
 * https://github.com/facebook/react-native     //原码
 *
 * @format
 * @flow
 */
import {Router, Scene, Tabs} from 'react-native-router-flux';
import React,{useState,useEffect} from 'react';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import Doc from './components/Doc';
import Car from './components/Car';
import Per from './components/Per';
import Fa from './components/Fa';
import SplashScreen from 'react-native-splash-screen'
import {
  StyleSheet,
  Image,
} from 'react-native';
console.disableYellowBox = true;
// JS
// TypeScript 更加严谨
// RN、Angular、Vue3都是基于TypeScript
//
const styles = StyleSheet.create({

	
  });

const App = () => {   // App: () => React$Node这是在给App指定类型
  useEffect(()=>{
	SplashScreen.hide();
  },[])
  return (
    <>
  <Router>
	  
  <Scene key="root">
	  
				<Tabs 
					key='tabbar'
					hideNavBar
					activeTintColor="red"
					inactiveTintColor="#767676"
					tabBarStyle={{backgroundColor:'#ffffff'}}
				>
					{/* 消息栏 */}
					
					<Scene key='msg' hideNavBar
						title='消息'
						icon={
							()=><Image style={{width:20,height:20}} source={require('./assets/icon/t1.png')}
							/>
						}
					>
						

						<Scene key="ms" component={Msg}/>
						<Scene 
							key="msgdetail" 
							hideTabBar    
							component={MsgDetail}
						/>
					</Scene>
					{/* 文档栏 */}
          				<Scene key='doc' hideNavBar title='商品分类'
						icon={
							()=><Image style={{width:20,height:20}} source={require('./assets/icon/t2.png')}
							/>
						}
						>
						
						<Scene key="docs" component={Doc}/>
					</Scene>
          {/* 购物车栏 */}
					<Scene key='car' hideNavBar title='购物车'
						icon={()=><Image style={{width:20,height:20}} source={require('./assets/icon/t3.png')}
						/>
					}
						>
						<Scene key="docs" component={Car}/>
					</Scene>
          {/* 个人栏 */}
					<Scene key='per' title='个人中心'
						icon={()=><Image style={{width:20,height:20}} source={require('./assets/icon/t4.png')}
						/>
				}
						>
							
						<Scene key="docs" hideNavBar component={Per}/>
						<Scene key='two' hideTabBar component={Fa}/>
					</Scene>
				</Tabs>
			</Scene>
    
  </Router>
    
      
      
	</>
  );
};


export default App;