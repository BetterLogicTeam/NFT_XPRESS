import React  from 'react'; 
import './Table_Button.css'

const Table_Buttons = ({setcurrentPage,currentPage,indexOfFirstPage,indexOfLastPost,totalData,listPerpage}) => {
    // let last_value = Number(props.data.last_value);
    // let first_value = Number(props.data.first_value);
    // let [value,setvalue] = new useState(Number(props.data.current_value));
  
    return ( 
        <>
        
        <div class="pagination-box">
                    <ul>
                        <li class="page-start "><a  onClick={()=>{
                setcurrentPage(1)
            }}>First</a></li>
                        <li class="page-last "><a   onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage-1 > 1)
                    {
                        currentPage = currentPage - 1;
                        return currentPage;
                    }
                    return 1;
                });
            }}>Prev</a></li>
                        <li class="page-number on " data-page="1"><a >{currentPage}</a></li>
                        {/* <li class="page-number " data-page="1"><a >2</a></li> */}
                        <li class="page-next "><a   onClick={()=>{
                setcurrentPage(()=>{
                    if(currentPage+1 < Math.ceil(totalData/listPerpage))
                    {
                        currentPage = currentPage +1;
                        return currentPage;
                    }
                    return Math.ceil(totalData/listPerpage);
                });
            }}>Next</a></li>
                        <li class="page-end "><a  onClick={()=>{
                setcurrentPage(Math.ceil(totalData/listPerpage));
            }} >Last</a></li>
                    </ul>
                </div>
        
        </>
     );
}
 
export default Table_Buttons;