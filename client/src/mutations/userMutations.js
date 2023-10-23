import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation($createuserInput: CreateuserInput!) {
    createuser(createuserInput: $createuserInput) {
      _id
      name
      email
      gender
      address
    }
  }
`;

const UPDATE_USER = gql`
mutation Updateuser($updateuserInput: UpdateuserInput!, $updateuserId: String!) {
  updateuser(updateuserInput: $updateuserInput, id: $updateuserId) {
    _id
    name
    email
    gender
    address
  }
}

`

const DELETE_USER = gql`
   mutation Deleteuser($deleteuserId: String!) {
      deleteuser(id: $deleteuserId){
            _id
      }
   }

`

export { CREATE_USER, UPDATE_USER, DELETE_USER }

