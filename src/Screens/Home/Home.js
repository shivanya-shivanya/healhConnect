import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <Text style={[styles.steps,{fontWeight:'500' }]}>Steps for next policy cycle</Text>
          <View style={{ justifyContent: 'center' }}>
            <Image source={require('../../assets/images/info.png')} style={[styles.infoIcon, { tintColor: '#fff', width: 15, height: 15 }]} />
          </View>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignSelf: "flex-start", width: '85%', alignSelf: 'center' }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/steps.png')} style={[styles.infoIcon, { marginLeft: 0}]} />
              <Text style={[styles.steps, { paddingLeft: 5, justifyContent: 'center',fontWeight:'500',alignSelf:'center'  }]}>4,32,063</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/points.png')} style={[styles.infoIcon,{width: 25, height: 28,marginRight:5,marginLeft:0}]} />
              <Text style={[styles.steps, { paddingLeft: 0,fontWeight:'500',alignSelf:'center',alignSelf:'center'}]}>432</Text>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/discount.png')} style={[styles.infoIcon, { width: 25, height: 28}]} />
              <Text style={[styles.steps, { paddingLeft: 0,justifyContent: 'center',fontWeight:'500',alignSelf:'center'}]}>0.0%</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 0 }}>
          <View style={{ width: '35%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={[styles.steps, { width: '60%', paddingLeft: 0,fontWeight:'500' }]}>Steps Taken</Text>
          </View>
          <View style={{ width: '35%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={[styles.steps, { width: '60%', paddingLeft: 0,fontWeight:'500'  }]}>Health Points</Text>
          </View>
          <View style={{ width: '35%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Text style={[styles.steps, { width: '60%', paddingLeft: 0,fontWeight:'500'  }]}>Current Discount</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15, backgroundColor: '#437DDE', padding: 12, borderRadius: 10 }}>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Image source={require('../../assets/images/reconnect.png')} style={[styles.reconnectIcon]} />
              <Text style={[styles.reconnectText, { paddingLeft: 5, color: '#E9BF6E' }]}>Reconnect</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={()=>navigation.navigate('DetailScreen') } >
            <Text style={styles.view}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.healthCard}>
        <Text style={{ textDecorationLine: 'underline', textDecorationColor: '#8285B7', marginTop: 12, textAlign: 'center', color: '#8285B7' }}>1154</Text>
        <Text style={{ fontSize: 14, width: '70%', alignSelf: 'center', textAlign: 'center', justifyContent: 'center', marginLeft: -8,fontWeight:'500' }}> health points applicable for upcoming renewal on 10 May, 2024.</Text>
      </View>
     <View style={{}}>
      <Image source={require('../../assets/images/newss.png')} style={{width:Dimensions.get('screen').width-10,resizeMode:'contain',alignSelf:'center'}}/>
     </View>
     <View style={{alignSelf:'center',marginTop:-90}}>
      <Image source={require('../../assets/images/card.png')} style={{width:Dimensions.get('screen').width-10,resizeMode:'contain'}}/>
     </View>
     <View style={{alignSelf:'center',marginTop:-90}}>
      <Image source={require('../../assets/images/wellness.png')} style={{width:Dimensions.get('screen').width-10,resizeMode:'contain'}}/>
     </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#4372ED',
    // padding: 20,
    marginTop: 30
  },
  steps: { fontSize: 14, color: '#fff', fontWeight: '300', paddingLeft: 15 },
  infoIcon: { width: 25, height: 25, resizeMode: 'contain', marginLeft: 8 },
  reconnectIcon: { width: 18, height: 18, resizeMode: 'contain' },
  reconnectText: { fontSize: 14, color: '#fff', fontWeight: '500' },
  view: { textDecorationLine: 'underline', textDecorationColor: '#E9BF6E', color: '#E9BF6E', fontSize: 13, fontWeight: '500' },
  healthCard: {
    flexDirection: 'row', marginTop: 15, borderRadius: 10, backgroundColor: '#F8F0E7', width: '95%', alignSelf: 'center', height: 60, justifyContent: 'center'
  },
  Icon: { width: 60, height: 60, resizeMode: 'contain' }
});