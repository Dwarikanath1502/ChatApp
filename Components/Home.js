import React, { Component } from 'react'
import { Text, View , StyleSheet,StatusBar } from 'react-native'
import {Container , Label , Input , Item , Button , Form} from 'native-base';

export default class Home extends Component {

    state = {
        name: ""
    }

    render() {
        return (
            
            <Container style = {styles.container}>
                <StatusBar backgroundColor='#74B9FF'/>
                <Form>

                    <Item floatingLabel> 
                        <Label>Username</Label>
                    </Item>
                    <Input  
                    autoCorrect={false}
                    autoCapitalize = "none"
                    onChangeText = {name =>({name})}
                />
                <Button
                    style = {{marginTop:20}}
                    full
                    rounded
                    success
                    onPress={()=>{
                        this.props.navigation.navigate('Chat', {
                            name: this.state.name
                        })
                    }}
                >
                    <Text style = {{color:"#fff"}}>Start Chat</Text>
                </Button>
                </Form>
                
            </Container>
        )
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:'center',
    }
})