const {gql} = require('apollo-server-express');

const typeDefs = gql`

type User
{
    _id: ID
    firstName: String
    lastName: String
    email: String
    zip: Int
    password: String
    favorites: [Favorite]
}
type Favorite 
{
    _id: ID
    bill_id: String
    sponsor_name: String
    short_title: String
    introduced_date: String
    house_passage: String
    senate_passage: String

}
type Auth {
    token: ID!
    user: User
  }

type Query
{
    getUser: User
    favoriteByUser: [Favorite]

}

type Mutation {
    addFavorite(bill_id:String, sponsor_name: String, short_title:String, introduced_date:String, house_passage:String, senate_passage:String) : Favorite
    addUser( firstName:String, lastName:String, email:String!, zip:Int!, password:String) : Auth
    login(email:String!, password:String): Auth
}

`

module.exports = typeDefs