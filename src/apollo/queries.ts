import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      display_id
      name
      email
      gender
      image
      profile
      created_at
    }
  }
`
export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: { created_at: desc }) @client {
      id
      display_id
    }
  }
`
export const GET_USERBY_ID = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      display_id
      name
      email
      gender
      image
      profile
      created_at
    }
  }
`
export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      display_id
      name
      email
      gender
      image
      profile
      created_at
    }
  }
`
export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      display_id
      name
      email
      gender
      image
      profile
      created_at
    }
  }
`
export const UPDATE_USER = gql`
  mutation UpdateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      display_id
      name
      email
      gender
      image
      profile
      created_at
    }
  }
`
