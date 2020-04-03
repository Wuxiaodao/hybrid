import React, { Component } from 'react'
import {View,Text,Image,StyleSheet,StatusBar,SafeAreaView,ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
var photoOption = {
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',

}
const styles = StyleSheet.create({
	
    iconStyle:{
        fontFamily:'iconfont',
        fontSize:24,
        lineHeight:40,
        marginLeft:10
  
	}
	
  });
  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  paizhao=()=>{
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      return;
      } else if (response.error) {
       console.log('Error:', response.error);
       } else if (response.customButton) {
       console.log('custom:', response.customButton);
       } else {
          
         const source = { uri: response.uri };
         this.setState({
              avatarSource: source,
       });
           }
        });
     }

export default class Per extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
            <SafeAreaView>
              <ScrollView>
            <View style={{width:480,height:282,backgroundColor:'#f23030'}}>
                <Image style={{width:125,height:125,marginTop:40,marginLeft:180}} source={require('../assets/icon/tou.png')}/>
                <Text style={{color:'white',fontSize:24,marginTop:10,textAlign:'center'}}>BINNU DHILLON</Text>
            </View>
            <View style={{
				borderWidth:0.8,
                borderHeight:0.8,
                height:80,
				border:1,
				borderColor:'#eeeeee',
				backgroundColor:'white'}}>
                    <Image style={{width:35,height:35,marginTop:17,marginLeft:18}} source={require('../assets/icon/ren.png')}/>
                    <Text style={{fontSize:22,marginLeft:70,marginTop:-30}}>我的个人中心</Text>
                    </View>
                    <View style={{width:480,height:300,backgroundColor:'white'}}>
                        <Text style={[styles.iconStyle,{marginLeft:70,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:53,color:'#4f4f4f'}}>账户管理</Text>
                        <Text style={[styles.iconStyle,{marginLeft:70,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:53,color:'#4f4f4f'}}>我的订单</Text>
                        <Text style={[styles.iconStyle,{marginLeft:70,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:53,color:'#4f4f4f'}}>我的收藏</Text>
                        <Text style={[styles.iconStyle,{marginLeft:233,marginTop:-218,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:220,color:'#4f4f4f'}}>收货地址</Text>
                        <Text style={[styles.iconStyle,{marginLeft:233,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:213,color:'#4f4f4f'}}>我的二维码</Text>
                        
                        <Text style={[styles.iconStyle,{marginLeft:385,marginTop:-138,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:370,color:'#4f4f4f'}}>我的信息</Text>
                        <Text style={[styles.iconStyle,{marginLeft:385,marginTop:19,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:370,color:'#4f4f4f'}}>我的积分</Text>
                    </View>
                    <View style={{
                        marginTop:7,
                        borderWidth:0.8,
                        borderHeight:0.8,
                        height:80,
                        border:1,
                        borderColor:'#eeeeee',
                        backgroundColor:'white'}}>
                    <Image style={{width:35,height:35,marginTop:17,marginLeft:18}} source={require('../assets/icon/ai.png')}/>
                    <Text style={{fontSize:22,marginLeft:70,marginTop:-30}}>E族活动</Text>
                    </View>
                    <View style={{width:480,height:218,backgroundColor:'white'}}>
                    <Text style={[styles.iconStyle,{marginLeft:70,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:42,color:'#4f4f4f'}}>居家维修保养</Text>
                        <Text style={[styles.iconStyle,{marginLeft:70,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:42,color:'#4f4f4f'}}>我的住宿优惠</Text>
                        <Text style={[styles.iconStyle,{marginLeft:233,marginTop:-138,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:218,color:'#4f4f4f'}}>出行接送</Text>
                        <Text style={[styles.iconStyle,{marginLeft:233,marginTop:20,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:218,color:'#4f4f4f'}}>我的活动</Text>
                        <Text style={[styles.iconStyle,{marginLeft:385,marginTop:-138,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text style={{marginLeft:365,color:'#4f4f4f'}}>我的受赠人</Text>
                        <Text style={[styles.iconStyle,{marginLeft:385,marginTop:19,width:40,height:40,color:'#aeaeae'}]}>{'\ue87c'}</Text>
                        <Text onPress={()=>Actions.two()} style={{marginLeft:370,color:'#4f4f4f'}}>我的发布</Text>
                        
                    </View>
                    <View>
                  <Text style={{marginTop:18,fontSize:12,textAlign:'center',color:'#767676',marginBottom:15}}>BINNU DHILLON | 退出</Text>
              </View>
              </ScrollView>
              </SafeAreaView>
            </>
        )
    }
}