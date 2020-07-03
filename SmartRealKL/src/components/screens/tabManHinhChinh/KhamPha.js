import React,{ Component } from "react";
import { View,Text,TouchableOpacity,StyleSheet,TextInput,Image,Alert,FlatList } from 'react-native';
//import ChiTietDuAn from '../ChiTietDuAn';
import flatListData from './../../../assets/data/FlatListData';
import {ToBinhLuanAction} from './../../../redux/actions'
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { connect } from "react-redux";

 class KhamPha extends Component{
    
        
    render(){
        
        return(
            <View style={styles.container}>
                        <View style={{flexDirection:"row",alignItems:'center'}}>
                            <View style={styles.containerSearch}>
                                 <TextInput style={styles.input}
                                     placeholder="Search..."
                                     placeholderTextColor='black'>
                                  </TextInput>
                                  
                                   <Icon style={styles.iconstyle} name="search" color='#3C4856' size={26}></Icon>
                                  
                            </View>
                            {(this.props.admin===1)? <TouchableOpacity onPress={()=> {this.props.navigation.navigate('BinhLuan')}}>
                                                                   <Icon2 name="home-plus" color='#EC4434' size={27} style={{margin:12}}></Icon2>
                                                                 </TouchableOpacity>:null}
                            <TouchableOpacity onPress={()=> {this.props.gotoBinhLuan}}>
                                <Icon3 style={styles.iconcontract} name="contact-phone" color='#3C4856' size={30}></Icon3>  
                            </TouchableOpacity>
                            
                        </View>
                      

                    <View   style={styles.containerInfomasion}>
                            <FlatList data={this.props.mang}
                            renderItem={({item,index})=>{
                                return(
                                    <View style={{flex:1,borderRadius:5,backgroundColor:"rgba(255,255,255,0.6)",margin:3}}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ChiTietDuAn')}>
                                              <Image source={{uri:item.HinhAnh}}
                                                            style={{height:190,margin:3,borderRadius:8}}>
                                             </Image>
                                        </TouchableOpacity>
                                        <View style={{width:'100%',position:'absolute',top:0,height:190}}>
                                                
                                                <Text style={{color:"#EC4434",fontSize:23,marginTop:10,marginLeft:10,fontWeight:'bold'}}>{item.TenCanHo}</Text>
                                                <Text style={{borderRadius:3,backgroundColor:"rgba(255,255,255,0.6)",color:"#EC4434",fontSize:18,position:'absolute',top:10,right:10,fontWeight:'bold'}}>{item.GiaTien}</Text>
                                               
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                        <View style={{width:"38%",height:75,marginLeft:3}}>
                                                            <View style={{flexDirection:"row"}}>
                                                                   <TouchableOpacity onPress={()=> {Alert.alert('Added successfully')}}>
                                                                    <Icon2 name="heart-outline" color='#EC4434' size={26} style={{marginLeft:6}}></Icon2>
                                                                  </TouchableOpacity>
                                                                  <TouchableOpacity onPress={()=> {
                                                                      this.props.gotoBinhLuan(item.IDCanHo)
                                                                      this.props.navigation.navigate('BinhLuan')}}>
                                                                   <Icon2 name="comment-text-multiple-outline" color='#EC4434' size={23} style={{marginLeft:6}}></Icon2>
                                                                 </TouchableOpacity>
                                                                 {(this.props.admin===1)? <TouchableOpacity onPress={()=> {this.props.navigation.navigate('BinhLuan')}}>
                                                                   <Icon2 name="content-save-edit-outline" color='#EC4434' size={26} style={{marginLeft:7}}></Icon2>
                                                                 </TouchableOpacity>:null}
                                                                 {(this.props.admin===1)? <TouchableOpacity onPress={()=> {this.props.navigation.navigate('BinhLuan')}}>
                                                                   <Icon2 name="delete-forever-outline" color='#EC4434' size={26} style={{marginLeft:6}}></Icon2>
                                                                 </TouchableOpacity>:null}
                                                            </View>    
                                                        
                                                          <View style={{height:"50%",width:"100%",flexDirection:"row"}}>
                                                                <View  style={styles.box}>
                                                                      <Text style={styles.textinbox}>Sq.Ft </Text>
                                                                     <Text style={styles.textinbox}>{item.DienTich}</Text>
                                                                </View>
                                                                <View style={styles.box}>
                                                                      <Text style={styles.textinbox}>Depth </Text>
                                                                      <Text style={styles.textinbox}>{item.ChieuDai}</Text>
                                                                </View>
                                                                <View style={styles.box}>
                                                                     <Text style={styles.textinbox}>Width </Text>
                                                                     <Text style={styles.textinbox}>{item.ChieuRong}</Text>
                                                                </View>
                                                                
                                                          </View>
                                                          <View style={{height:"50%",width:"100%",flexDirection:"row"}}>
                                                                 <View  style={styles.box}>
                                                                      <Text style={styles.textinbox}>Stories</Text>
                                                                     <Text style={styles.textinbox}>{item.SoTang}</Text>
                                                                </View>
                                                                <View  style={styles.box}>
                                                                      <Text style={styles.textinbox}>Beds</Text>
                                                                     <Text style={styles.textinbox}>{item.PhongNgu}</Text>
                                                                </View>
                                                                <View style={styles.box}>
                                                                      <Text style={styles.textinbox}>Garage</Text>
                                                                     <Text style={styles.textinbox}>{item.ChoDeXe}</Text>
                                                                </View>
                                                         </View>
                                             </View>
                    
                                            <View style={{width:"60%",height:100,marginLeft:7,marginTop:10}}>
                                                            <Text style={{fontStyle: 'italic',color:"rgba(0,0,0,0.6)"}}>{item.ThongTin}</Text>
                                            </View>
                                                            
                                        </View>
                                    </View>
                                );
                            }}keyExtractor={item => item.IDCanHo}
                            >

                            </FlatList>
                     </View>
                </View>
               
        )
    }
}
// const mapStatetoProps=(state)=>{
//     return{
//         //kết quả lấy từ reducer
//         idtk:state.idtk,
//         isloading:state.isloading,
//         token:state.token,
//         email:state.email,
//     }
// }
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        ketqua:state.canHoReducers.ketqua,
        loading:state.canHoReducers.loading,
        err:state.canHoReducers.err,
        mang:state.canHoReducers.mang,
        token:state.dangNhapReducers.token,
        admin:state.dangNhapReducers.admin,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        gotoBinhLuan:(inputIDCanHo)=>{
            dispatch(ToBinhLuanAction(inputIDCanHo));
        }
    }
}

