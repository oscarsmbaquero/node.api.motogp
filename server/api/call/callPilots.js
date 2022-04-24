const  fetchPilots = async () => {

    const url = 'http://localhost:5000/pilots';//me traigo datos de la url
    const res =  await fetch(url);// creo la variable 'res' donde introduzco   los datos traidos de la api

   let result = await res.json();

   console.log(result);


       return result;

}

export { fetchPilots };