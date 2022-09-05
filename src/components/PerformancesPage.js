import React, { useEffect, useState } from "react";
import { getPerformances } from "../api/performanceApi";
import PerformanceList from "./PerformanceList";
import ReactPaginate from 'react-paginate';
import "./App.css";


const PER_PAGE = 11;

function PerformancesPage() {
    const [performances, setPerformances] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getPerformances().then(_performances => setPerformances(_performances));
    }, []);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPagePerformances = performances
        .slice(offset, offset + PER_PAGE);
        // .map((perf, index) => {
        //     return (<tr key={index + 1}>
        //         <th>{index + 1} &nbsp;</th>
        //         <th>{new Date(perf.FlyDate).toLocaleString()}</th>
        //         <th>{perf.MktCarrier}</th>
        //         <th>{perf.OriginCity}</th>
        //         <th>{perf.DestCityName}</th>
        //     </tr>)
        // });
    
    const pageCount = Math.ceil(performances.length / PER_PAGE);
    
    return (<>
        <h3>Performances (total {performances.length}):</h3>
        <PerformanceList currentPerformances={currentPagePerformances}
            perPage={PER_PAGE} currentPage={currentPage} /> 
    
        <ReactPaginate
            previousLabel={"<- Previous"}
            nextLabel={"Next ->"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
        />
        </>
    )
}

export default PerformancesPage;

