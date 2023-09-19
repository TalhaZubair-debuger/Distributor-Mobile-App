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
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  // const [secure, setSecure] = React.useState(props.secure);
  //   const [error, setError] = useState("");

  const onSubmitHandler = () => {
    // event.preventDefault();
    if (!email || !password) {
      //   setError("Fill all fields");
      return;
    }
    // setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        alert("sign in");
        navigation.replace("HomeTabs");
        // navigate("/");
      })
      .catch((err) => {
        // setError(err.message);
        alert(err);
      });
  };

  return (
    <View style={styles.body}>
      {/* <ImageBackground source={BackGroundLogin} resizeMode='cover' style={styles.image}> */}
      <Text style={ComonStyles.heading1}>Distributor?</Text>
      <Text style={ComonStyles.heading3}>SignIn here</Text>
      <TextInput
        placeholder="Email"
        style={ComonStyles.inputStyle1}
        value={email}
        onChangeText={(newValue) => SetEmail(newValue)}
      />
      <TextInput
        placeholder="Password"
        style={ComonStyles.inputStyle1}
        value={password}
        // secureTextEntry={secure}
        onChangeText={(newValue) => SetPassword(newValue)}
      />
      <CustomButton
        title={"Sign In"}
        color={"#000"}
        style={{ width: "80%", borderRadius: 10, margin: 10 }}
        // handleOnPress={() => navigation.navigate("HomeTabs")}
        handleOnPress={() => onSubmitHandler()}
      />
      <Text style={styles.text}>No account yet?</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.text15}>Sign Up Here</Text>
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

export default Login;
