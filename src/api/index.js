import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) => {
    let changeableURL = url;
    if(country){
        if(country==="global"){
            changeableURL = url;
        }
        else{
            changeableURL = `${url}/countries/${country}`;
        }
    }

    try{
        const {data :{confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableURL);
        
        return {confirmed, recovered, deaths, lastUpdate};
    }catch(error){
        console.log(error);
    }
}
const url2 = 'https://covid19.mathdro.id/api/daily'
export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(url2);
        const modifiedData = data.map((dailyData)=>({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        return modifiedData;
    }catch(error){

    };
}
const url3 = 'https://covid19.mathdro.id/api/countries';
export const fetchCountries = async()=>{
    try{
        const {data:{countries}} = await axios.get(url3);
        return countries.map((country)=>country.name);

    }catch(error)
    {
        console.log(error);
    }
}
