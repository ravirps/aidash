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

export const Piegraph=(props)=>{
    return (
        <div class="bar-graph-div">
        <CCardBody>
        <CChartPie
          data={props.data}
        />
      </CCardBody>
      </div>
   
    )
}