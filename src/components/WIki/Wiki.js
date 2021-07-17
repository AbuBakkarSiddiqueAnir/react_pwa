import React,{useState, useEffect} from 'react';
import WikiApi from "./Api/WikiApi"


const Wiki = ({searchTerm}) => {

    const [apiData, setApiData] = useState([]);
  
    useEffect(() => {
        const ApiSearchData =async () => {
            
            const {data} = await WikiApi(searchTerm)
            setApiData(data.query.search)
      
            //setApiData(data.query.search);
        }
        
      
      if (searchTerm && !apiData.length) {
        ApiSearchData();
      } else {
        var timeoutId = setTimeout(() => {
          if (searchTerm) {
            ApiSearchData();
          }
        }, 500);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [searchTerm]);
  
    const renderedData = apiData.map((data) => {
      return (
        <div className="w-100 h-auto bg-green-600 text-white p-4 border-b-8">
          <h1 className="font-bold">
            <a
              href={`https://en.wikipedia.org?curid=${data.pageid}`}
              target="_blank"
            >
              {data.title}
            </a>
          </h1>
  
          <span dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
        </div>
      );
    });
  
    return (
      <div>
        <div className="grid items-center justify-center bg-gray-200 h-16 m-8">
             <div>{renderedData}</div>
        </div>
       
      </div>
    );
  
}



export default Wiki;