export default connect(mapStatetoProps,mapDispatchToProps)(KhamPha);

const styles=StyleSheet.create({
     buttoncontainer:{
        backgroundColor:'#3C4856',
        margin:5,
        borderRadius:5
    },
    container:{
        backgroundColor:'#F2C94D',
        flex:1,
        flexDirection:'column',
    },
    input:{
        height:40,
        flex:1,
       // backgroundColor:'#3C4856',
        fontStyle: 'italic',
        color:'black',
        fontSize:16,
        borderRadius:10,
        paddingHorizontal:10,
    },
    containerSearch:{
        flexDirection:'row',
        flex:7,
        borderRadius:20,
        borderWidth: 1.5,
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        height:40,
    
    },
    iconstyle:{
        marginRight:10,
        marginLeft:10,
        marginTop:5,
    },
    containerInfomasion:{
        flex:1,
        backgroundColor:"#CB9D31",
        borderRadius:7,
        marginTop:15,
        marginLeft:15,
        marginRight:15,
    },
    containerlist:{
        flex:0.21,
        flexDirection:'row',
        backgroundColor:"#3C4856",
        borderRadius:5,
        margin:5,
    },
    containerImage:{
        flex:0.55,
        borderRadius:5,
        
    },
    Imagestyle:{
       width:120,
       height:90,
       borderRadius:5
    },
    iconcontract:{
        marginRight:20,
        marginTop:15,
        alignSelf:'center' 
    },
    box:{
        width:"33%",borderWidth:1,borderColor: 'rgba(0,0,0,0.3)'
    },
    textinbox:
    {
        color:"rgba(0,0,0,0.6)",
        fontSize:13,
        fontWeight:'bold',
        alignSelf:'center' ,
        alignItems:'center', 
    }
})