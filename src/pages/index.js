import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Amazing Pandas Eating Things</h1>
      <div>
        <img
          src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
          alt="Group of pandas eating bamboo"
        />
        <h2>Getting Data With GraphQL</h2>
        <p>Add site metadata object to gatsby-config.js file with info in it (ex site title)
        
        </p>

        <h3>Page Level Querys</h3>
        <ul>
        <li>import graphql from "gatsby"</li>
  <li>add {data} as a param to the functional component</li>
        <li>call it with data.site.siteMetadata.title</li>
        <li>add the query to the bottom of the page</li>
        </ul>
        <h3>Or Static Query for components:</h3>
        <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
      </div>
    </Layout>
  )
}