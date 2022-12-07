import React ,{useState}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from 'firebase/compat/app'


export default function ListReviews({navigation,idRestaurant}) {
    const [userLogged, setUserLogged] = useState(false)

    firebase.auth().onAuthStateChanged((user)=>{
        user?setUserLogged(true):setUserLogged(false)
    })
  return (
    <View>
      {
        userLogged?(
            <Button
             buttonStyle={styles.btnAddReview}
             title="Escribeme una opinión"
             titleStyle={styles.btnTitleAddReview}
             onPress={()=>{
                navigation.navigate("add-review-restaurant",{idRestaurant:idRestaurant})

             }}
             icon={{
                type:"material-community",
                name:"square-edit-outline",
                color:"#a376c7"
             }

             }
            />
        ):(<Text
            style={styles.mustLoginText}
            onPress={()=>navigation.navigate("login")}

        >
            Para escribir una opinión es necesario estar logeado.{" "}
            <Text style={styles.loginText}>
                Pulsa AQUÍ para iniciar sesión.

            </Text>


        </Text>)


      }
    </View>
  )
}

const styles = StyleSheet.create({

    btnAddReview:{
        backgroundColor:"transparent"
    },
    btnTitleAddReview:{
       color:"#a376c7" 
    },
    mustLoginText:{
        textAlign:"center",
        color:"#a376c7",
        padding:20
    },
    loginText:{
        fontWeight:"bold"
    }
})