import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { srcExtension } from "../../Utils";


const HeaderFile = (props) => {
    const propsData = { ...props };
    const guestReducer = useSelector(state => state.guestReducer)
    const usersReducer = useSelector(state => state.usersReducer)

    return (
        <>
            <Card.Header >
                <Row >
                    <Col xs lg={2}>
                        <img
                            src="../../uploads/logo/logoCCAS.png"
                            style={{ "height": "75px", "width": "75px" }}
                            alt="logo_asso"
                        />
                    </Col>
                    {guestReducer.map((guest) => {
                        if (guest._id == propsData.guestId) {
                            return (
                                <>
                                    <Col xs lg={8} >
                                        <h3> {propsData.widget} <br></br> {guest.name} {guest.surname}</h3>
                                        {usersReducer.map((user) => {
                                            if (user._id === guest.educRef) {
                                                return (
                                                    <Card.Subtitle key={guest._id} className="mb-2 text-muted">Référent éducatif : {user.name} {user.surname}</Card.Subtitle>
                                                )
                                            }
                                        })}
                                        {usersReducer.map((user) => {
                                            if (user._id === guest.medicalRef) {
                                                return (
                                                    <Card.Subtitle key={guest._id} className="mb-2 text-muted">Référent médical : {user.name} {user.surname}</Card.Subtitle>
                                                )
                                            }
                                        })}
                                    </Col>
                                    <Col xs lg={2}>
                                        <img
                                            src={srcExtension(guest.picture)}
                                            style={{ "height": "120px", "width": "120px" }}
                                            alt="update_filez"
                                        />
                                    </Col>
                                </>
                            )
                        }
                    })}
                </Row>
            </Card.Header>
        </>
    );
};

export default HeaderFile;








// // import React from 'react';
// // import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// // const ReadPdf = () => {
// //     const url = window.location.href
// //     const id = url.substring(url.lastIndexOf("=") + 1)

// //     // Create styles
// //     const styles = StyleSheet.create({
// //         page: {
// //             flexDirection: 'row',
// //             backgroundColor: '#E4E4E4',
// //             width: 1000
// //         },
// //         section: {
// //             margin: 10,
// //             padding: 10,
// //             flexGrow: 1
// //         }
// //     });

// //     return (
// //         <div className=" row justify-content-center">
// //                     <PDFViewer>
// //             <Document style={{width:"1000px"}}>
// //                 <Page size="A4" style={styles.page}>
// //                     <View style={styles.section}>
// //                         <Text>Section #1{id}</Text>
// //                     </View>
// //                     <View style={styles.section}>
// //                         <Text>Section #2</Text>
// //                     </View>
// //                 </Page>
// //             </Document>
// //         </PDFViewer>

// //         </div>


// //     );
// // };

// // export default ReadPdf;

// import React, { useState } from 'react';
// import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// // import Loader from './Loader';
// // import { Document, Page, pdfjs } from 'react-pdf';
// // import ControlPanel from './ControlPanel';
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const ReadPdf = () => {
//     const [scale, setScale] = useState(1.0);
//     const [numPages, setNumPages] = useState(null);
//     const [pageNumber, setPageNumber] = useState(1);
//     const [isLoading, setIsLoading] = useState(true);

//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//         setIsLoading(false);
//     }

//     return (
//         <div>
//             {/* <Loader isLoading={isLoading} /> */}
//             <section
//                 id="pdf-section"
//                 className="d-flex flex-column align-items-center w-100"
//             >
//                 {/* <ControlPanel
//           scale={scale}
//           setScale={setScale}
//           numPages={numPages}
//           pageNumber={pageNumber}
//           setPageNumber={setPageNumber}
//           file="/assets/docs/file-sample.pdf"
//         /> */}
//                 {/* <PDFViewer> */}
//                     <Document
//                         file="/assets/uploads/guest/files/test.pdf"
//                         onLoadSuccess={onDocumentLoadSuccess}
//                     >
//                         <Page pageNumber={pageNumber} scale={scale} />
//                     </Document>
//                 {/* </PDFViewer> */}
//             </section>
//         </div>
//     );
// };

// export default ReadPdf;



