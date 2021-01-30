import React from 'react';
import axios from 'axios';

const PruebasMapeo = (props) => {
    let [responseData, setResponseData] = React.useState();
    const fetchData = React.useCallback(() => {
        axios({
            "method": "GET",
            "url": "http://137.116.219.96/localizaciones/all",
            // "url": "http://localhost:8080/localizaciones/all",
        })
            .then((response) => {
                setResponseData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    React.useEffect(() => {
        fetchData()
    }, [fetchData])


    const getJsonIndented = (response) => JSON.stringify(response, null, 4);

    const JSONDisplayer = ({children}) => (
        <div>
            <pre>{getJsonIndented(children)}</pre>

            
        </div>
    );



    //<JSONDisplayer>{responseData}</JSONDisplayer>
    return (
        <div>
            <h1>
                Fetching Data with React Hooks
          </h1>

          <p>{responseData.map((responseData) => {
                return(
                    <p>{responseData}</p>
                )


            })}</p>
            
        </div>


    );
}



export default PruebasMapeo;

