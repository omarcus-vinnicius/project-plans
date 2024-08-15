
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useCallback, useEffect, useState } from 'react';
import api from '../../connectionAPI';
import agGridButtonEdit from '../utils/agGridButton/edit';
import agGridButtonDelete from '../utils/agGridButton/delete';




const AgGridtable = () => {

    const [rowData, setRowData] = useState([]);
    const [colDefs, setColDefs] = useState([
        { field: "title", flex: 1 },
        { field: "dates", flex: 1 },
        { field: "locations", flex: 1 },
        { field: "participants", flex: 1 },
        { field: "descriptions", flex: 1 },
        { field: "Action", flex: 1, cellRenderer: agGridButtonDelete},
        { field: "Action",flex: 1, cellRenderer: agGridButtonEdit}
    ],rowData);

    useEffect(()=>{

        const HomePageRequests = async () => {

            await api.get('/plans')
                .then((data) => {
                    setRowData(data.data)
                }).catch(() => {
                    setRowData('')
                });

        }

        HomePageRequests()
        
    },[])

    const getId = useCallback ( param =>{})


    return (

        <div  className="ag-theme-quartz-dark" style={{ width: '90vw', height: '600px',  }}>
                <AgGridReact rowData={rowData} columnDefs={colDefs} animateRows getRowId={getId} />
            </div>


    );
}

export default AgGridtable;
