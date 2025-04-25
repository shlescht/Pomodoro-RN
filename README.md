# ⏱️ Pomodoro Timer App (React Native)

Una sencilla pero funcional app de temporizador Pomodoro desarrollada en **React Native** con **Expo**, pensada para ayudarte a concentrarte usando la técnica Pomodoro.

## 📱 Características

- Temporizador Pomodoro de 25 minutos.
- Botón de inicio/pausa.
- Componentes reutilizables como `Header` y `Timer`.
- Sonido de clic al iniciar o detener el temporizador (usando `expo-av`).
- Limpieza de intervalos para evitar fugas de memoria.
- Diseño adaptable con estilos básicos usando `StyleSheet`.

## 🚀 Tecnologías utilizadas

- React Native
- Expo
- Hooks (`useState`, `useEffect`)
- expo-av (para reproducir sonidos)
- TypeScript opcional (aunque el ejemplo está en JS puro)

## 📂 Estructura de carpetas

. ├── App.js
  ├── assets/
  │ └── click.mp3
  ├── src/
  │ └── components/
  │ ├── Header.js
  │ └── Timer.js
  └── ...


## 🛠 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/pomodoro-timer-app.git

    Instala las dependencias:

cd pomodoro-timer-app
npm install

    Inicia el proyecto con Expo:

npx expo start

📸 Capturas de pantalla

    Puedes agregar aquí imágenes de tu app en funcionamiento

📝 Notas del desarrollador

    Esta app fue desarrollada como parte de mi aprendizaje en React Native. Me enfoqué en escribir código legible, comentado y fácilmente mantenible por otros desarrolladores.

¡Gracias por visitar este repositorio!
Si tienes ideas para mejorar este proyecto, siéntete libre de abrir un issue o un pull request 🤘

