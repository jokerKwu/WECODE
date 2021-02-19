import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
export default function App() {
    return (
        <View>
            <ImageBackground
                style={{
                    width: 700,
                    height: 700
                }}
                source={require("./배경화면.jpg")}>
                <View
                    style={{
                        flex: 1,
                        marginTop: 10,
                        maxHeight:55
                    }}>
                    <Icon
                        name="close"
                        color="white"
                        size={30}
                        style={{
                            marginLeft: 15,
                            opacity:0.7,
                        }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                minWidth: 130,
                                marginLeft: 500
                            }}>
                            <Icon name="gift" color="white" size={30}  style={{
                            opacity:0.7}}/>
                            <Icon name="grid" color="white" size={30}  style={{
                            opacity:0.7}}/>
                            <Icon name="settings" color="white" size={30}  style={{
                            opacity:0.7}}/>
                        </View>
                    </Icon>
                    <View
                        style={{
                            width: "100%",
                            borderBottomWidth: 0.5,
                            borderColor: 'white',
                            marginTop: 10,
                            opacity:0.7
                        }}/>
                </View>

                <View style={{
                  flexDirection:'row'
                }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            marginLeft:40,
                            marginTop:10,
                        }}
                        source={{
                            uri: "https://upload.wikimedia.org/wikipedia/ko/7/75/%EB%B0%A9%ED%83%84%EC%86%8C%EB%" +
                                    "85%84%EB%8B%A8_-_BE.jpg"
                        }}/>
                        <View style={{
                            marginLeft:7,
                            flex:1,
                            marginTop:10,
                          }}>
                          <Text style={{color:'white',opacity:0.7}}> Life Goes On</Text>
                          <Text style={{color:'white',opacity:0.7}}> 방탄소년단</Text>
                          </View>
                          <View style={{
                            flexDirection:'row',
                            justifyContent:'space-around',
                            minWidth:100,
                            marginRight:50,
                            alignItems:'center'
                          }}>
                            <Icon name="heart" color="white" size={30} style={{
                            opacity:0.7}}/>
                            <Icon name="play" color="white" size={30}  style={{
                            opacity:0.7}}/>
                          </View>

                </View>
                <View
                        style={{
                            width: "100%",
                            borderBottomWidth: 0.5,
                            borderColor: 'white',
                            marginTop: 10,
                            opacity:0.7
                        }}/>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image
                        style={{
                          marginTop:170,
                            height: 100,
                            width: 100,
                            borderRadius: 40
                        }}
                        source={require("./조현준.jpg")}></Image>
                    <Text
                        style={{
                            marginTop: 5,
                            color: 'white',
                            fontWeight: 'bold',
                            opacity:0.9
                        }}>조현준</Text>
                    <Text style={{
                      marginTop:5,
                      color:'white',
                      opacity:0.9
                    }}> wecode APP1기</Text>
                    

                </View>
                <View
                        style={{
                            width: "100%",
                            borderBottomWidth: 0.5,
                            borderColor: 'white',
                            marginTop: 30,
                            opacity:0.7
                        }}/>
                <View style={{
                  flex:1,
                  justifyContent:'space-around',
                  alignItems:'center',
                  flexDirection:'row',
                  maxHeight:100,
                }}>
                  <View style={{
                    alignItems:'center'
                  }}>
                    <Icon name="clipboard" color="white" size={30} style={{
                            opacity:0.7}}/>
                    <Text style={{
                      marginTop:5,
                      color:'white',
                      opacity:0.7
                    }}>나와의 채팅</Text>
                  </View>
                  <View style={{
                    alignItems:'center'
                  }}>
                    <Icon name="pencil" color="white" size={30} style={{
                            opacity:0.7}}/>
                    <Text style={{
                      marginTop:5,
                      color:'white',
                      opacity:0.7
                    }}>프로필 편집</Text>
                  </View>
                  <View style={{
                    alignItems:'center'
                  }}>
                    <Icon name="question" color="white" size={30} style={{
                            opacity:0.7}}/>
                    <Text style={{
                      marginTop:5,
                      color:'white',
                      opacity:0.7
                    }}>카카오스토리</Text>
                  </View>
                </View>
            </ImageBackground>
        </View>
    );
}