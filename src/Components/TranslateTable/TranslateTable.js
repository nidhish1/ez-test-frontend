import React ,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap'

 const TranslateTablePage = (data) => {
    
    const [json,setJson] = useState({})
    
    useEffect(() => {
        setJson(data.data);
        if (Object.keys(json).length >0) {
          json.data[1].forEach(element => {
                
            });
        }
        
    }, [json]);

    if (Object.keys(data).length  >0) {
        return (
        <div>
             <Table  striped bordered hover>

             <thead>
                <tr>
                    <th>Source Text</th>
                    <th>Target Text</th>
        
                </tr>
            </thead>

            <tbody>

                
            
            {
               
                    json.data[1].map((item) => (
                        <tr key={item.source_text}>
                            
                            
                            <td>{item.source_text}</td>
                            <td>{item.target_text}</td>
                           
                         
                        </tr>
                    ))

                
                    
            }
                
                
            </tbody>



             </Table>
        </div>
    )

    }else {
        return <div> </div> 
    }

    
}

export default TranslateTablePage
