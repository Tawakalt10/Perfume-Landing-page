import React from 'react'

const Heading = ({
  title,
  className
}) => {
  return (
    <h4 className={className}>
      {title}
    </h4>
  )
}

export default Heading