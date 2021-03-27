import React,{useState, useEffect} from 'react';
import './index.css';
import ListItem from './ListItem'

function Sort({ queryDatas }) {
    const [showData, setShowData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);


    const next = () => {
        setPageNumber(prev => prev + 1);
    }

    const prev = () => {
        if (pageNumber >= 1) {
            setPageNumber(prev => prev - 1);
        }
    }



    useEffect(() => {
        const temp = queryDatas.slice((pageNumber - 1) * 12, pageNumber * 12);
        setShowData(temp);

    }, [queryDatas, pageNumber])


    return (
        <>
             <div className="grid">
                {showData.map((data, idx) => (
                    <ListItem
                        key={idx}
                        data={data}
                    />
                ))}
                <div>
                    <button disabled={pageNumber === 1} onClick={prev}>prev</button>
                    <button onClick={next}>next</button>
                </div>
            </div>
        </>
    );
}

export default Sort;
