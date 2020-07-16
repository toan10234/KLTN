import React, { Component } from 'react'
import { Text, View ,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux';
import {ActionDatCoc} from './../../redux/actions';
 class XacNhanDat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                   <Image style={styles.logo}
                   source={{uri:this.props.hinhanh}}/>
                </View>
                <View style={styles.infomationcontainer}>
                    <Text style={styles.textcontainer}>Apartment name : {this.props.tencanho}</Text>
                    
                    <Text style={styles.textcontainer}>Apartment price : ${this.props.giatien}</Text>
                   
                   
                </View>{console.log(`hinh anh can ho xac nhan dat ${this.props.hinhanh}`)}
                <View style={styles.buttoncontainer}>
                    <TouchableOpacity    style={styles.button}
                        onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                        <Text style={styles.textbtn}>Cancel</Text>
                        
                   </TouchableOpacity>
                   <TouchableOpacity    style={styles.button}
                        onPress={() => 
                        {
                            const idcanho=this.props.idcanho;
                            const token=this.props.token;
                            this.props.onDatCoc({idcanho,token})
                            this.props.navigation.navigate('KhamPha')

                        }
                        }>
                        <Text style={styles.textbtn}>Book now</Text>
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
     
      token:state.dangNhapReducers.token,
      //  idTK:state.dangNhapReducers.idTK,
      idcanho:state.canHoReducers.idCanHo,
      hinhanh:state.canHoReducers.hinhanh,
      giatien:state.canHoReducers.giatien,
      tencanho:state.canHoReducers.tencanho

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onDatCoc:(inputDatCoc)=>{
            dispatch(ActionDatCoc(inputDatCoc));
        },     
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(XacNhanDat)
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2C94D'
    },
    imagecontainer:{
        flex:0.4,
         justifyContent:"center" ,
         alignItems:'center', 
    },
    infomationcontainer:{
        flex:0.3,
        marginLeft:30,
        
    },
    buttoncontainer:{
        flex:0.1,
        flexDirection:'row',
        justifyContent:"space-around",
    },
    textcontainer:{
        fontSize:18,
        fontWeight:'bold',
    },
    button:{
        flex:0.4,
        margin:5,
        borderRadius:5,
        borderWidth: 2,
        elevation:2,
        justifyContent:"center" ,
    },
    textbtn:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:"black",
    },
      textbtn:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18,
        color:"black",
    },
    logo:{
        height:200,
        width:300,
        borderRadius:10
    }
})
