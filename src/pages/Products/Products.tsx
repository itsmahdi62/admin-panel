import Add from "../../components/Add/Add";
import DataTable from "../../components/DataTable/DataTable";
import { useState } from "react";
import "./Products.scss"
import { GridColDef } from "@mui/x-data-grid";
import { productsRow } from "../../Data";

const columns: GridColDef[] = [
    { field: 'id',
     headerName: 'ID',
      width: 90 ,
    },
    {
      field :"img" , headerName:"Image" ,width:100,
      renderCell:(params) =>{
         return <img src={params.row.img} alt="" />
        }
    },
    {
        field: 'title',
        headerName: 'Title',
        width: 150,
        type:"string",
      },
    {
        field: 'color',
        headerName: 'Color',
        width: 150,
        type:"string",

    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
      type:"string",
    },
    {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      width: 110,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Create At',
      width: 150,
      type:"string",
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      width: 150,
      type:"boolean",
    },
  ];


const Products = () => {
    const [open , setOpen] = useState(false)
    return ( <div className="products">
        <div className="info">
            <h1>Products</h1>
            <button onClick={()=> {setOpen(true)}}>Add New Products</button>
        </div>
        <DataTable slug="products" columns={columns} rows={productsRow} />
        {open && <Add setOpen={setOpen} slug="user" columns={columns} />}
    </div> );
}
 
export default Products;