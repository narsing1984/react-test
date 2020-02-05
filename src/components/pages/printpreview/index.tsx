import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import axios from 'axios';
import './index.css';
import SelectedHCP from '../../common/selectedhcp';
const PrintPreview: React.FC = () => {
    const [pdfObject, setPdfObject] = useState({ PdfId: "", PdfContent: "" });
    const [pages, setPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfWidth, setPDFWidth] = useState(200);
    const getPDFContent = () => {
        axios.get('http://localhost:3000/print.json')
            .then(function (response: any) {
                console.log("Print Content", response)
                setPdfObject(response.data[0]);
            })
            .catch(function (error: any) {
                console.log(error);
            });
    }

    useEffect(() => {
        getPDFContent();
    }, [])
    return (
        <div>
            <SelectedHCP />
            <div className="print-preview">
                <div className="print-preview__button-panel">
                    <p className="print-preview__message-flavor">Improved Access</p>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        <span className="print-preview__button-text">Print</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        <span className="print-preview__button-text">Email</span>
                    </button>
                    <button>
                        <img src="images/print-vendor@2x.png" alt="Print Vendor" />
                        <span className="print-preview__button-text">Send to Vendor</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
                        <span className="print-preview__button-text">Download</span>
                    </button>
                </div>
                <div className="print-preview__preview-panel">
                    <div className="print-preview__preview-panel-header">
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow-left-icon" width="24" height="24" viewBox="0 0 24 24" onClick={() => { if (pageNumber > 1) setPageNumber(pageNumber - 1) }}><path d="M14 7l-5 5 5 5V7z" /><path fill="none" d="M24 0v24H0V0h24z" /></svg>
                        <p className="print-preview__pagination">Page {pageNumber} of {pages}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="arrow-right-icon" width="24" height="24" viewBox="0 0 24 24" onClick={() => { if (pageNumber < pages) setPageNumber(pageNumber + 1) }}><path d="M10 17l5-5-5-5v10z" /><path fill="none" d="M0 24V0h24v24H0z" /></svg>
                        <button className="print-preview__close-button">
                            <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                        </button>
                    </div>
                    <div className="print-preview__preview" id="pdfWrapper">
                        <Document file={"data:application/pdf;base64," + pdfObject.PdfContent} onLoadSuccess={(pdfInfo) => { setPages(pdfInfo.numPages); setPDFWidth(1800); }}>
                            <Page pageNumber={pageNumber} width={pdfWidth} />
                        </Document>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrintPreview;
