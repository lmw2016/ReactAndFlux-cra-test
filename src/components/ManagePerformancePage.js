import React, { useState, useEffect } from 'react';
import performanceStore from '../stores/performanceStore';
import { Link } from 'react-router-dom';
import TextInput from './common/TextInput';
import * as performanceActions from '../actions/performanceActions'


const ManagePerformancePage = props => {
    const [errors, setErrors] = useState({});
    const [performances, setPerformances] = useState(performanceStore.getPerformances());
    const [performance, setPerformance] = useState({
        mktCarrierFlyNum: '',
        mktCarrier: '',
        originCity: '',
        destCityName: '',
        flyDate:''
    });

    useEffect(() => {
        performanceStore.addChangeListener(onChange);
        const flyNum = props.match.params.mktCarrierFlyNum;
    
        if (performances.length === 0) {
            performanceActions.loadPerformances();
        }
        else if (flyNum) {
            setPerformance(performanceStore.getPerformanceByflyNum(flyNum));
        }

        return () => performanceStore.removeChangeListener(onChange);
     }, [performances.length, props.match.params.mktCarrierFlyNum])

   function onChange(){
       setPerformances(performanceStore.getPerformances());
    }

    function handleChange() {
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
    }

    function formIsValid() {
        const _errors = {};

        if (!performance.flyDate) _errors.flyDate = "flyDate is required";
        if (!performance.mktCarrierFlyNum) _errors.mktCarrierFlyNum = "flyNum is required";
        if (!performance.originCity) _errors.originCity = "originCity is required";
        if (!performance.destCityName) _errors.destCityName = "destCity is required";
        
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
   }

    return (
      <>
        <h3>Performance detail</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-3">
              <TextInput
                id="mktCarrierFlyNum"
                label="fly number"
                onChange={handleChange}
                name="mktCarrierFlyNum"
                value={performance.mktCarrierFlyNum || ""}
                error={errors.mktCarrierFlyNum}
              />
            </div>
            <div className="col-3">
              <TextInput
                id="flyDate"
                label="fly date"
                onChange={handleChange}
                name="flyDate"
                value={performance.flyDate || ""}
                error={errors.flyDate}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-3">
              <TextInput
                id="originCity"
                label="origin city"
                onChange={handleChange}
                name="originCity"
                value={performance.originCity || ""}
                error={errors.originCity}
              />
            </div>
            <div className="col-3">
              <TextInput
                id="destCityName"
                label="dest city"
                onChange={handleChange}
                name="destCityName"
                value={performance.destCityName || ""}
                error={errors.destCityName}
              />
            </div>
          </div>

          <input type="submit" value='Save' className='btn btn-primary' disabled />{'  '}
          <Link className="btn btn-primary" to="/performances">
            Go Back to Performance list
          </Link>
        </form>
      </>
    );

}

export default ManagePerformancePage;