


async function getWeather(city) {
    try{
        let apikey = `b92e57938eaebc6ded1fcf3a2f5b4bc3`;

       let raw = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)

        let result = await raw.json();
        console.log(result);

        if(!raw.ok){
            throw new Error ("something wrong");
        }

    }
    catch(err){
     console.log(err.message  );
    }
        
}
getWeather("leha");

