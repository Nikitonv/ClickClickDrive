import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (    
    <View style={styles.title}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.titles}>Mobile App Name
            </Text>
            <Image style={{marginLeft:55, marginTop:38}}  source={require("./cogwheel.png")} />
            
          </View>
                    <View style={styles.feedback}>
                      <Button 
                        title="Support and feedback"
                        color="#354353"
                        onPress={() => Alert.alert('Support and feedback')}
                      />
                    </View>                  
                    <View>
                      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Statistik')}}>
                        <View style={{flexDirection: 'column'}}>
                        <Text style={styles.inside}>Statistik</Text>
                        <Text style={styles.secondinside}>Dir Deinen Lernfortschritt</Text>
                           </View> 
                           <Image style={{marginLeft:45, }}  source={require("./one.png")} />
                      </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button2} onPress={()=>{navigation.navigate('Checkliste')}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={styles.inside}>Checkliste</Text>
                            <Text style={styles.secondinside}>Alle Schritte zum Fuhrerschein</Text>
                           </View> 
                           <Image  style={{marginLeft:15 }}  source={require("./two.png") }/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button3} onPress={()=>{navigation.navigate('Training')}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={styles.inside}>Training</Text>
                            <Text style={styles.secondinside}>Schritt für Schritt</Text>
                           </View> 
                           <Image style={{marginLeft:115 }} source={require("./three.png") }/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button4} onPress={()=>{navigation.navigate('Fragenliste')}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={styles.inside}>Fragenliste</Text>
                            <Text style={styles.secondinside}>Alle Fragen auf einen Blick</Text>
                           </View> 
                           <Image style={{marginLeft:45 }}  resizeMode='contain' source={require("./four.png") }/>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.button5} onPress={()=>{navigation.navigate('Prüfung')}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text style={styles.inside}>Prüfung</Text>
                            <Text style={styles.secondinside}>Offizielle Prüfungssimulation</Text>
                           </View> 
                           <Image style={{marginLeft:35 }}  resizeMode='contain' source={require("./five.png") }/>
                        </TouchableOpacity>
                    </View>
            <StatusBar style='auto' />
        </View>
    </View>  
  );
}

function Statistik() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.inside}>Statistik</Text>
       <Text style={styles.secondinside}>Dir Deinen Lernfortschritt</Text>
    </View> 
    </View>
  );
}
function Checkliste() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.inside}>Checkliste</Text>
       <Text style={styles.secondinside}>Alle Schritte zum Fuhrerschein</Text>
    </View> 
    </View>
  );
}

function Training() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.inside}>Training</Text>
       <Text style={styles.secondinside}>Schritt für Schritt</Text>
    </View> 
    </View>
  );
}

function Fragenliste() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.inside}>Fragenliste</Text>
       <Text style={styles.secondinside}>Alle Fragen auf einen Blick</Text>
    </View> 
    </View>
  );
}

function Prüfung() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{flexDirection: 'column'}}>
       <Text style={styles.inside}>Prüfung</Text>
       <Text style={styles.secondinside}>Offizielle Prüfungssimulation</Text>
    </View> 
    </View>
  );
}

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Statistik" component={Statistik}/>
        <Stack.Screen name="Checkliste" component={Checkliste} />
        <Stack.Screen name="Training" component={Training} />
        <Stack.Screen name="Fragenliste" component={Statistik} />
        <Stack.Screen name="Prüfung" component={Prüfung} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#cfefe4',
    borderRadius: 20,
    flexDirection:"row",
    justifyContent:'center',
    paddingVertical: 7,
    marginBottom: 16
  },
  button2: {
    backgroundColor: '#f2e9e1',
    borderRadius: 20,
    flexDirection:"row",
    //alignItems:'center',
    justifyContent:'center',
    paddingVertical: 7,
    marginBottom: 16
    //flex:1
  },
  button3: {
    backgroundColor: '#fcdadd',
    borderRadius: 20,
    flexDirection:"row",
    justifyContent:'center',
    paddingVertical: 7,
    marginBottom: 16,
  },
  button4: {
    backgroundColor: '#bfedfb',
    borderRadius: 20,
    flexDirection:"row",
    justifyContent:'center',
    paddingVertical: 7,
    marginBottom: 16
    //flex:1
  },
  button5: {
    backgroundColor: '#dfeefe',
    borderRadius: 20,
    flexDirection:"row",
    justifyContent:'center',
    paddingVertical: 7,
    marginBottom: 16,
  },
  inside: {
    //marginLeft: '8%',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#354353',
    fontSize: 20,
    marginTop: 12,
    textAlign: 'left'
  },
  secondinside: {
    //marginLeft: '8%',
    fontFamily: 'Arial',
    color: '#354353',
    fontSize: 16,
    marginTop: 4,
    textAlign: 'left'
  },
  inside2: {
    marginLeft: '5%',
    fontFamily: 'Arial',
    //fontWeight: 'bold',
    color: '#354353',
    fontSize: 16,
    //marginTop: 4
  },
  image: {
    justifyContent: 'center',
    marginLeft: 70,
    marginLeft: '42%',
    //flex:4.2
  },
  title: {
    //flex: 1,
    //marginTop: '1%',
    backgroundColor: '#f4f7f9',
    paddingHorizontal: 15,
  },
  titles: {
    marginTop: '14%',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#354353',
    fontSize: 25,
    marginBottom: 17,
    paddingHorizontal: 12,
  },
  feedback: {
    width: '100%',
    height: 45,
    borderRadius: 12,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  paragraph1: {
    //paddingHorizontal: 25,
    width: '100%',
    height: 85,
    borderRadius: 12,
    backgroundColor: '#cfefe4',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  block:  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
});


