import React from 'react'
import {Text, View} from './Themed'
import {StyleSheet, Image, Button, Platform, Dimensions, TouchableOpacity,ActivityIndicator} from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import ClassIcon from './ClassIcon'

const styles= StyleSheet.create({
    container:{
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    cardContainer:{
        margin:5,
        width:Dimensions.get('screen').width-15,
        backgroundColor:"#bce",
        borderRadius:5,
        ...Platform.select({
            ios:{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
            },
            android:{
                elevation: 5,
            }
        })
    },
    nameText:{
        fontSize:32,padding:5
    },
    cardText:{
        fontSize:20,
        padding:5,
    },
    rowContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'transparent',
        padding:1,
    },
    separator: {
      height: 1,
      width: Dimensions.get('screen').width-20,
    },
    })

export default function SampleCard(){
    const [open,setOpen]=React.useState(false);
    const [loading,setLoading]=React.useState(false);
    const [info,setInfo]=React.useState();
    const [onError,setOnError]=React.useState(false);
    const  load= async(props:{realm:string,name:string})=>{
        setLoading(true);
        fetch(`https://raider.io/api/v1/characters/profile?region=kr&realm=${props.realm}&name=${props.name}&fields=gear,mythic_plus_scores_by_season,raid_progression`)
            .then(res=>res.json())
            .then(data=>{
                setInfo(data);
                setLoading(false);
                setOpen(true);
            })
            .catch(e=>{
                console.log(e)
                setOnError(true)
            })

    }
    const toggle=()=>{
        if(!open)load(pop);
        else setOpen(false)
    }
    var pop:{
        name:string,
        playable_class:string,
        playable_race:string,
        level:number,
        realm:string,
        faction:string,
    }={
        name:'꼬꼬팡',
        playable_class:'warlock',
        playable_race:'블러드엘프',
        level:120,
        realm:'아즈샤라',
        faction:'호드'
    }
    return(
        <View style={styles.container}>

            <View style={styles.cardContainer}>
                <View style={styles.rowContainer}>
                    <ClassIcon playable_class={pop.playable_class}/>
                    <View style={{flexDirection:'column',backgroundColor:'transparent'}}>
                        <Text style={styles.nameText}>
                            {pop.name}
                        </Text>

                        <View style={styles.rowContainer}>
                            <Text style={styles.cardText}>
                                {pop.level}
                            </Text>
                            <Text style={styles.cardText}>
                                {pop.realm}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex:1,backgroundColor:'transparent',alignItems:'flex-end',justifyContent:'center'}}>
                        {loading?<ActivityIndicator size={10}/>:null}
                        <Button title={open?'close':'open'} onPress={()=>toggle()}/>
                    </View>
                </View>
                {open?
                    <View style={{backgroundColor:'transparent'}}>
                        <View style={styles.separator}  lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                        <View style={styles.rowContainer}>
                            {/* <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync('https://raider.io/characters/kr/azshara/꼬꼬팡')}>
                                <Text style={styles.cardText}>raider.io</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>WebBrowser.openBrowserAsync('https://worldofwarcraft.com/ko-kr/character/kr/아즈샤라/꼬꼬팡')}>
                                <Text style={styles.cardText}>wow armory</Text>
                            </TouchableOpacity> */}
                            {/* <Text style={styles.cardText}>템렙:{info.gear.item_level_equipped}</Text>
                            <Text style={styles.cardText}>유물력:{info.gear.artifact_traits}</Text>
                            <Text style={styles.cardText}>타락:{info.gear.corruption.added}</Text> */}
                            {/* <Text style={styles.cardText}>진도:{info.raid_progression.nyalotha-the-waking-city.summary}</Text> */}
                            {/* <Text style={styles.cardText}>쐐기점수:{info.mythic_plus_scores.all}</Text> */}
                            {/* <Button title="itemlevel" onPress={()=>console.log(info.raid_progression)}/> */}
                        </View>
                    </View>
                :<View/>}
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.rowContainer}>
                    <Text style={styles.cardText}>
                        Screen Dimensions
                    </Text>

                    <Text style={styles.cardText}>
                        Witdh:{Dimensions.get('screen').width}
                    </Text>

                    <Text style={styles.cardText}>
                        Height:{Dimensions.get('screen').height}
                    </Text>
                </View>

            </View>

        </View>
    )
}
