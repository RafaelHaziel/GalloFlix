import { Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    flex: 1,
    height: dimensions.height,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",
    top: -30,
    width: 230,
    resizeMode: "contain",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  formContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    marginVertical: 10,
    textAlign: "left",
    width: "100%",
    marginLeft: 10,
  },
  input: {
    width: "95%",
    height: 50,
    border: "none",
    padding: 10,
    color: "white",
    borderRadius: 5,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "#333333",
  },
  submitButton: {
    width: "95%",
    height: 55,
    color: "white",
    borderRadius: 10,
    border: "none",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: "#E7442E",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 5,
    color: "white",
  },
  linkForget: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  linkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  links: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});