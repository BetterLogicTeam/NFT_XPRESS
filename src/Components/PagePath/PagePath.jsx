import { BiHomeCircle } from "react-icons/bi";
import {FaAngleRight} from "react-icons/fa";
const Page_Path = (props) => {
    return ( 
        <div className="Page_Path h-color d-none d-md-flex flex-row align-items-center mt-5 " style={{color:'rgb(0 0 0 / 85%)'}}>
            <h4 className="mb-0  pe-1 border_right p-colo " style={{color:'rgb(0 0 0 / 85%)',borderRight:"2px solid rgb(0 0 0 / 85%)"}}>{props.data.page_name}</h4>&nbsp;
           <BiHomeCircle className="icon_page " />
            <FaAngleRight className="icon_page "/>
            <h6 className="mb-0  ps-1 icon_page" style={{color:'rgb(0 0 0 / 85%)'}}>{props.data.page_path}</h6>
        </div>
     );
}
 
export default Page_Path;