import { ScrollView } from "react-native"

getTitle = () =>{
    fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.ListeningStateChangedEvent({tits:res.data})
        })
}
render(){
    return(
        <View>
            <ScrollView>
            <Button title='´æ´¢' onPress={this.storeData}/>
            <Button title='»ñÈ¡' onPress={this.getData}/>
            <Button title='ÇëÇótitle' onPress={this.getTitle}/>
            {
                this.StaticRange.tits.map((item)=>(
                <Text>{item.title}</Text>
                ))
            }
            </ScrollView>
        </View>
    )
}