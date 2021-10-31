import Background from './background.jpg';
import { React, useState, useEffect } from 'react';
import { data } from './data.js';
import {
    
    Link
  } from "react-router-dom";
import './App.css';
export default function Home() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResult] = useState([]);

    const searchForPlayer = () => {
        let searchResults = [];
        data.forEach(item => {

            if ((item.Name.toLocaleLowerCase().includes(searchText) || item.age.toLocaleLowerCase().includes(searchText) || item.Nationality.toLocaleLowerCase().includes(searchText) || item.Club.toLocaleLowerCase().includes(searchText)) && searchText !== "") {
                searchResults.push(item);
            }
        });
        setSearchResult(searchResults);
        console.log(searchResults, 'seachresults')
    }

    useEffect(() => {
        searchForPlayer();
    }, [searchText]);


    return (
        <div
            style={{ backgroundImage: `url(${Background})` }}
            className="root">
            <div className="mainDiv">
                <div>
                    <img width="300" height="150" src="/assets/fifa19.png" alt="Fifa19" />
                </div>
                <div className="searchContainer">
                    <div>
                        <input onChange={(event) => { setSearchText(event.target.value) }} placeholder="Search Player by Name,Age,Nationality,Club" type="text" name="search" value={searchText} />
                    </div>
                    <div role="presentation" onClick={() => searchForPlayer()} className="search">Search</div>
                </div>
                <div className="result">
                    {searchResults.map(item => {
                        return <div className="card">
                            <div className="row">
                                <div>{item.Name}</div>
                                <div>{item.age}</div>
                            </div>
                            <Link to={`/view-details/${item.Name}`}><div className="viewDetails">View Details</div></Link>
                        </div>
                    })}

                </div>
            </div>
        </div>

    )
}