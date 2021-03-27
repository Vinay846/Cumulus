import React, { useState } from 'react';
import './index.css';

function Sort({ queryDatas }) {
    const [showData, setShowData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const paginate = () => {
        const temp = queryDatas.slice((pageNumber - 1) * 12, pageNumber * 12);
        console.log("temp" + temp);
        setShowData(temp);
    }

    const next = () => {
        setPageNumber(prev => prev + 1);
        paginate();
    }

    const prev = () => {
        if (pageNumber >= 1) {
            setPageNumber(prev => prev - 1);
            paginate();
        }
    }

    return (
        <>
            <div className="details">
            </div>
            <div className="grid">
                {showData.map((data, idx) => (
                    <div key={idx}>
                            <div className="body">
                                <div>
                                    {/* <img id="img" src={data.Poster} alt="Poster" /> */}
                                </div>
                                <div>Title: {data.Title}</div>
                                <div>Language: {data.Language}</div>
                                <div>Genre: {data.Genre}</div>
                                <div>Year: {data.Year}</div>
                                <div>imdbRating: {data.imdbRating}</div>
                                <div>BoxOffice: {data.BoxOffice}</div>
                            </div>
                    </div>
                ))}
                <button onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </>
    );
}

export default Sort;
