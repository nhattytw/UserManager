import { gql } from "@apollo/client"

const GET_USERS = gql`
query {
  users {
    _id
    name
    email
    gender
    address
  }
}
`
const GET_USER =  gql`
query UserByID($userByIdId: String!) {
  userByID(id: $userByIdId) {
    _id
    name
    email
    gender
    address
  }
}
`

export { GET_USER, GET_USERS }