import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { auth, db } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

const Register = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Problemas ao Criar Conta", "Informe todos os dados!!!!", [
        { text: "Ok", style: "default" },
      ]);
      setPassword("");
      setLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        Alert.alert(
          'Usuário Cadastrado',
          `O usuário ${name} foi cadastrado com sucesso! Faça login para continuar!`,
          [{ text: 'Ok', style: 'default ' }]
        );
        try {
          const docRef = await addDoc(collection(db, "users"), {
            name,
            email,
            list:[]
          });
          navigation.replace("Login");
        } catch (e) {
          console.error("Erro ao gravar os dados do usuário: ", e);
        }        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          Alert.alert(
            'Problemas ao Registrar',
            `O email '${userMail}' já encontra-se em uso! Tente recuperar sua senha para continuar!`,
            [{ text: 'Ok', style: 'default ' }]
          );
        } else {
          Alert.alert(
            'Problemas ao Registrar',
            error.message,
            [{ text: 'Ok', style: 'default ' }]
          );
        }
      });
  };

  const login = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.jpg")}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Image
              source={require("../../assets/logo.png")}
              style={styles.image}
            />
            <View style={styles.formContainer}>
              <Text style={styles.signInText}>Criar Conta</Text>
              <TextInput
                placeholder="Nome"
                placeholderTextColor="#ffffff"
                style={styles.input}
                autoCapitalize="none"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#ffffff"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                placeholder="Senha"
                placeholderTextColor="#ffffff"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity style={styles.submitButton} onPress={register}>
                <Text style={styles.submitButtonText}>Criar</Text>
              </TouchableOpacity>
              <View style={styles.linkContainer}>
                <Text
                  style={[
                    styles.links,
                    { fontWeight: "normal", marginRight: 10 },
                  ]}
                >
                  Já possui uma conta?
                </Text>
                <TouchableOpacity onPress={login}>
                  <Text style={styles.links}>Entre aqui.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};


export default Register