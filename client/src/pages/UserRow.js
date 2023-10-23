import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useMutation } from "@apollo/client"
import { DELETE_USER } from "../mutations/userMutations"
import { GET_USERS } from "../queries/userQueries"
import EditUserModal from '../components/EditUserModal';

export default function UserRow({ user }) {

      const [deleteUser] = useMutation(DELETE_USER, {
            variables: {
                  deleteuserId: user._id
            },
            refetchQueries: [{ query: GET_USERS }]
      })

      return (
            <TableRow>
                  <TableCell align='center'>{user.name}</TableCell>
                  <TableCell align='center'>{user.gender}</TableCell>
                  <TableCell align='center'>{user.email}</TableCell>
                  <TableCell align='center'>{user.address}</TableCell>
                  <TableCell>
                        <EditUserModal key={user._id} user={user} />
                  </TableCell>
                  <TableCell>
                        <IconButton onClick={deleteUser} color="error" aria-label="Delete User">
                              <DeleteIcon />
                        </IconButton>
                  </TableCell>
            </TableRow>
      )
}
