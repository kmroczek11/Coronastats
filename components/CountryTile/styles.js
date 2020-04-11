import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#686868",
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 5,
  },
  name: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  type: {
    fontWeight: "bold",
  },
  flag: {
    width: 30,
    height: 30,
    marginLeft: 2,
    marginRight: 2,
  },
  icon: {
    width: 30,
    height: 30,
  },
  box: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 2,
    marginRight: 2,
  },
  inbox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  growth: {
    color: "green",
  },
  decrease: {
    color: "red",
  },
  stable: {
    color: "grey",
  },
});

export { styles };
