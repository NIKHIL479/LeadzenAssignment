import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import "./App.css"
import Pagination from './Pagination'
const App = () => {
  const [data,setData]=useState([])
  const[perpage,setperpage]=useState([])
  const [showbutton,setshowbutton]=useState(true)
  const [showdetailsid,setshowdetailsid]=useState()
  useEffect(async ()=>{
   let res=await axios.get("https://jsonplaceholder.typicode.com/users");
 console.log(res.data);
 setData(res.data)
 setperpage(res.data.slice(0,3))

  },[])
  const pageHandler=(pagenum)=>{
    console.log(pagenum);
    setperpage(data.slice((pagenum*3)-3,(pagenum*3))); 
  }
  const changebutton=(id)=>{
    if(showbutton)
    {
      setshowbutton(false)
      setshowdetailsid(id)
     
    }
    else{
      setshowbutton(true)
      setshowdetailsid(0)
      
    }
  }
  return (
    <div >

    
      {perpage.map((e,i)=><div className='d2' > 
      <div className='list' key={i}>
      <span>{e.company.name}</span>
      <table>
        <thead><strong>Contact</strong></thead>
        <tr><td>{e.name}</td></tr>
      </table>
      <table>
        <thead><strong>Username</strong></thead>
        <tr><td>{e.username}</td></tr>
      </table>
      <table>
        <thead><strong>City</strong></thead>
        <tr><td>{e.address.city}</td></tr>
      </table>
       <button  className='show' onClick={()=>{changebutton(e.id)}}> {showbutton==true ? "view details":"hide details"}</button>
       <br/>
       </div>
        
       
       
       
        {showdetailsid==e.id && <div className='infodiv'>
        <strong>Description:</strong>
        <p>The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
        <div className='tablediv'>
        <table>
        <tr><td> <strong>Contact Person</strong> </td></tr>
        <tr><td>{e.name}</td></tr>
        <tr><td> <strong>Designation</strong></td></tr>
        <tr><td>Proprietor</td></tr>
        <tr><td> <strong>Email</strong></td></tr>
        <tr><td>{e.email}</td></tr>
        <tr><td> <strong>Phone</strong></td></tr>
        <tr><td>{e.phone}</td></tr>
        </table>
        <table>
        <tr><td> <strong>Street</strong> </td></tr>
        <tr><td>{e.address.street}</td></tr>
        <tr><td> <strong>Suite</strong></td></tr>
        <tr><td>{e.address.suite}</td></tr>
        <tr><td> <strong>City</strong></td></tr>
        <tr><td>{e.address.city}</td></tr>
        <tr><td> <strong>Country</strong></td></tr>
        <tr><td>America</td></tr>
        </table>
        </div> 
       </div>}
    
      </div>)} 
   
      <center> 
        <Pagination data={data}  pageHandler={pageHandler}/>
        </center>
    </div>
  )
}

export default App