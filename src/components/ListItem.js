import React,{useState} from 'react';
import Details from './Details';
import './index.css';

function ListItem(props) {
    const [hover, setHover] = useState(false);
    const [info, setInfo] = useState("information");

    const handleOpen = (data) => {
        setInfo(data);
        setHover(true)
    }

    const handleClose = () => {
        setInfo('');
        setHover(false)
    }
	return (
		<div >
			<div onMouseEnter={() => handleOpen(props.data)} onMouseLeave={() => handleClose()} className="body">
				{hover && (
						<Details info={info} />					
				)}
				<div><img id="img" src={props.data.Poster} alt="Poster" /></div>
				<div>Title: {props.data.Title}</div>
				<div>Language: {props.data.Language}</div>
				<div>Genre: {props.data.Genre}</div>
			</div>
		</div>
	);
}

export default ListItem;
