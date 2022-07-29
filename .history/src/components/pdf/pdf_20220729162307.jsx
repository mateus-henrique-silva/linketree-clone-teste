import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://topexplorador.com/lider_brasil/lbcde.pdf',
            }}
        />
    )
}

export default ExamplePDFViewer