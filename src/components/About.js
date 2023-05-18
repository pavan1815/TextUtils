import React from 'react'

export default function About(props) {
  return (
    <div style={{color :props.mode === "dark" ? "white" : "black"}}>
        This app is a utility app that helps users to manipulate text.
    </div>
  )
}
