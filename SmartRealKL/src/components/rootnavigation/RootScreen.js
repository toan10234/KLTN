import React, { Component } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ManHinhBatDau from './../screens/ManHinhBatDau';
import DangNhap from './../screens/DangNhap';
import DangKi from './../screens/DangKi';
import DangKi2 from './../screens/DangKi2';
import KhamPha from './../screens/tabManHinhChinh/KhamPha';
import ViTri from './../screens/tabManHinhChinh/ViTri';
import CaNhan from './../screens/tabManHinhChinh/CaNhan';
import YeuThich from './../screens/tabManHinhChinh/YeuThich';
import ViTriChiTiet from './../screens/tabChiTietDuAn/ViTriChiTiet';
import TienIchKhu from './../screens/tabChiTietDuAn/TienIchKhu';
import MauCanHo from './../screens/tabChiTietDuAn/MauCanHo';
import MatBang from './../screens/tabChiTietDuAn/MatBang';
import HoSoPhapLy from './../screens/tabChiTietDuAn/HoSoPhapLy';
import DoiMatKhau from './../screens/CaNhan/DoiMatKhau';
import ThongTinCaNhan from './../screens/CaNhan/ThongTinCaNhan';
import XacNhanDat from './../screens/XacNhanDat';
import XacNhanTT from './../screens/XacNhanTT';
import BinhLuan from './../screens/BinhLuan';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import LienHe2 from './../screens/LienHe2';
import ThemCanHo from '../screens/tabManHinhChinh/admin/ThemCanHo';
import SuaCanHo from './../screens/tabManHinhChinh/admin/SuaCanHo';
import { connect } from "react-redux";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Tab1 = createBottomTabNavigator();


function ManHinhChinh() {
    return (
      <Tab.Navigator >
        <Tab.Screen  name="KhamPha" component={KhamPha}options={{
             tabBarLabel: 'Explore',
            tabBarColor: '#F2C94D',
            
            tabBarIcon: () => (
              <Icon2 name="globe" color='#3C4856' size={27} />
            ),
          }}/>
        <Tab.Screen name="YeuThich" component={YeuThich} 
          options={{
            tabBarLabel: 'Favorite',
            tabBarColor: '#F2C94D',
            tabBarIcon: () => (
              <Icon name="heart" color='#3C4856' size={26} />
            ),
          }}
        />
        <Tab.Screen name="ViTri" component={ViTri}
        options={{
            tabBarLabel: 'Local',
            tabBarColor: '#F2C94D',
            tabBarIcon: () => (
              <Icon3 name="location" color='#3C4856' size={25} />
            ),
          }} />
        <Tab.Screen  name="CaNhan" component={CaNhan}
        // listeners={{
        //             tabPress: idtk => {
        //               console.log(`clik: ${JSON.stringify(idtk)}`)
        //                // e.preventDefault();
        //             },
        //         }}
        options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#F2C94D',
            // onTabPress: (tab) => {
            //   if (tab.index == 0) {
            //  Alert.alert("Save", "Dont forget to save your weather!");}
            // //console.log("click");
            // },
            tabBarIcon: () => (
              <Icon name="clipboard-account" color='#3C4856' size={27} />
            ),
            
          }} />
      </Tab.Navigator>
    );
  }
function ChiTietDuAn() {
    return (
      <Tab1.Navigator style={{backgroundColor:'#F2C94D'}} 
      tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'black',
          activeBackgroundColor: '#F2C94D',
          inactiveBackgroundColor:'#F2C94D',
          labelStyle:{
              fontSize: 15,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              fontWeight:'bold',
              textAlign:'center',
            },
        }}>
        <Tab1.Screen name="Location" component={ViTriChiTiet} />
        <Tab1.Screen name="Legal records" component={HoSoPhapLy}/>
        <Tab1.Screen name="Utility area" component={TienIchKhu}/>
        <Tab1.Screen name="Ground" component={MatBang} />
        <Tab1.Screen name="Apartment" component={MauCanHo} />
      </Tab1.Navigator>
    );
  }
 class RootScreen extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                  headerShown: false}} initialRouteName="ManHinhBatDau" >
                    <Stack.Screen name="ManHinhBatDau" component={ManHinhBatDau} />
                    <Stack.Screen name="DangNhap" component={DangNhap} />
                    <Stack.Screen name="DangKi" component={DangKi} />
                    <Stack.Screen name="DangKi2" component={DangKi2} />
                    <Stack.Screen name="ManHinhChinh" component={ManHinhChinh} />
                    <Stack.Screen name="ChiTietDuAn" component={ChiTietDuAn} />
                    <Stack.Screen name="DoiMatKhau" component={DoiMatKhau} />
                    <Stack.Screen name="ThongTinCaNhan" component={ThongTinCaNhan} />
                    <Stack.Screen name="XacNhanTT" component={XacNhanTT} />
                    <Stack.Screen name="XacNhanDat" component={XacNhanDat} />
                    <Stack.Screen name="BinhLuan" component={BinhLuan} />
                    <Stack.Screen name="LienHe2" component={LienHe2} />
                    <Stack.Screen name="ThemCanHo" component={ThemCanHo} />
                    <Stack.Screen name="SuaCanHo" component={SuaCanHo} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
const mapStatetoProps=(state)=>{
  return{
      //kết quả lấy từ reducer
      idtk:state.dangNhapReducers.idtk,
      err:state.dangNhapReducers.err,
      ketqua:state.dangNhapReducers.ketqua
      
  }
}
export default connect(mapStatetoProps)(RootScreen);