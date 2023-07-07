import React, { useEffect, useState } from 'react';
import ListGame from './ListGame';

function Game(props) {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("games"));

        if (localData) {
            setData(localData)
        }

        console.log(localData);

    }, []);

    const handlechange = (val) => {
        console.log(val);

        let localData = JSON.parse(localStorage.getItem("games"));

        let fData = localData.filter((v, i) =>
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fData);

        setSearch(fData)
    }

    return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Our game</h3>
                            <span className="breadcrumb"><a href="#">Home</a> &gt; Our Game</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row' >
                <input type='search' name='search' placeholder='Search...' onChange={(e) => handlechange(e.target.value)} />
                <ListGame gdata={search.length > 0 ? search : data} />
            </div>
        </>
    );


}

export default Game;