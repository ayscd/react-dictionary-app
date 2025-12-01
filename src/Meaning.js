import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    console.log(props.meaning);
    let exampleSentence = props.meaning.example;

    return(
        <div className="Meaning">
            <header><h3>{props.meaning.partOfSpeech}</h3></header>
            <main><p>{props.meaning.definition};</p></main>
            {exampleSentence && (
                <div className="example">
                    <hr/>
                    <em>"{exampleSentence}"</em>
                </div>
            )}

        </div>
    )
}