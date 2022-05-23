import React, { useState, useEffect } from 'react';

//Import Components
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import StepsCRUD from '../../components/StepsCRUD/StepsCRUD';

const DepDetailsPage = () => {

    const [user, token] = useAuth();

    return ( 
    <div className="container">
        <OverviewTable/>
        <StepsCRUD/>
    </div>     
    );
}
 
export default DepDetailsPage;