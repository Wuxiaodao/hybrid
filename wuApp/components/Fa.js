import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    AsyncStorage,
    hidden,
    Image,} from 'react-native';
    const styles = StyleSheet.create({
	
        iconStyle:{
            fontFamily:'iconfont',
            fontSize:24,
            lineHeight:40,
            marginLeft:10
      
        }
        
      });
export default class Fa extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        };
    }
    getTitle = ()=>{
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
                
            })
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics')
        .then((res)=>res.json())
        .then((res)=>{
            this.getTitle({
                tits:res.data
            })
        })
    }
    render() {
      return (
          <>
        <StatusBar backgroundColor="#f23030" barStyle="dark-content" />
             
            <SafeAreaView>
              <ScrollView>
              {/* <View style={{backgroundColor:'#f23030',height:56,width:480}}>
              <View>
                  
              </View>
              
              </View> */}
              <View>
                <StatusBar backgroundColor='transparent' translucent={true}/>
                <ScrollView style={{backgroundColor:'white',height:'40%'}}>
            
                
                    {
                        this.state.tits.map((item)=>(
                            <Text>
                            <Text style={styles.recentText} style={{fontSize:15,marginLeft:5,lineHeight:30}}>
                                {item.title ? (item.title.length > 15 ? item.title.substr(0,15) + "..." : item.title) : ''}</Text>
                            <Text style={{marginLeft:100,fontSize:15,float:'left'}}>{item.create_at.slice(0,10)}</Text>
                            </Text>

                        ))
                    }
                   
                </ScrollView>
                <View style={{backgroundColor:'white',height:'10%'}}>
                
                </View>
            </View>
              </ScrollView>
              </SafeAreaView>
              </>
      )
    }
  }