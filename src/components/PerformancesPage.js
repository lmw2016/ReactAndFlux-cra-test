import React, { useEffect, useState } from "react";
import { getPerformances } from "../api/performanceApi";
import PerformanceList from "./PerformanceList";

function PerformancesPage() {
    const [performances, setPerformances] = useState([]);

    useEffect(() => {
        getPerformances().then(_performances=>setPerformances(_performances));
        
    },[])
    
    return (<>
        <h3>Performances</h3>
        <PerformanceList performances={performances} />
        </>
    )
}

export default PerformancesPage;

