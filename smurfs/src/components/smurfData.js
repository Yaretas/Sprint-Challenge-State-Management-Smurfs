import React, {useState, useEffect} from "react";
import axios from "axios";
import SmurfDisplay from "./SmurfDisplay";


export default function SmurfData() {
    const [smurf , setSmurf] = useState({});

    useEffect(() => {
        axios
        .get(`http://localhost:3333/smurfs`)
        .then( res => {
            console.log(res);
            setSmurf(res.data.message);
        })
        .catch( erro => {
            console.log(erro)
        })
    }, [])

    return(
        <div>
            {smurf.map( smurfy => {
                return <SmurfDisplay name={smurfy.name} />;
            })}
        </div>
    )
}