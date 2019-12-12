# Real World HTTP Servers

## Content

- REST
- Middleware
- Organizing our code
- Build JSON API
- Alternative to Express

## REST

Representational State Transfer

- Resource based routes convention

- The key abstraction of information in REST is a resource.

- REST uses a resource identifier to identify the particular resource involved in an interaction between components.

REST is a pattern, a convention to organize our url structure

- It should use http verbs to express what the request wants to accomplish
- Resource information must be part of the url
- It uses common data formats (JSON for API)
- Communication is stateless
- Each request must pass all information needed to fulfill the request
- Idempotency of requests

For each resource, we want to:

- create => creating a new resource
- read => getting a resource
- update => changing a resource
- delete => deleting a resource

### http methods

What language does a client use to makes request to the server ? http

http protocol gives us verbs

- Create => Create a new ressource => Post
- Read => Get a resource => Get
- Update => Change a resource => Put
- Delete => Delete a resource => Delete

### Scoping information

- collections vs single entity
- which one?

### End Points

By following REST principles, it allows us to design our end points:

| Action                               | http verb | end point               |
| ------------------------------------ | --------- | ----------------------- |
| List all posts                       | GET       | get '/posts'            |
| Get a specific post                  | GET       | get '/posts/:id'        |
| Display the new form                 | GET       | get '/posts/new         |
| Create a new post                    | POST      | post '/posts            |
| Display the form for updating a post | GET       | get '/posts/:id/update' |
| Update the posts                     | PUT       | put '/posts/:id         |
| Deleting a specific post             | DELETE    | delete '/posts:id'      |

#### Nested Resources

You may need to access a nested resources. For example, you need to create a new comment.

| Action               | http verb | end point                 |
| -------------------- | --------- | ------------------------- |
| Create a new comment | POST      | post '/posts/:id/comments |

### Common Data Format

In the case of an API, what do we expect when we do

GET users => a list of users

```
[
  {id: 1,
  first_name: 'Clark',
  last_name: 'Ken',
  ...},
  {id: 2,
  first_name: 'Bruce',
  last_name: 'Wayne',
  ...},
]
```

### End points For Our Demo

Let's say, we want to create app the post tweets.

We need to identify the resources of our app:

- Users
- Posts
- Comments
- Likes

We want to design our routes according to REST

- POST
- LIKES and COMMENTS need nested routes, because a like or a comment cannot exist without a POST

### REST alternatives

- GraphQL

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.

## Alternatives to Express

Koa.js (Javascript) - https://koajs.com/
Sinatra (Ruby) - http://sinatrarb.com/
Flask (Python) - http://flask.pocoo.org/

## Better Organize our Code

We can better organize our code to make more modular and to clean up our server file.

- Routing

  - We externalize to our routes into specific files
  - All the routes for a particular resource would be in one file

- We can use modules to externalize:

  - our DB files
  - our helper functions

## Back-End API

- An API will only deliver data, typically in JSON
- The routes will add a version of the API

For example, if we were building an API, our routes would be modified.

- `GET /api/1.0/posts`
- `GET /api/1.0/posts/1`
  ...

## References

Interesting links
About REST and naming convention : https://restfulapi.net/resource-naming/
Express modular routing (end of document) : http://expressjs.com/en/guide/routing.html#routing
Method override : https://www.npmjs.com/package/method-override
Express middleware : https://expressjs.com/en/guide/using-middleware.html
JSON APIs responses : https://jsonapi.org/examples
WordPress REST API : https://developer.wordpress.org/rest-api/
https://restfulapi.net/
