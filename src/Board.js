import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Board({board,onPress}) {
  return (
    <View style={styles.board} >
      {board.map((row,rowIndex)=>(
        <View style={styles.row} key={rowIndex}>
            {
                row.map((cell,cellIndex)=>(
                    <TouchableOpacity key={cellIndex} style={styles.cell} onPress={()=>onPress(rowIndex,cellIndex)}>
                        <Text style={styles.celltxt} >{cell}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    board:{
        marginTop:20,
    },
    row:{
        flexDirection:'row',
    },
    cell:{
        width:100,
        height:100,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    celltxt:{
        fontSize:36,
    },
})