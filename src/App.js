import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/ConuntryPicker/CountryPicker'
import { fetchData } from './api'
import coronaimage from './images/niceimage.png'
class App extends React.Component {
  state = {
      data:{},
      country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data : fetchedData});
  }

  handleCountryChange = async(country) =>{
    const fetchedData = await fetchData(country);  
    console.log(fetchedData);
    this.setState({data: fetchedData, country: country});
  }
  render(){
    return (
      <div className="container">
        <img className="cimage" src = {coronaimage} alt="COVID-19"/>
        <Cards data = {this.state.data}/>
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Chart data = {this.state.data} country = {this.state.country}/> 
      </div>
    );
  }
  
}

export default App;
