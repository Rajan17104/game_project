import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import { addTeam, deleteTeam, getTeamData, updateTeam } from '../../../user/Redux/action/team.action';
import TeamFrom from './TeamFrom';




function Team(props) {

    const [update, setupdate] = React.useState(null);

    const dispatch = useDispatch();
    const teams = useSelector(state => state.team)

    useEffect(() => {
        dispatch(getTeamData())
    }, [])



    const handleDelete = (id) => {
        dispatch(deleteTeam(id))
    }

    const handleUpdate = (data) => {
        setupdate(data)
    }

    const handlesubmit = (data) => {
        if (update) {
            dispatch(updateTeam(data))
        } else {
            dispatch(addTeam(data))
        }
        setupdate(null)
    }

    const columns = [

        // { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'expirence', headerName: 'Price', width: 130 },
        {
            field: 'action', headerName: 'action', width: 130,
            renderCell: (params) => (
                <>
                    <IconButton style={{ color: 'red' }} aria-label="delete" onClick={() => handleDelete(params.row.id)}>
                        <DeleteIcon />
                    </IconButton>

                    <IconButton aria-label="edit" onClick={() => handleUpdate(params.row)}>
                        <EditIcon />
                    </IconButton>
                </>
            )
        }


    ];


    return (


        <div>

            <h1>Team's</h1>
            {

                teams.loading ? <CircularProgress /> :
                    <>
                        <TeamFrom onhandlesubmit={handlesubmit} onupdate={update} />

                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={teams.team}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: { page: 0, pageSize: 5 },
                                    },
                                }}
                                pageSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </>
            }


        </div >

    );
}

export default Team;