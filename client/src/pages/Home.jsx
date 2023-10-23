import UsersList from './UsersList'
import AddUserModal from '../components/AddUserModal'
import Box from '@mui/material/Box'

export default function Home() {
  return (
    <>
      <h1>User Management</h1>
      <Box sx={{ p: 2 }}>
        <AddUserModal />
      </Box>
      <UsersList />
    </>
  )
}
