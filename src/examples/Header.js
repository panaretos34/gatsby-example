import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const getData= graphql `
query MyQuery {
  site {
    siteMetadata {
      title
      description
      author
      data
      person {
        name
        age
      }
    }
  }
}


`
const Header = () => {
  const {
    site: {
siteMetadata:{
  title,
  person :{name},
},
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h2>this is our heading</h2>
<h1>title :{title}</h1>
  <h1>name: {name}</h1>
    </div>
  )
}

export default Header








