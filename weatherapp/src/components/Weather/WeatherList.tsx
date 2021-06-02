import React from 'react'
import WeatherListItem from './WeatherListItem'
interface IProps{
    citeis:string[],
    tempType:string,
    deleteItem:any
}
export default function WeatherList({cities,tempType,deleteItem}):IProps {
    return (
        <ul
            data-testid="itemlist"
        className="list-group" >
         {cities.map((city:string, idx:number) => {
            let val = 0;
            if (tempType === "C") {
                val = city.temp - 273.15;
            }
            if (tempType === "K") {
                val = city.temp;
            }
            if (tempType === "F") {
                val = ((city.temp - 273.15) * 9) / 5 + 32;
            }
            return (e
                <WeatherListItm  key={idx} city={city} val={val} tempType={tempType} deleteItem={deleteItem}/>
                
            );
        })}
    </ul>
    )
}
