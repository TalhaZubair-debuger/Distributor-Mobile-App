import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import ComonStyles from "../../utils/CommonCss";
import BackGroundLogin from "../../assets/img/BackGroundLogin.png";
import CustomButton from "../../utils/CommonButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebaseConfig";
import { getDatabase, ref, push } from "firebase/database";

const SignUp = ({ navigation }) => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState(null);
  const [cnic, SetCnic] = useState(null);
  const db = getDatabase(app);
  const userDataRef = ref(db, "User");

  function singup() {
    const formData = {
      username,
      password,
      email,
      number,
      cnic,
    };
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("User created successfully");
      })
      .then(() => {
        push(userDataRef, formData);
        navigation.replace("Login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <View style={styles.body}>
      {/* <ImageBackground source={BackGroundLogin} resizeMode='cover' style={styles.image}> */}
      <Text style={ComonStyles.heading1}>SignUp</Text>
      <TextInput
        placeholder="Username"
        style={ComonStyles.inputStyle1}
        value={username}
        inputMode="text"
        onChangeText={(newValue) => SetUsername(newValue)}
      />
      <TextInput
        placeholder="Email"
        style={ComonStyles.inputStyle1}
        value={email}
        inputMode="email"
        onChangeText={(newValue) => SetEmail(newValue)}
      />
      <TextInput
        placeholder="Password"
        style={ComonStyles.inputStyle1}
        value={password}
        inputMode="password"
        onChangeText={(newValue) => SetPassword(newValue)}
      />
      <TextInput
        placeholder="Phone No."
        style={ComonStyles.inputStyle1}
        value={number}
        inputMode="numeric"
        onChangeText={(newValue) => SetNumber(newValue)}
      />
      <TextInput
        placeholder="CNIC"
        style={ComonStyles.inputStyle1}
        value={cnic}
        inputMode="numeric"
        onChangeText={(newValue) => SetCnic(newValue)}
      />

      <CustomButton
        title={"Sign Up"}
        color={"#000"}
        style={{ width: "80%", borderRadius: 10, margin: 10 }}
        // handleOnPress={() => navigation.navigate("Login")}
        handleOnPress={() => singup()}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text15}>Go Back</Text>
      </Pressable>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 10,
    color: "#000",
  },
  text15: {
    fontSize: 15,
    color: "#000",
  },
  button: {
    margin: 10,
  },
});

export default SignUp;