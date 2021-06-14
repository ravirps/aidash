import React, { lazy } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import "./mystyle.css";
import { SimpleCard } from '../components/dash-card/SimpleCard'
import { Piegraph } from './piegraph' 
import { Bargraph } from './bargraph';
import { Studentlist } from './studentlist'
const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'));

const Dashboard = (props) => {
  console.log("dashboard", props)
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsDropdown data={props.data.SimpleCardData} />
      <div class="row ">
        <div class="col-6">
          <div class="row">
            <Bargraph data={props.data.bargraphdata}/>
          </div>
          <div class="secondrow">
            
      <WidgetsDropdown data={props.data.secondrowdata} /> 
          </div>
        </div>
        <div class="col-3">
          <Studentlist data={props.data.studentlist}/>
        </div>
        <div class="col-3">
          <Piegraph data={props.data.piegraphdata}/>
        </div>
      </div>
    </>
  )
}

export default Dashboard
