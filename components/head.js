import React from 'react'
import NextHead from 'next/head'
import AuthenticatedNav from './nav/authenticated'
import UnauthenticatedNav from './nav/unauthenticated'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

export default class Head extends React.Component {
  constructor(props) {
    super(props);

    this.title=props.title
    this.loggedIn=props.loggedIn || false
  }

  render() {
    return (
      <div class="border-bottom">
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{this.title || ''}</title>
        <meta
          name="description"
          content={this.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="bootstrap" href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <meta property="og:url" content={defaultOGURL} />
        <meta property="og:title" content={''} />
        <meta
          property="og:description"
          content={this.description || defaultDescription}
        />
        <meta name="twitter:site" content={defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOGImage} />
        <meta property="og:image" content={defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </NextHead>

      {this.loggedIn ? (<AuthenticatedNav/>) : (<UnauthenticatedNav/>)}
    </div>
    )
  }
}

