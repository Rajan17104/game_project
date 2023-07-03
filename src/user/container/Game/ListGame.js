import React from 'react';
import CustomCard from '../../UI/CustomCard';

function ListGame({ gdata }) {
    return (
        <>
            {
                gdata.map((v) => {
                    return (
                        < div className='col-md-3 justify-content-between g-3' >
                            <CustomCard values={v} />
                        </div >
                    )
                })
            }
        </>
    );
}

export default ListGame;