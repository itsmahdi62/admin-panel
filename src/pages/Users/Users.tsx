import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/DataTable/DataTable";
import "./Users.scss"
import { usersDeatails } from "../../Data";
import { useState } from "react";
import Add from "../../components/Add/Add";

const columns: GridColDef[] = [
    { field: 'id',
     headerName: 'ID',
      width: 90 ,
       type:"number"
    },
    {
      field :"img" , headerName:"Avatar" ,width:100,
      renderCell:(params) =>{
         return <img src={params.row.img || '/noavatar.png'} alt="" />
        }
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        type:"string",
      },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        type:"string",

    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field :"Actions" , headerName:"Actions" ,width:100,
      renderCell:(params) =>{
         return <div className="actions">
            <div className="view">View</div>
            <div className="delete">Delete</div>
         </div>
        }
    },
    {
      field: 'email',
      headerName: 'email',
      type: 'string',
      width: 110,
      editable: true,
    },
    
    {
        field:"status" , headerName:"Verified",width:100,type:"boolean"
    },
  ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:true},
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,status:true},
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,status:true},
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];


const Users = () => {
   const [open , setOpen] = useState(false)
    return ( <div className="users">
        <div className="info">
            <h1>Users</h1>
            <button onClick={()=> {setOpen(true)}}>Add New User</button>
        </div>
        <DataTable slug="users" columns={columns} rows={usersDeatails} />
        {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div> );
}
 
export default Users;