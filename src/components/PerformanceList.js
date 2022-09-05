import React from "react"

function PerformanceList(props) {
    return (
    <table className="table">
    <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Fly date</th>
                    <th>Mkt Carrier</th>
                    <th>Origin City</th>
            <th>Dest</th>
        </tr>
    </thead>
    <tbody>
                {props.performances.map((perf, index) => {
                    return (<tr key={index+1}>
                        <th>{index+1}</th>
                        <th>{ new Date(perf.FlyDate).toLocaleString()}</th>
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