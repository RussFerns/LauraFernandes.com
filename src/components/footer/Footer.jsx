/* eslint-disable no-unused-vars */
import React from 'react'
import "./Footer.css"

const Footer = () => {
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <footer>
      <small>&copy; Laura Fernandes {currentYear}</small>
    </footer>
  )
}

export default Footer
