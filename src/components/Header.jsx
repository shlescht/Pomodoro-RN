import { View, Text, TouchableOpacity, StyleSheet} from "react-native";

export default function Header({time, setTime, currentTime, setCurrentTime}) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }
  return (
    <View style={styles.buttonContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={[
                styles.itemStyle,
                currentTime !== index && { borderColor: "transparent" }
            ]}>
            <Text style={styles.text}>{option}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    flex: 1,
    width: "33%",
    alignItems: "center",
    borderWidth: 3,
    padding: 5,
    borderColor: "white",
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});