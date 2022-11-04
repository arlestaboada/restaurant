import React ,{useState}from 'react'
import { StyleSheet, View } from 'react-native'
import { Button ,Icon,Input} from 'react-native-elements'
import { isEmpty, size } from 'lodash'


export default function ChangePasswordForm({setShowModal,toastRef}) {
    const [newPassword, setNewPassword] = useState()
    const [currentPassword, setCurrentPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [errorNewPassword, setErrorNewPassword] = useState(null)
    const [errorCurrentPassword, setErrorCurrentPassword] = useState(null)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
  
    const validateForm=()=>{
      setErrorNewPassword(null)
      setErrorCurrentPassword(null)
      setErrorConfirmPassword(null)
      let isValid=true

      if(isEmpty(currentPassword)){

        setErrorCurrentPassword("Debes ingresar tu contraseña actual.")
        isValid= false

      }
      if(size(newPassword)<6){

        setErrorNewPassword("Debes ingresar una nueva contraseña de al menos 6 caracteres.")
        isValid= false

      }
      if(size(confirmPassword)<6){

        setErrorConfirmPassword("Debes ingresar una confirmación de tu nueva contraseña de al menos 6 caracteres.")
        isValid= false

      }
      
      if(newPassword!==confirmPassword){
        setErrorNewPassword("La nueva contraseña y la confirmación no son iguales.")
        setErrorConfirmPassword("La nueva contraseña y la confirmación no son iguales.")
        isValid= false
      }

      if(newPassword===currentPassword){
        setErrorNewPassword("Debes ingresar una contraseña diferente al actual.")
        setErrorCurrentPassword("Debes ingresar una contraseña diferente al actual.")
        setErrorConfirmPassword("Debes ingresar una contraseña diferente al actual.")
        isValid= false
      }
      
     
      return isValid
  
  
    }
    const onSubmit=async()=>{
      if(!validateForm()){
        return;
      }
      /*
      setLoading(true)
      const resultReauthenticate=await reauthenticate(password)
      if(!resultReauthenticate.statusResponse){
        setLoading(false)
        setErrorPassword("Contraseña incorrecta.")
        return
      }
      const resultUpdateEmail=await updateEmail(newEmail)
      
      setLoading(false)
      if(!resultUpdateEmail.statusResponse){
         setErrorEmail("No se puede cambiar por este correo,ya esta en uso por otro usuario.")
         return
      }
      setReloadUser(true)
      
      toastRef.current.show("Se ha actualizado el email.",3000)
      setShowModal(false)*/
  
    }
    return (
      <View style={styles.view}>
        <Input
         placeholder="Ingresa la contraseña actual..."
         containerStyle={styles.input}
         defaultValue={currentPassword}
         onChange={(e)=>setCurrentPassword(e.nativeEvent.text)}
         errorMessage={errorCurrentPassword}
         password={true}
         secureTextEntry={!showPassword}
         rightIcon={
          
            <Icon
             type="material-community"
             name={showPassword?"eye-off-outline":"eye-outline"}
             iconStyle={{ color:"#c2c2c2"}}
             onPress={()=>setShowPassword(!showPassword)}

            />}
        />
        <Input
         placeholder="Ingresa tu nueva contraseña..."
         containerStyle={styles.input}
         defaultValue={newPassword}
         onChange={(e)=>setNewPassword(e.nativeEvent.text)}
         errorMessage={errorNewPassword}
         password={true}
         secureTextEntry={!showPassword}
         rightIcon={
          
            <Icon
             type="material-community"
             name={showPassword?"eye-off-outline":"eye-outline"}
             iconStyle={{ color:"#c2c2c2"}}
             onPress={()=>setShowPassword(!showPassword)}

            />
         }
        
        />

        <Input
         placeholder="Ingresa tu corfirmacion de nueva contraseña..."
         containerStyle={styles.input}
         defaultValue={confirmPassword}
         onChange={(e)=>setConfirmPassword(e.nativeEvent.text)}
         errorMessage={errorConfirmPassword}
         password={true}
         secureTextEntry={!showPassword}
         rightIcon={
          
            <Icon
             type="material-community"
             name={showPassword?"eye-off-outline":"eye-outline"}
             iconStyle={{ color:"#c2c2c2"}}
             onPress={()=>setShowPassword(!showPassword)}

            />
         }
        
        />


        <Button
        title="Cambiar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
        loading={loading}
        />
      </View>
    )
}

const styles = StyleSheet.create({})