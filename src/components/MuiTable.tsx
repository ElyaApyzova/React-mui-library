import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

export const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
           <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            {tableData.map((row) => (
                <TableRow key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                </TableRow>
            ))}
           </TableBody>
          </Table>
        </TableContainer>
    )
}

const tableData = [
    {
        id: 1,
        first_name: 'Asan',
        last_name: 'Asanov',
        email: 'asanov@gmail.com',
        gender: 'Male',
        ip_address: '155.64.107.25'
    },

    {
        id: 2,
        first_name: 'Aigul',
        last_name: 'Amanova',
        email: 'amanov@gmail.com',
        gender: 'Female',
        ip_address: '155.64.107.26'
    },

    {
        id: 3,
        first_name: 'Aman',
        last_name: 'Amanov',
        email: 'amanov@gmail.com',
        gender: 'Male',
        ip_address: '155.64.107.27'
    },
    {
        id: 4,
        first_name: 'Asel',
        last_name: 'Asanova',
        email: 'asanova@gmail.com',
        gender: 'Female',
        ip_address: '155.64.107.28'
    },
]