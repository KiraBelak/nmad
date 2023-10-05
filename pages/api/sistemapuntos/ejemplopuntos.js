// Definir un objeto para el usuario con un saldo inicial de puntos
const usuario = {
    nombre: "Usuario Ejemplo",
    puntos: 100,
  };
  
  // Función para agregar puntos al usuario
  function agregarPuntos(usuario, cantidad) {
    usuario.puntos += cantidad;
  }
  
  // Función para canjear puntos por recompensas
  function canjearPuntos(usuario, cantidad) {
    if (usuario.puntos >= cantidad) {
      usuario.puntos -= cantidad;
      console.log(`Has canjeado ${cantidad} puntos por una recompensa.`);
    } else {
      console.log("No tienes suficientes puntos para canjear esta recompensa.");
    }
  }
  
  // Ejemplos de uso
  console.log(`${usuario.nombre} tiene ${usuario.puntos} puntos.`);
  agregarPuntos(usuario, 50);
  console.log(`${usuario.nombre} ahora tiene ${usuario.puntos} puntos.`);
  canjearPuntos(usuario, 30);
  console.log(`${usuario.nombre} tiene ${usuario.puntos} puntos después de canjear.`);
  canjearPuntos(usuario, 100); // Intentar canjear más puntos de los disponibles