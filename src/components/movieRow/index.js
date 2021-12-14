import React from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import './index.css'

const MovieRow = ({title, items}) => {
    return (
        <div className="movieRow">

            <h2>{title}</h2>
            
            <div className="moveRow--left">
                <NavigateBeforeIcon style={{fontsize: 50}}/>
            </div>

            <div className="moveRow--right">
                <NavigateNextIcon style={{fontsize: 50}}/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default MovieRow;