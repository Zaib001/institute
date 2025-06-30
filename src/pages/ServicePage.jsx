import React from 'react';

import ConsultationBooking from '../components/ConsultationBooking';
import ServiceHeader from '../components/ServiceHeader';

const ServicePage = () => {
    return (
        <div>
            <ServiceHeader />
           <ConsultationBooking/>
        </div>
    );
};

export default ServicePage;
