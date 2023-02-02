import React, { useState } from 'react'


export const Pagination = ({data,pageHandler}) => {
    let pagenumbers=[]
    for(var i=1;i<Math.ceil(data.length/3)+1;i++)
    {
pagenumbers.push(i)
    }
    const [currentpage,setcurrentpage]=useState(1)

  return (
    <div >
        {currentpage!=1 && <button onClick={()=>{pageHandler(currentpage-1);setcurrentpage(currentpage-1)}}>{"<<"}</button>}
        {pagenumbers.map((page)=>{ return <button class='' onClick={()=>{pageHandler(page); setcurrentpage(page)}}>{page}</button>  })}
        { currentpage!=4 &&<button onClick={()=>{pageHandler(currentpage+1);setcurrentpage(currentpage+1)}}>{">>"}</button>}
    </div>
  )
}
export default Pagination
