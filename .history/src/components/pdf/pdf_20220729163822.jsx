import React from 'react'
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';



const pdf = () => {
  return (
    <div>
        <Viewer
fileUrl='/assets/pdf-open-parameters.pdf'
plugins={[
    // Register plugins
    defaultLayoutPlugin,
    ...
]}
/>

    </div>
  )
}

export default pdf