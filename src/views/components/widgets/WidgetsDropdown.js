import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetDropdown,
} from '@coreui/react'

import { SimpleCard } from '../dash-card/SimpleCard'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'

const WidgetsDropdown = (props) => {
  // console.log("widget",props.data);
  return (
    <CRow>
    {props.data.map((val)=>{
      return(
        <CCol>
        <SimpleCard url={val.url}
        value={val.value} infokey={val.infokey}/>
      </CCol>
      )
    })}
    </CRow>
    

     
  )
}

export default WidgetsDropdown
