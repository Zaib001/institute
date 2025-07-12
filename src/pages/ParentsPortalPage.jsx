import React from 'react'
import ParentsPortal from '../components/ParentsPortal'
import SafetySection from '../components/SafetySection'
import SchoolTransport from '../components/SchoolTransport'
import UniformGuidelines from '../components/UniformGuidelines'
import HolidaysLeaveSection from '../components/HolidaysLeaveSection'
import SchoolCanteenSection from '../components/SchoolCanteenSection'

const ParentsPortalPage = () => {
  return (
    <div>
      <ParentsPortal/>
      <SafetySection/>
      <SchoolTransport/>
      <UniformGuidelines/>
      <HolidaysLeaveSection/>
      <SchoolCanteenSection/>
    </div>
  )
}

export default ParentsPortalPage
