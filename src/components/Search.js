import React from 'react';
import './index.css';

function Search({ queryDatas }) {


    return (
        <>
            <div className="details">
            </div>
            <div className="grid">
                {queryDatas.map((data, idx) => (
                    <div key={idx}>
                            <div className="body">
                                <div>
                                    {/* <img id="img" src={data.Poster} alt="Poster" /> */}
                                </div>
                                <div>Title: {data.Title}</div>
                                <div>Language: {data.Language}</div>
                                <div>Genre: {data.Genre}</div>
                            </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search;
