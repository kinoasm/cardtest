import React from 'react'
import {Image, StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
    classIcon:{
        margin:10,
        width:64,
        height:64,
        borderRadius:32,
        borderWidth:3,
        borderColor:'#fff569',
        ...Platform.select({
            ios:{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
            },
            android:{
                elevation: 2,
            }
        })
    }
})
const ClassIcon=(props:{playable_class:string})=>{
    switch (props.playable_class) {
        case 'warrior':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_warrior.jpg`)}/>
        case 'warlock':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_warlock.jpg`)}/>
        case 'priest':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_priest.jpg`)}/>
        case 'druid':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_druid.jpg`)}/>
        case 'shaman':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_shaman.jpg`)}/>
        case 'mage':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_mage.jpg`)}/>
        case 'hunter':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_hunter.jpg`)}/>
        case 'deathknight':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_deathknight.jpg`)}/>
        case 'monk':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_monk.jpg`)}/>
        case 'paladin':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_paladin.jpg`)}/>
        case 'rogue':
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_rogue.jpg`)}/>
        default:
            return <Image style={styles.classIcon} source={require(`../assets/images/classicon_warrior.jpg`)}/>
    }
}
export default ClassIcon;