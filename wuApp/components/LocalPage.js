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
            <Button title='�洢' onPress={this.storeData}/>
            <Button title='��ȡ' onPress={this.getData}/>
            <Button title='����title' onPress={this.getTitle}/>
            {
                this.StaticRange.tits.map((item)=>(
                <Text>{item.title}</Text>
                ))
            }
            </ScrollView>
        </View>
    )
}