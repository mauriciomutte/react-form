import { gql } from 'apollo-server-koa';
import UserModel from '../models/User';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    cep: String!
    street: String!
    number: Int!
    neighborhood: String!
    city: String!
    uf: String!
  }

  type Query {
    getUsers: [User]!
    getSingleUser(_id: ID!): User!
  }

  type Mutation {
    addUser(
      name: String!
      cep: String!
      street: String!
      number: Int!
      neighborhood: String!
      city: String!
      uf: String!
    ): User!
  }
`;

export const resolvers = {
  Query: {
    getUsers: async () => await UserModel.find({}),

    getSingleUser: async (_:any, { _id }:any) => {
      const user = await UserModel.findOne({ _id });
      return user;
    }
  },
  Mutation: {
    addUser: async (_:any, user:Object) => {
      let newUser = await UserModel.findOne({ ...user });

      if (newUser) return newUser;
      
      newUser = new UserModel({ ...user });
      await newUser.save();
      return newUser;
    }
  }
};