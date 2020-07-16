import React, { Component } from 'react'
import { View, Text ,Image,FlatList,TextInput,TouchableWithoutFeedback,Keyboard,TouchableOpacity,StyleSheet,KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Colors from './../../themes/Corlors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BinhLuanData from './../../assets/data/BinhLuandata';
import {BinhLuanAction} from './../../redux/actions';


export class BinhLuan extends Component {
    
    constructor(props){
        super(props);
        this.state={
            comment:'',
            date: '',
            };
    }
      componentDidMount() {
        var that = this;
        var date = new Date().getDate() + 1 ; //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        // var hours = new Date().getHours(); //Current Hours
        // var min = new Date().getMinutes(); //Current Minutes
        // var sec = new Date().getSeconds(); //Current Seconds
        that.setState({
          //Setting the value of the date time
          date:
            year + '-' + month + '-' + date,
        });
      }
    render() {
        
        return (
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
            <View style={{flex:1,backgroundColor:Colors.appYellow}}>
                <View style={styles.header}>
                    <Text> Comment </Text>
                </View>
                
                <View style={styles.listBinhLuan}>
                    <FlatList
                    style={{margin:7}}
                    keyExtractor={item => item.IDBinhLuan.toString()}
                    ItemSeparatorComponent={this.FlatListItemSeparator} 
                    
                    data={this.props.binhluan}
                            renderItem={({item,index})=>{
                                return(
                                   
                                    <View style={{flexDirection:'column',marginTop:5}}>
                                        <View style={{flexDirection:'row'}}>
                                            
                                            <Text style={styles.txtHoVaTen}> {item.HoVaTen} </Text>
                                            <Text style={styles.txtNoiDung}>{item.NoiDung}</Text>
                                            
                                        </View>
                                        <View>
                                             <Text style={styles.txtNgay}>{item.ThoiGianBinhLuan.slice(0,10)}</Text>
                                        </View>
                                        
                                    </View>
                                );
                            }}
                    >

                    </FlatList>
                </View>
                <View style={styles.inputContainer}>
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={{flexDirection:'row'}}>
                    <TextInput
                    style={styles.input}
                            placeholder="Enter comment ..."
                            placeholderTextColor='#F2C94D'
                            keyboardType='email-address'
                            returnKeyType='next'
                            onChangeText={(text) => this.setState({comment:text})}
                            value={this.state.comment}
                           >

                    </TextInput>
                    <TouchableOpacity onPress={()=>{
                                const {comment,date}=this.state;
                                const idThongTinTK=this.props.idThongTinTK;
                                const idCanHoBL=this.props.idCanHoBL;
                                const token=this.props.token;
                                console.log(`id can ho BL ${idCanHoBL}`)
                              if (!comment.length){
                                alert('you must  enter comment')
                                return; 
                              }
                             this.props.onBinLuan({comment,idThongTinTK,idCanHoBL,date,token})}}
                            >
                         <Icon  name="send-circle-outline" color={Colors.appYellow} size={30}></Icon>
                    </TouchableOpacity>
                    
                </View>
                </KeyboardAvoidingView>
                </View>
                
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = (state) => ({
    binhluan:state.binhLuanReducers.binhLuan,
    idCanHoBL:state.binhLuanReducers.idCanHo,
    idThongTinTK:state.thongTinTKReducers.idThongTinTK,
    token:state.dangNhapReducers.token
})
const mapDispatchToProps=(dispatch)=>{
    return{
        onBinLuan:(inputBinhLuan)=>{
            dispatch(BinhLuanAction(inputBinhLuan));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BinhLuan)

const styles=StyleSheet.create({
    header:{
        flex:0.08,
        justifyContent:"center" ,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        elevation:5,
        backgroundColor:Colors.appPrimaryColor
    },
    input:{
        height:40,
        width:"92%",
        backgroundColor:'rgba(0,0,0,0)',
        fontStyle: 'italic',
        color:'#fff',
        alignContent:"center"
    },
    inputContainer:{
        position:'absolute',
        flexDirection:'row',
        left:0,bottom:0,right:0,
        backgroundColor:Colors.appTextBlack,
        alignContent:"center"
    },
    listBinhLuan:{
        flex:0.85,
        borderRadius:5,
        margin:10,
        backgroundColor:Colors.whiteOverlay4
    },
    txtHoVaTen:{
        backgroundColor:Colors.appPrimaryColor,
        borderRadius:4,
        height:25,
        fontSize:18,
        fontWeight:'bold'
    },
    txtNgay:{
        color:'gray',
        fontSize:13
    },
    txtNoiDung:{
        marginLeft:7,
        fontSize:15
    }
});