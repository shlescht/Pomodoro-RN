import { View, Text, StyleSheet } from "react-native";

export default function Timer({time}) {
const formattedTime = (time) => {
    // Dividimos el tiempo en minutos. Se utiliza Math.floor para asegurarnos de que el resultado sea un número entero (redondeado hacia abajo).
    // time / 60 divide el tiempo en segundos entre 60, dando el número de minutos.
    const minDiv = Math.floor(time / 60).toString().padStart(2, "0");
    
    // Dividimos el resto del tiempo entre 60 para obtener los segundos.
    // time % 60 da el resto de la división (es decir, los segundos restantes después de haber calculado los minutos).
    const secDiv = Math.floor(time % 60).toString().padStart(2, "0");
    
    // Usamos `padStart(2, "0")` para asegurarnos de que siempre haya dos dígitos en los minutos y segundos.
    // Si el valor tiene un solo dígito, como "5", se convertirá en "05".
    
    // Devolvemos el tiempo en formato "MM:SS", que es muy común para temporizadores.
    return minDiv + ":" + secDiv;
};
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{formattedTime(time)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: "center",
        backgroundColor: "#F2F2F2",
        padding: 15,
        borderRadius: 15,
    },
    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
    },
});