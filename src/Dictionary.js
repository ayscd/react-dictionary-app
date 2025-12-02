import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }
    
    function handlePexelsResposnse(response) {
        console.log(response);
        console.log(response.data);
        setPhotos(response.data);
    }

    function search(event) {
        event.preventDefault();
        
        let apiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "do8ae0f5a33a8b61b41f1t1ed44678b4";
        let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pexelsApiKey}`

        axios.get(pexelsApiUrl).then(handlePexelsResposnse);
    }

    function changeWord(event) {
        setKeyword(event.target.value);
    }
    
    return(
        <div className="Dictionary container">
            <form className="row" onSubmit={search}>
                <input className="col-10 search-box" type="search" placeholder="Search for any word..." autoFocus={true} onChange={changeWord} />
            </form>
            <br/><br/><br/>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}