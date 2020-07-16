import React,{ Component } from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,FlatList,Dimensions } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window');
 class TienIchKhu extends Component{
 
    render(){
        return(
           <View style={{flex:1, backgroundColor:"#F2C94D"}}>
                <View style={styles.headercontainer}>
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('KhamPha')}>
                       <Icon2 style={styles.iconback} name="back" color='black' size={26}></Icon2>
                   </TouchableOpacity>
                     <View style={{flex:3}}>
                     
                        <Text style={styles.title}> Utility area </Text>
                     </View> 
                   <TouchableOpacity onPress={() => this.props.navigation.navigate('XacNhanTT')}>
                       <Icon3 style={styles.iconbook} name="shopping-cart" color='black' size={26}></Icon3>
                   </TouchableOpacity>
               </View>
                <View style={{flex:0.9,borderRadius:10}}>
                         <FlatList
                         data={this.props.tienich}
                            keyExtractor={item => item.IDTienIchKhu.toString()}
                            renderItem={({item,index})=>{
                                return(
                                    <View >
                                        <Text style={styles.title}>{ item.TenTienIch }</Text>
                                        <Image source={{uri:item.HinhAnhTienIch}}
                                                            style={{height:300,margin:3,borderRadius:8}}>

                                        </Image>
                                       
                                    </View>
                                )}}
                         >

                         </FlatList>

                </View>
           </View>
        )
    }
}
function mapStatetoProps(state){
    return{
        //kết quả lấy từ reducer
        
        loading:state.canHoReducers.loading,
        token:state.dangNhapReducers.token,
        admin:state.dangNhapReducers.admin,
        tienich:state.tienIchKhuReducers.tienich
    }
}
export default connect(mapStatetoProps)(TienIchKhu)
const styles=StyleSheet.create({
    headercontainer:{
        flex:0.1,
        flexDirection:"row",
        backgroundColor:"#CB9D31",
        alignItems:'center' 
    },
    iconback:{
        marginLeft:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf:'center',
        justifyContent:'center', 
       
    },
    // iconbook:{
    //      marginRight:10,
    // },
    // item: {
    //     width: screenWidth - 60,
    //     height: screenWidth - 60,
        
    // },
    // imageContainer: {
    //     flex: 1,
    //     marginBottom:60,
        
    //     backgroundColor: 'white',
    //     borderRadius: 8,
    // },
    // // image: {
    // //     ...StyleSheet.absoluteFillObject,
    // //    resizeMode: 'cover',
    // // },
    // imagetienich:{
    //     borderRadius: 8,
    //     width: screenWidth - 60,
    //     height: screenWidth - 400,
    //    // height: screenWidth - 400,
    //     resizeMode: 'cover',
    // }
})

{/* <ParallaxImage
source={{ uri: item.HinhAnhTienIch }}
containerStyle={styles.imageContainer}
style={styles.image}
parallaxFactor={0.4}
{...parallaxProps}
/> */}
{/* <Carousel
//layout={'stack'} 
//layoutCardOffset={`18`} 
sliderWidth={screenWidth}
sliderHeight={screenWidth}
itemWidth={screenWidth - 60}

data={this.props.tienich}
renderItem={this._renderItem}
hasParallaxImages={true}
 /> */}
//  _renderItem ({item, index}, parallaxProps) {
//     return (
//         <View style={styles.item}>
         
//             <Text style={styles.title} 
//                  numberOfLines={1}
//                  >
//                 { item.TenTienIch }
//             </Text>
           
//             <Image
//             source={{ uri: item.HinhAnhTienIch }}
//             style={styles.imagetienich}
//             ></Image>
//         </View>
//     );
// }