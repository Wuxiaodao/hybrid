import React,{Component} from 'react'
import {Text,View} from 'react-native'

const str = 'abc';
let num:number = 100;

let arr:Array<string> = ['1,2,3']

// let hybird:course = {
//     title:'hybird',
//     intro:'���Ӧ�ÿ���',
//     name:100
// }
function fun(pa1:string,pa2:number):boolean{
    return true;
}

// interface MyFunc {
//     (param1:string):boolean
// }
// let fun:MyFunc = function(pa:string){
//     return true;
// }
export default class MyTs extends Component{
    render(){
        return(
            <View>
                <Text> textInComponent{num}</Text>
            </View>
        )
    }
}import React, { Component } from 'react'
import { Text, View } from 'react-native'

// ��������
const str = 'abc';
let num:number = 100;

// let arr:Array<number> = [1,3]
let arr:string[] = ['aaa','bbb']

// let obj: object = {name:'zhangsan'}
let obj: {name:string} = {name:'zhangsan'}
// Ԫ��
let tupleArr:[string,number,boolean] = ['ss',2,true]


// enum Lev {one=100,two=200,three};
// let myLev:Lev = Lev.two;
// console.log(myLev)
// enum week {ri,yi,er};

// any 
let a: any = 'any type';

// �ӿ�
interface Course{
    title:string,
    intro:string,
    num?:number,
    [propName:string]:any
}

let hybird: Course = {
    title:'hybrid',
    intro: '���Ӧ�ÿ���',
    name:100
}

// ��������
// function fun(pa1:string,pa2:number):boolean{
//     return true;
// }
// fun(12,3);

// interface MyFunc {
//     (params1:string):boolean
// }

// let fun:MyFunc = function(pa:string){

//     return true;
// }

interface Person{
    name: string,
    age: number,
}

interface User extends Person{
    pwd: string
}
// implements ʵ��
class User1 implements User{
    name = 'zhangsan';
    age = 20;
    pwd = '1234566'
}
console.log(new User1())

// �̳У�extends��
// ��ʵ�ֽӿ�
// �ӿڼ̳нӿ�
// �ӿڼ̳���

interface User2 extends User1{
    work:string
}

interface Props{
    name:string
}



export default class MyTs extends Component<Props> {
    render() {
        return (
            <View>
                <Text
                    style={{fontSize:20}}
                > 
                    textInComponent{arr}{obj.name} 
                </Text>
            </View>
        )
    }
}