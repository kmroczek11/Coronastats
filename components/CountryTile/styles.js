import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "#191919",
    padding: 5,
    marginBottom: 6,
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
  name: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  type: {
    color: "#666666",
    fontWeight: "bold",
  },
  amount: {
    color: "#fff",
    fontWeight: "bold",
  },

  box: {
    alignItems: "center",
    padding: 5,
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
