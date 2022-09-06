import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({id,text,dltitems}) => {
    return (
        <>
            <div className='items'>
                <li>{text}</li>
                <Tooltip title="Delete">
                    <Button className='dltbtn' onClick={()=>dltitems(id)}>
                        <DeleteIcon />
                    </Button>
                </Tooltip>
            </div>
        </>
    )
}

export default List