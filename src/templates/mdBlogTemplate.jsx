import { graphql } from 'gatsby';
import React from "react"

export default function Template({data}) {
  const {markDownRemark} = data;
  const {frontMatter, html} = markDownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontMatter.title}</h1>
        <h2>{frontMatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{__html: html}}/>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
      query($slug: String!) {
      markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
    }
    }
      `
