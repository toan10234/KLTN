import React, { Component } from 'react'
import { Text, View,TouchableOpacity} from 'react-native';
import Color from "./../../themes/Corlors";
export default class Test extends Component {
    render() {
        return (
            <View style={{flex:1,backgroundColor: '#FFF66F'}}>
                <Text style={{backgroundColor: Color.appRed}}> {this.props.time}</Text>
                <View>
                    <TouchableOpacity style={{backgroundColor:Color.appLightGrayColor,width:50,height:30}} 
                    onPress={()=>{this.props.ontang(1)}}>
                        <Text>tang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:Color.appLightGrayColor,width:50,height:30}}
                    onPress={()=>{this.props.ongiam(1)}}>
                        <Text>giam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
