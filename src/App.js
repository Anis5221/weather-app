import React, {useState,useEffect} from 'react'
import Moment from 'react-moment';
import 'moment-timezone';
import "./App.css"


function App() {

  const [city, setCity] = useState()
  const [search, setSearch] = useState()

  const [date, setDate] = useState(new Date())
  
  
  useEffect(() => {
    
    const fatchApi= async () => {
      
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1352954535b05757375fa663ffdd929f`
      const response = await fetch(url)
      const resjson = await response.json()
      setCity(resjson.main)
    
    }

    fatchApi()
  },[search])

  return (
    <div className="App">
      <div className="box">
            <div className="input-div">
              <input type="text" className="input-field" placeholder="Enter City Name"
               onChange={(event) =>{
                  setSearch(event.target.value)
              }}/>
              
            </div>

              {
                !city ? (
                  <p>Data Not Found!</p>
                ):(
                  <div>
                  <div id="weathericon">
            <i className="fas fa-sun" id="Iicon"></i>
          </div>

          <div className="info">
              <h2 className="location"> <i className="fas fa-street-view"></i>{search}, In</h2>
 
              {}
            <Moment parse="YYYY-MM-DD HH:mm"></Moment>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="maxmintemp">{city.temp_min}°C | {city.temp_max}°C</h3>
          </div>
          </div>
                )
              }
              
          
      </div>

    </div>
  );
}

export default App;
