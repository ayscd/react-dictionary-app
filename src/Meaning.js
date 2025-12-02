import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    let exampleSentence = props.meaning.example;

    return(
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <main><p>{props.meaning.definition};</p></main>
            {exampleSentence && (
                <div>
                    <hr className="meaning-hr"/>
                    <em className="example">"{exampleSentence}"</em>
                </div>
            )}
            <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
    )
}