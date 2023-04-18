import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material"
const Component = styled(Box)`
width: 80%;
margin: 50px auto;
& > h4{
    margin-bottom: 20px;
}
`
const defaultObj = [{
    id: 1,
    name:'Khoatm',
    email: 'minhkhoa774@gmail.com',
    phone: 123456789,
    salary: 220000,
    age: 23,
     

}]
const Users =()=>{
    const [users, setUsers] = useState(defaultObj);
  const removeEntry=(id)=>{}  
    return (
        <Component>
            <Typography variant="h4">
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Remove Entry</TableCell>
                        </TableRow>
                    </TableHead>
                <TableBody>
              {
                users.map(user=>{
                    console.log(user);
                
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                        <TableCell>salary</TableCell>
                        <TableCell>age</TableCell>
                        <TableCell><Button variant="contained" color="error" > Remove</Button></TableCell>
                    </TableRow>
               
                    
                })
              }
                  
                </TableBody>
                </Table>
            </Box>
            </Typography>
        </Component>
    )
}

export default Users;