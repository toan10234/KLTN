import React,{ Component } from "react";
import { View,Text,StyleSheet ,FlatList,Image,TouchableOpacity,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import flatListData from './../../../assets/data/FlatListData';
import {ActiondDeleteYeuThich} from './../../../redux/actions';
import { connect } from "react-redux";
import {ActionGoToChiTiet} from './../../../redux/actions';
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
                        keyExtractor={item => item.IDYeuThich.toString()}
                            renderItem={({item,index})=>{
                                return(
                                    <View style={{flex:1,borderRadius:5,backgroundColor:"#3C4856",margin:3,flexDirection:"row"}}>
                                        <Image source={{uri:item.HinhAnh}}
                                        style={{width:100,height:60,margin:3,borderRadius:5}}></Image>
                                            <View style={{flexDirection:"row",flex:1}}>
                                                <TouchableOpacity onPress={() => {
                                                    const IDCanHo=item.IDCanHo;
                                                    this.props.gotoChitiet(IDCanHo)
                                                    this.props.navigation.navigate('ChiTietDuAn')
                                                }}>
                                                    <Text style={{color:"black",fontSize:18}}>{item.TenCanHo}</Text>
                                                </TouchableOpacity>
                                                        <View style={styles.iconstyle}>
                                                            <TouchableOpacity onPress={()=> {
                                                                        const IDCanHo=item.IDCanHo;
                                                                        const idTK=this.props.idTK;
                                                                        const token=this.props.token;
                                                                        this.props.deleteYeuThich({IDCanHo,idTK,token})
                                                                Alert.alert('Deleted successfully')}}>
                                                                <Icon  name="closesquare" color='#CB9D31' size={26} />
                                                            </TouchableOpacity>
                                                        </View>
                                            </View>
                                    </View>
                                );
                            }}
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
        token:state.dangNhapReducers.token,
        idTK:state.dangNhapReducers.idTK,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteYeuThich:(inputDeleteYeuThich)=>{
            dispatch(ActiondDeleteYeuThich(inputDeleteYeuThich));
        },
        gotoChitiet:(IDCanHo)=>{
            dispatch(ActionGoToChiTiet(IDCanHo))
        }
       
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(YeuThich)
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