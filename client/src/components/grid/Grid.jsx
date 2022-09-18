import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {GetPropertys} from '../../services/PropertyServices'
const Grid = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState([]); // Set rowData to Array of Objects, one Object per Row
   
    // Each Column Definition results in one Column.
    const [columnDeffs, setColumnDeffs] = useState([]);
    //   {headerName: "Title", field: 'title', filter: true, editable: true},
    //   {headerName: "Location", field: 'location', filter: true, editable: true},
    //   {headerName: "Address", field: 'address', filter: true, editable: true},
    //   {headerName: "Description", field: 'description', editable: true},
    //   {headerName: "Owner", field: 'owner_name', filter: true, editable: true},
    //   {headerName: "W/Dam", field: 'water_damage', editable: true},
    //   {headerName: "1st Entry", field: 'date_created'},
    //   {headerName: "Entered by", field: 'user_id'}
    // 
    
    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
        sortable: true
    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
    }, []);

    // Example load data from sever
    useEffect(() => {
        const getData = async () => {
            await GetPropertys()
            .then(function(res) {
                return res
            }).then(function(data) {
                const colDefs = gridRef.current.api.getColumnDefs()
                colDefs.length=0;
                const keys = Object.keys(data[0])
                keys.forEach(key => colDefs.push({field: key}))
                gridRef.current.api.setColumnDefs(colDefs)
                setColumnDeffs(colDefs)
                gridRef.current.api.setRowData(data)
            })
            // .then(res => setRowData(res))
            .catch(err => console.log(err, "Err"))
        }
        getData()
    }, []);

    // Example using Grid's API
    const buttonListener = useCallback( e => {
        gridRef.current.api.deselectAll();
    }, []);

    
    const onBtnUpdate = useCallback(() => {
        document.querySelector(
          '#csvResult'
        ).value = gridRef.current.api.getDataAsCsv()
    }, []);
    return(
        <div className='card'>
            <br></br>
            <div className='container'>
                {/* Example using Grid's API */}
                <button onClick={onBtnUpdate}>Show CSV export content text</button>
        
                {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
                <div className="ag-theme-alpine" style={{width: 500, height: 500}}>
        
                <AgGridReact
                    ref={gridRef} // Ref for accessing Grid's API
                    rowData={rowData} // Row Data for Rows
                    columnDefs={columnDeffs} // Column Defs for Columns
                    defaultColDef={defaultColDef} // Default Column Properties
        
                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                    rowSelection='multiple' // Options - allows click selection of rows
        
                    onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                    />
                </div>
            </div>
            <br></br>
        </div>
    )
}

export default Grid