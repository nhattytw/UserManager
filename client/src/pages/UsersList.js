import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { useQuery } from '@apollo/client'
import UserRow from './UserRow'
import { GET_USERS } from '../queries/userQueries'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
      },
      '&:last-child td, &:last-child th': {
            border: 0,
      },
}));

const UsersList = () => {
      const { error, data, loading } = useQuery(GET_USERS)

      if (error) return <div>Error occurred</div>
      if (loading) return <div>Loading</div>

      return (
            <>
                  <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                              <TableHead>
                                    <StyledTableRow>
                                          <StyledTableCell align='center'>Name</StyledTableCell>
                                          <StyledTableCell align='center'>Gender</StyledTableCell>
                                          <StyledTableCell align='center'>Email</StyledTableCell>
                                          <StyledTableCell align='center'>Address</StyledTableCell>
                                          <StyledTableCell align='center'></StyledTableCell>
                                          <StyledTableCell align='center'></StyledTableCell>
                                    </StyledTableRow>
                              </TableHead>
                              <TableBody>
                                    {data.users.map(user => (
                                          <UserRow key={user.id} user={user} />
                                    ))}

                              </TableBody>
                        </Table>
                  </TableContainer>
            </>
      )
}

export default UsersList