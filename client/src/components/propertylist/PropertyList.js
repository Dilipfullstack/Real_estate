import "./PropertyList.css"
//import {FaRegImages} from 'react-icons/fa'
//import {AiFillEye} from 'react-icons/ai';
//import {MdEdit} from 'react-icons/md';
import visible from '../../icons/visible.png';
import image from '../../icons/showimage.png';
import edit from '../../icons/edit.png';


const PropertyList = ( {propertydetails} )=>{

    return(
        <>
        <div className='propertycontainer'>
       
       <table>
       <thead>     
        <tr className='tablehead' >
            <th className="thtext ppdidhead">PPD Id</th>
        
            <th className="thtext">Image</th>
       
            <th className="thtext">Property</th>
        
            <th className="thtext">Contact</th>
     
            <th className="thtext">Area</th>
        
            <th className="thtext">Views</th>
        
            <th className="thtext">Status</th>
      
            <th className="thtext thdayleft">Days Left</th>
       
            <th className="thtext actiontxt">Action</th>
        </tr>
        </thead>
                
        {propertydetails.map((propertydata) => (
          <tbody>
          <tr className='tabledata'>
        {/* <td className="tdtext">{propertydata._id.substr(propertydata._id.length - 7)}</td> */}
        <td className="tdtext ppdidtxt">{propertydata._id}</td>
        <td className="tdtext"><img src={image} width='16px' height='16px' alt=""/></td>
        <td className="tdtext">{propertydata.propertyType}</td>
        <td className="tdtext tdmobile">{propertydata.mobile}</td>
        <td className="tdtext">{propertydata.totalArea}</td>
        <td className="tdtext">{propertydata.views}</td>
        <td className="tdtext tdstatus" style={soldstyle}>{propertydata.Status}</td>
        <td className="tdtext tddays">{propertydata.daysLeft}</td>
        <td className="tdtext">

          <div className="actionbtn">
          <img src={visible} width='16px' height='16px' alt=""/>
          <img src={edit} width='16px' height='16px' alt=""/>
          </div>               
          </td>
        </tr>
        </tbody>
      ))}      
       </table>
       </div>
       
        </>
    )
}
export default PropertyList


const soldstyle={
  color: '#416899',
  background: '#F5FAF5',

}