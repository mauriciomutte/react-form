import gql from 'graphql-tag';

const ADD_USER = gql`
  mutation AddUser (
    $name: String!
    $cep: String!
    $street: String!
    $number: Int!
    $neighborhood: String!
    $city: String!
    $uf: String!
  ) {
    addUser(
      name: $name
      cep: $cep
      street: $street
      number: $number
      neighborhood: $neighborhood
      city: $city
      uf: $uf
    ) {
      id
      name
    }
  }
`;

export default ADD_USER;