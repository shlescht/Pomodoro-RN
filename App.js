import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from 'expo-av';

const colors = ["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  async function playSound() {
    const sound = await Audio.Sound.createAsync(
      require('./assets/click.mp3')
    )
    await sound.playAsync();
  }
  const handleStartButton = () => {
    playSound()
    setIsWorking(!isWorking)
  }
  // Hook useEffect que se ejecuta cada vez que cambia el estado `isWorking`
  useEffect(() => {

    // Declaramos una variable local llamada interval (será el ID del setInterval)
    let interval = null;

    // Si el boton está en estado "trabajando" (temporizador activo)
    if (isWorking) {

      // Iniciamos un intervalo que se ejecuta cada segundo (1000 ms)
      interval = setInterval(() => {

        // Actualizamos el estado del tiempo (time)
        setTime((prevTime) => {

          // Si el tiempo llega a 0...
          if (prevTime === 0) {
            // ...cambiamos el estado a "no trabajando"
            setIsWorking(false);

            // ...reiniciamos el tiempo a 25 minutos (25 * 60 segundos)
            return 25 * 60;
          }

          // En caso contrario, restamos 1 segundo
          return prevTime - 1;
        });

      }, 1000); // cada 1 segundo
    }
    // Si no está trabajando Y el tiempo no es cero (pausa, por ejemplo)
    else if (!isWorking && time !== 0) {
      // Detenemos el temporizador
      clearInterval(interval);
    }

    // Este return es la función de limpieza del useEffect.
    // Se ejecuta cuando el componente se desmonta o cuando `isWorking` cambia.
    return () => clearInterval(interval);

    // El useEffect depende del estado `isWorking` y `time` así que se vuelve a ejecutar cuando este cambia.
  }, [isWorking, time])

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: Platform.OS === 'android' && 30,
      }}>
        <StatusBar style="dark" />
        <Text style={styles.text}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          time={time}
          setTime={setTime} />
        <Timer time={time} />
        <TouchableOpacity onPress={handleStartButton} style={styles.button}>
          <Text style={styles.buttonText}>{isWorking ? "Stop" : "Start"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'green',
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    color: '#fff',
    fontSize: 32,
  },
});