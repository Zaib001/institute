import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedCourses from '../components/FeaturedCourses';
import TestimonialsSection from '../components/TestimonialsSection';
import LatestNewsSection from '../components/LatestNewsSection';
import BlogSection from '../components/BlogSection';
import VideoSection from '../components/VideoSection';
import ChairmanSection from './ChairmanSection';
import WhyShaheenSection from '../components/Whychoseus';

const HeaderPage = () => {
    return (
        <div>
            <HeroSection />
            {/* <FeaturedCourses /> */}
            <ChairmanSection />
            {/* Video Section */}
            <WhyShaheenSection/>
            <VideoSection />

            <TestimonialsSection />
            <LatestNewsSection />
            <BlogSection />
        </div>
    );
};

export default HeaderPage;
