import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://raviresume.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          Ravi Pratap Singh
        </a> 
      </div>
      <div className="ms-auto">
        <span className="me-1">Created by</span>
        <a href="https://raviresume.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          Ravi Pratap Singh
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
