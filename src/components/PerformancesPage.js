import React, { useEffect, useState } from "react";
import PerformanceList from "./PerformanceList";
import ReactPaginate from 'react-paginate';
import performanceStore from '../stores/performanceStore';
import { loadPerformances} from '../actions/performanceActions';
import "./App.css";


const PER_PAGE = 11;

function PerformancesPage() {
    const [performances, setPerformances] = useState(performanceStore.getPerformances());
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        performanceStore.addChangeListener(onChange);
       if((performanceStore.getPerformances().length === 0)) loadPerformances();
       return ()=>performanceStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setPerformances(performanceStore.getPerformances());
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const offset = currentPage * PER_PAGE;

    const currentPagePerformances = performances
        .slice(offset, offset + PER_PAGE);
    
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

