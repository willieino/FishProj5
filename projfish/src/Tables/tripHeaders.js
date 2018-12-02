const TripHeaders = [
    { Header: "Trip Name", accessor: "Trip", width: 150},
    { Header: "Start Date", accessor: "StartDate", width: 100},
    { Header: "Duration", accessor: "Duration", width: 100},
    { Header: "Anglers", accessor: "Anglers", Cell: this.renderEditable, width: 150}, 
    { Header: "Location", accessor: "Place", width: 175,},
    { Header: "Notes", accessor: "Notes", width: 200},
    { Header: "GPS1", accessor: "GPS1", width: 75,},
    { Header: "GPS2", accessor: "GPS2", width: 75, },
    { Header: "Image Caption", accessor: "ImgCaption", width: 150},
    { Header: "Photos", accessor: "Photos", width: 175, },
]

export default TripHeaders;

