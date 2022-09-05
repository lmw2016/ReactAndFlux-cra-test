import React from "react";
import {Link} from "react-router-dom"

function PerformanceList(props) {
    return (
    <table className="table">
    <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Fly date</th>
                    <th>Fly Number</th>
                    <th>Mkt Carrier</th>
                    <th>Origin City</th>
            <th>Dest City</th>
        </tr>
    </thead>
    <tbody>
                {props.currentPerformances.map((perf, index) => {
                    return (<tr key={index+1}>
                        <th>{index + 1 + props.currentPage * props.perPage}</th>
                        <th>{ new Date(perf.FlyDate).toLocaleString()}</th>
                        <th><Link to={"/performance/"+perf.MktCarrierFlyNum}>{ perf.MktCarrierFlyNum}</Link></th>
                        <th>{perf.MktCarrier}</th>
                        <th>{ perf.OriginCity}</th>
                        <th>{ perf.DestCityName}</th>
                   </tr>)
               })} 
       
    </tbody>
</table>
   )
}

export default PerformanceList