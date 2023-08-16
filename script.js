window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
    });
    console.log("Hello Rigo from the console !");
  };
  let generateExcuse = () => {

   
    let subject = ["El perro", "Mi hermano", "El vecino", "Mi novio"];
    let actions = ["boto", "rompio", "ensucio", "robo", "reciclo"];
    let possetion = ["mi tarea en","mi poleron en","mi cama en","mi zapato en","mi comida en","mi cabello en"];
    let where = ["la calle", "mi casa", "el baño", "mi cuarto"];
  
    let subjIndex = Math.floor(Math.random() * subject.length);
    let actionsIndex = Math.floor(Math.random() * actions.length);
    let possetionIndex = Math.floor(Math.random() * possetion.length);
    let whereIndex = Math.floor(Math.random() * where.length);
  
    return  subject[subjIndex] + " " + actions[actionsIndex] + " " + possetion[possetionIndex] + " " + where[whereIndex];
  };
  