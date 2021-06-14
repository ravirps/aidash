import React from 'react';
import './mystyle.css';
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react';
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs';
 

export const Bargraph=(props)=>{
    console.log("bar",props.data)
    return (
        <div class="bar-graph-div">
          <CCardHeader>
            Student number chabge per month 
          </CCardHeader>
          <CCardBody>
            <CChartBar
              data={props.data}
              labels="months"
            />
          </CCardBody>
          </div>
    )
}