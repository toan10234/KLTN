import React,{ Component } from "react";
import { View,Text,StyleSheet ,FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import flatListData from './../../../assets/data/FlatListData';
import { connect } from "react-redux";
//import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
 class YeuThich extends Component{
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.txtheader}> Favorite </Text>
            </View>
            <View style={styles.container}>
                <View style={styles.containerList}>
                
                        <FlatList data={this.props.yeuthich}
                            renderItem={({item,index})=>{
                                return(
                                    <View style={{flex:1,borderRadius:5,backgroundColor:"#3C4856",margin:3,flexDirection:"row"}}>
                                        <Image source={{uri:item.HinhAnh}}
                                        style={{width:80,height:40,margin:3,borderRadius:5}}></Image>
                                            <View style={{flexDirection:"row",flex:1}}>
                                                <TouchableOpacity onPress={() => this.props.navigation.navigate('ChiTietDuAn')}>
                                                    <Text style={{color:"black",fontSize:18}}>{item.TenCanHo}</Text>
                                                </TouchableOpacity>
                                                        <View style={styles.iconstyle}>
                                                            <TouchableOpacity onPress={()=> {Alert.alert('Deleted successfully')}}>
                                                                <Icon  name="closesquare" color='#CB9D31' size={26} />
                                                            </TouchableOpacity>
                                                        </View>
                                            </View>
                                    </View>
                                );
                            }}keyExtractor={item => item.IDYeuThich}
                            >
                            </FlatList>
               
                </View>
            </View>
            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        yeuthich:state.yeuThichReducers.yeuThich,
    }
}
export default connect(mapStatetoProps)(YeuThich)
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column'
    },
    containerinfomation:{
        flexDirection:'row',
        flex:0.2,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#3C4856",
    },
    containerList:{
       flex:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:"#CB9D31",
    },
    imagescontainer:{
        flex:0.4,
        marginLeft:5,
        marginRight:5,
        backgroundColor:"green",
        borderRadius:5,
        borderWidth: 1,
    },
    textInfomation:{
        fontWeight:'bold',
        fontSize:18,
    },
    iconstyle:{
        position:'absolute',
        right:10,
        bottom:10,
        top:10
    },
    header:{
         flexDirection:'row',
        flex:0.09,
        justifyContent:"center" ,
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        borderRadius:5,
        elevation:5,
    },
    txtheader:{
        textAlign:'center',
        fontWeight:'bold',
         fontSize:25,
        color:"black",
    }
})