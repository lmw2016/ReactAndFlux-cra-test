import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
                        <th>{ new Date(perf.flyDate).toLocaleString()}</th>
                        <th><Link to={"/performance/"+perf.mktCarrierFlyNum}>{ perf.mktCarrierFlyNum}</Link></th>
                        <th>{perf.mktCarrier}</th>
                        <th>{ perf.originCity}</th>
                        <th>{ perf.destCityName}</th>
                   </tr>)
               })} 
       
    </tbody>
</table>
   )
}

PerformanceList.propTypes = {
    currentPerformances: PropTypes.arrayOf(
        PropTypes.shape({
            flyDate: PropTypes.string.isRequired,
            mktCarrierFlyNum: PropTypes.string.isRequired,
            mktCarrier: PropTypes.string.isRequired,
            originCity: PropTypes.string.isRequired,
            destCityName: PropTypes.string.isRequired,
        })
    ).isRequired
};

PerformanceList.defaultProps = {
    currentPerformances: []
};

export default PerformanceList