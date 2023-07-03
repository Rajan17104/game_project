// import React, { useEffect, useState } from 'react';
// import ListGame from './ListGame';

// function Game(props) {
//     const [data, setData] = useState([]);
//     const [filter,setFilter] = useState([]);

//     useEffect(() => {
//         let localData = JSON.parse(localStorage.getItem("games"));

//         if (localData) {
//             setData(localData)
//         }

//         console.log(localData);

//     }, []);


//     const handlechange = (val) =>{
//         console.log(val);
        
//         let localData = JSON.parse(localStorage.getItem("games"));

//         let fData = localData.filter((v,i) =>{
//             v.name.toLowerCase().includes(val.toLowerCase()) ||
//             v.price.toString().includes(val) ||
//             v.desc.toLowerCase().includes(val.toLowerCase())
//         })

//         setFilter(fData)
//     }

//     return (    
//         <div className='row'>
//             <input type='search' name='search' placeholder='Search...' onChange={(e) => handlechange(e.target.value)} />
//             <ListGame gdata={data}/>
//         </div>
//     );
// }

// export default Game;

import { Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ListGame from './ListGame';

function Game(props) {

    const [data, setData] = useState([]);
    const [search,setSearch] = useState([]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("games"));

        if (localData) {
            setData(localData)
        }

        console.log(localData);

    }, []);

    const handlechange = (val) =>{
        console.log(val);

        let localData = JSON.parse(localStorage.getItem("games"));

        let fData = localData.filter((v,i) => 
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fData);
    }

    return (
        <div className='row' >
            <input type='search' name='search' placeholder='Search...' onChange={(e) => handlechange(e.target.value)}/>
            <ListGame gdata={data} />
        </div>
    );


}

export default Game;