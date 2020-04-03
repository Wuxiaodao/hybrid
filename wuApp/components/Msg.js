import React, { Component } from 'react';
import { Carousel, WingBlank, Button } from '@ant-design/react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    View,
    Text,
    StatusBar,
    Image,} from 'react-native';

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
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
export default class Msg extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
             
            <SafeAreaView>
              <ScrollView>
                {/* 钉钉顶部搜索 */}
              <View style={{backgroundColor:'#f23030',height:56,width:480}}>
              <View style={{
                flexDirection:'row',
                height:45,
                justifyContent:'center'
              }}>
                  <View style={{
                    marginTop:10,
                    width:'74%',
                    marginLeft:10,
                    backgroundColor:'#fbb8b8',
                    flexDirection:'row',
                    alignItems:'center',
                    borderRadius:16,
                    paddingLeft:20
                  }}>
                    
                    <Image style={{width:20,height:20}} source={require('../assets/icon/11.png')}/>
                    <TextInput placeholderTextColor='#ffffff' placeholder='请输入您要搜索的关键字'/>
                    
      
                  </View>
                  <Image style={{width:25,height:25,marginLeft:15,marginTop:15}} source={require('../assets/icon/five.png')}/>
              </View>
              
              </View>
              <View style={{width:480,height:250,backgroundColor:'yellow'}}>
                  {/*轮播图*/}
              <Carousel
            style={styles.wrapper}
            selectedIndex={2}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
          >
            <View>
              <Image style={{width:480,height:250}} source={require('../assets/icon/lunbo2.png')}/>
            </View>
            <View>
              <Image style={{width:480,height:250}} source={require('../assets/icon/lunbo1.png')}/>
            </View>
            <View>
              <Image style={{width:480,height:250}} source={require('../assets/icon/lunbo2.png')}/>
            </View>
          </Carousel>
              </View>
              <View style={{width:480,height:90,backgroundColor:'white',marginTop:7}}>
              <Image style={{width:75,height:75,marginTop:7,marginLeft:15}} source={require('../assets/icon/one.png')}/>
              <Text style={{marginLeft:120,marginTop:-50,fontSize:17}}>居家维修保养</Text>
              <Image style={{width:25,height:25,marginTop:-23,marginLeft:440}} source={require('../assets/icon/you.png')}/>

              </View>
              <View style={{width:480,height:90,backgroundColor:'white',marginTop:7}}>
              <Image style={{width:75,height:75,marginTop:7,marginLeft:15}} source={require('../assets/icon/two.png')}/>
              <Text style={{marginLeft:120,marginTop:-50,fontSize:17}}>住宿优惠</Text>
              <Image style={{width:25,height:25,marginTop:-23,marginLeft:440}} source={require('../assets/icon/you.png')}/>

              </View>
              <View style={{width:480,height:90,backgroundColor:'white',marginTop:7}}>
              <Image style={{width:75,height:75,marginTop:7,marginLeft:15}} source={require('../assets/icon/three.png')}/>
              <Text style={{marginLeft:120,marginTop:-50,fontSize:17}}>出行接送</Text>
              <Image style={{width:25,height:25,marginTop:-23,marginLeft:440}} source={require('../assets/icon/you.png')}/>

              </View>
              <View style={{width:480,height:90,backgroundColor:'white',marginTop:7}}>
              <Image style={{width:75,height:75,marginTop:7,marginLeft:15}} source={require('../assets/icon/four.png')}/>
              <Text style={{marginLeft:120,marginTop:-50,fontSize:17}}>E族活动</Text>
              <Image style={{width:25,height:25,marginTop:-23,marginLeft:440}} source={require('../assets/icon/you.png')}/>

              </View>
              <View>
                  <Button style={{width:400,height:45,backgroundColor:'#f23030',marginLeft:35,marginTop:15}}>
                      <Text style={{color:'#ffffff'}}>发布需求</Text></Button>
                  
              </View>
              <View>
                  <Text style={{marginTop:30,fontSize:12,textAlign:'center',color:'#767676',marginBottom:15}}>©E族之家 版权所有</Text>
              </View>
              
              </ScrollView>
            </SafeAreaView>
          </>
        )
    }
}
