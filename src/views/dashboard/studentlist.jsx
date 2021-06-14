import React from 'react';
import './mystyle.css';

export const Studentlist = (props) => {
    return (
        <div class="listdiv">
            <div class="row col-12 rowr">
                <div class="col-8 left-div darktext">
                    Students by Average mark
                </div>
                <div class="col-4 right-div lighttext">
                    Descending
                </div>
            </div>
            {
                props.data.map((value)=>{
                    return (
                        <div class="rowr">
                <div class="col-8 left-div lighttext">
                    {value.name}
                </div>
                <div class="col-4 right-div darktext">
                    {value.marks}
                </div>
            </div>
                    )
                })
            }
            
        </div>
    )
}