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
    introduced_date: Date
    house_passage: Date
    senate_passage: Date

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
    addFavorite(bill_id:String, sponsor_name: String, short_title:String, introduced_date:Date, house_passage:Date, senate_passage:Date) : Favorite
    addUser( firstName:String, lastName:String, email:String!, zip:Integer!, password:String) : Auth
    login(email:String!, password:String): Auth
}




`