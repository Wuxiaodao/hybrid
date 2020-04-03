import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
	box:{
	  width:"46%",
    height:245,
    margin:5,
	  backgroundColor:'white'
	},
	txt:{
	  color:'red',
	  
	},
	size:{
	  fontSize:18
	}
	
  });
  


export default class Doc extends Component {
    render() {
        return (
            <>
      <StatusBar backgroundColor="#f23030" barStyle="dark-content" />   
      <SafeAreaView>
        <ScrollView>
          {/* 钉钉顶部搜索 */}
        <View style={{backgroundColor:'white',height:56,width:480}}>
        <View style={{
          flexDirection:'row',
          height:40,
          justifyContent:'center'
        }}>
            <View style={{
			  marginTop:10,
              width:'80%',
              marginLeft:10,
              backgroundColor:'#eeeeee',
              flexDirection:'row',
              alignItems:'center',
              borderRadius:6,
              paddingLeft:20
            }}>
              <TextInput placeholderTextColor='#999999' placeholder='请输入商品名称'/>
			  <Image style={{width:20,height:20,marginLeft:195}} source={require('../assets/01.png')}/>
			  

            </View>
            
        </View>
        </View>
		<View>
			<View style={{
				borderWidth:0.5,
        borderHeight:0.5,
        height:50,
				border:1,
				borderColor:'#dedede',
				backgroundColor:'white'}}>
				<Text style={{marginTop:15,marginLeft:60,color:'red'}}>综合</Text>
				<Text style={{marginLeft:165,marginTop:-19}}>销量</Text>
				<Text style={{marginTop:-19,marginLeft:280}}>新品</Text>
				<Text style={{marginTop:-19,marginLeft:388}}>价格</Text></View>
		</View>

          {/* flex布局*/}
          {/*在rn中，View 默认设置了flex属性，默认主轴是竖轴*/}
          <View style={{
					marginTop:5,
					flexDirection:'row',
					justifyContent:"space-evenly",
					flexWrap:'wrap'
				}}>
					<View style={styles.box}>
					<Image style={{width:216,height:175}} source={require('../assets/icon/tu1.png')}/>
						<Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
					</View>
					<View style={styles.box}>
          <Image style={{width:216,height:175}} source={require('../assets/icon/tu2.png')}/>
          <Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
						
					</View>
					<View style={styles.box}>
					<Image style={{width:216,height:175}} source={require('../assets/icon/tu1.png')}/>
						<Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
					</View>
					<View style={styles.box}>
					<Image style={{width:216,height:175}} source={require('../assets/icon/tu2.png')}/>
          <Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
					</View>
          <View style={styles.box}>
					<Image style={{width:216,height:175}} source={require('../assets/icon/tu1.png')}/>
						<Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
					</View>
					<View style={styles.box}>
					<Image style={{width:216,height:175}} source={require('../assets/icon/tu2.png')}/>
          <Text style={{color:'#666666',marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={{color:'red',marginLeft:10,marginTop:5}}>36.00</Text>
					</View>
					
				</View>
        </ScrollView>
      </SafeAreaView>
    </>
        )
    }
}