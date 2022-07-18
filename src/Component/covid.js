import React, { useEffect, useState} from "react";
import './covid.css';

const Covid = () =>{

    const [actualdata,setData] = useState([]);

    const getCovidData = async () => {
        try{
            const res  = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            console.log(data.statewise[0]);
            setData(data.statewise[0])
        }
        catch(err){

        }

    }
    useEffect(() =>{
       getCovidData();
    } , []);
    return(
        <>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            <table>
            <ul>
                <tr>
                    <td>
                <li className="mycard" id="card1">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">INDIA</p>
                        </div>
                    </div>
                </li>
                </td>
                <td>
                <li className="mycard" id="card2">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">{actualdata.recovered}</p>
                        </div>
                    </div>
                </li>
                </td>
                <td>
                <li className="mycard" id="card3">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">{actualdata.confirmed}</p>
                        </div>
                    </div>
                </li>
                </td>
                </tr>
                <tr>
                    <td>
                <li className="mycard" id="card4">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">{actualdata.deaths}</p>
                        </div>
                    </div>
                </li>
                </td>
                <td>
                <li className="mycard" id="card5">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">{actualdata.lastupdatedtime}</p>
                        </div>
                    </div>

                </li>
                </td>
                <td>
                <li className="mycard" id="card6">
                    <div className="card_main">
                        <div className="car_inner">
                            <p className="card_total card_small">{actualdata.recovered}</p>
                        </div>
                    </div>
                </li>
                </td>
                </tr>
            </ul>
            </table>
        </>
    )
}
export default Covid