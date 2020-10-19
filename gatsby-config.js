/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require ('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`,
})
module.exports= {
siteMetadata:{
  title:'Gatsby tutorial',
  description :'my first gatsby description',
  author:'@loucas1983',
  data:['item1','item2'],
  person :{name:'peter' , age:35},
},

plugins: [
 `gatsby-plugin-styled-components`,
 `gatsby-transformer-sharp`, 
 `gatsby-plugin-sharp`,
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images/`,
  },
  
},
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: `${__dirname}/src/posts/`,
  },
},
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `baa40o3a1py2`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken:`WUhr2zjOg4CEBHa4MimV_ywUlW7jHo1xadopvCykZAE` ,
    }, 
  },

],
  /* Your site config here */
  
}
