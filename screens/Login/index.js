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
import { auth } from "../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Problemas ao Entrar", "Informe todos os dados!!!!", [
        { text: "Ok", style: "default" },
      ]);
      setPassword("");
      setLoading(false);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setPassword("");
        setEmail("");
        console.log(user);
        navigation.replace("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setPassword("");
        Alert.alert(
          'Acesso Negado',
          'Usuário e/ou Senha Inválidos!',
          [{ text: 'Ok', style: 'default ' }]
        );
      });
  };

  const register = () => {
    navigation.navigate("Register");
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
              <Text style={styles.signInText}>Entrar</Text>
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
              <TouchableOpacity style={styles.submitButton} onPress={login}>
                <Text style={styles.submitButtonText}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkForget}>
                <Text style={styles.links}>Esqueceu a senha?</Text>
              </TouchableOpacity>
              <View style={styles.linkContainer}>
                <Text
                  style={[
                    styles.links,
                    { fontWeight: "normal", marginRight: 10 },
                  ]}
                >
                  Novo por aqui?
                </Text>
                <TouchableOpacity onPress={register}>
                  <Text style={styles.links}>Inscreva-se agora.</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
};

export default Login;