import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
    console.log(props.results);

    if (props.results) {
        return(
            <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                    <span className="fonetics">{props.results.phonetic}</span>
                    <hr className="word-hr w-20"/>           
                </section>
                <div>{props.results.meanings.map(function(meaning, index) {
                    return(
                        <section key={index}>
                            <Meaning meaning={meaning}/>
                        </section>);
                    })
                 }
                </div>
            </div>
        );
    } else {
        return null;
    }
}