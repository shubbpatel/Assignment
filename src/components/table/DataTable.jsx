import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gridClasses } from '@mui/system';
import './dataTable.css'

const columns = [
  // { field: 'id', headerName: 'ID', width: 70 },
  { field: 'CompanyName', headerName: 'Comapny Name', width: 200 },
  { field: 'EmailAddress', headerName: 'Email Address', width: 240, fieldStyles: {backgroundColor: 'white'} },
  {
    field: 'PhoneNumber',
    headerName: 'Phone Number',
    // type: Number,
    width: 130,
  },
  { field: 'ContactPerson', headerName: 'Contact Person', width: 130 },
  { field: 'Facilitator', headerName: 'Facilitator', width: 100 },
  { field: 'Sites', headerName: 'Sites', width: 27 },
  { field: 'Tenants', headerName: 'Tenants', width: 80},
  { field: 'TenantGroup', headerName: 'Tenant Group', width: 100 },
  { field: 'Actions', headerName: 'Actions', width: 70 },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.CompanyName || ''} ${params.row.EmailAddress || ''}`,
  // },
];

const rows = [
  { id: 1, EmailAddress: 'Snow', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 2, EmailAddress: 'Lannister', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 3, EmailAddress: 'Lannister', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 4, EmailAddress: 'Stark', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 5, EmailAddress: 'Targaryen', CompanyName: 'Infosys', PhoneNumber: null },
  { id: 6, EmailAddress: 'Melisandre', CompanyName: null, PhoneNumber: '7437376635' },
  { id: 7, EmailAddress: 'Clifford', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 8, EmailAddress: 'Frances', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
  { id: 9, EmailAddress: 'Roxie', CompanyName: 'Infosys', PhoneNumber: '7437376635' },
];

const getRowClassName = (params) => {
  if (params.row) {
    return 'firstRow';
  }
  return '';
};

export default function DataTable() {
  return (
    <div style={{ height: 450, width: '100%', background:'white' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowClassName={getRowClassName}
       
        
        // checkboxSelection
      />
    </div>
  );
}
