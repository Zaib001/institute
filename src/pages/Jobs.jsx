import React, { useEffect } from 'react';

const Jobs = () => {

    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
     <div
        style={{ width: '100%', height: '500px' }}
        data-fillout-id="vc45UpyFJ5us"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      ></div>
  )
}

export default Jobs
