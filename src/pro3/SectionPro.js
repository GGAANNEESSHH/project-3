import React from 'react'
import { useState } from 'react'
import { Accordion , AccordionSummary,Typography,AccordionDetails,Box,Button} from '@mui/material';
import { BiChevronDown } from "react-icons/bi";
import classes from './style.module.css'


function SectionPro() {
    const [input,setInput]=useState({
        Header:'',
        Details:'',
    })
    const [data,setData]=useState([])
    

    const handlechange =(e)=>{
        const {name,value}=e.target
        setInput((prev)=>({...prev,[name]:value}))
        console.log(input)
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        setData([...data,input])
        console.log(data)
    }



  return (
    <div className={classes.Div}>
        <div style={{width:'400px',border:'red 2px solid', mardin:"40px"}}>
            <form onSubmit={handlesubmit}>
                <div style={{textAlign:'center',}}>
                   <div> 
                        <h3>Add Section</h3>
                        <label style={{display:'block'}}>Section Header </label>
                        <input onChange={handlechange} value={input.Header} name='Header' style={{width:'200px',border:"2px solid black" ,borderRadius:'8px',}}/>
                    </div>
                    <div>                            
                        <label style={{display:'block'}}>Section Details</label>
                        <textarea onChange={handlechange} value={input.Details} style={{width:'200px',border:"2px solid black" ,borderRadius:'8px',}}name='Details'></textarea>
                    </div>
                </div>
                <button value='submit' className={classes.Button} color='primary'>Add</button>            
            </form>
        </div>
        <div style={{marginLeft:'50px',border:'1px solid black'}}>
        {data.map((data)=>{
            return(
            <Box>
                    <Accordion className="content-section implementation" style={{border:'1px solid black' , width:'500px' , }}>
                    <AccordionSummary  style={{border:'1px solid grey' , width:'500px' , }}expandIcon={<BiChevronDown style={{fontSize:"20px"}} />} aria-controls="panel1a-content" id="panel1a-header"
                    >
                    <Typography style={{width:'390px', border:'2px solid black'}}><h3>{data.Header}</h3></Typography>
                    </AccordionSummary>
                    <AccordionDetails bgColor='orange'>
                    <Typography  style={{fontSize:"17px",}}>
                        {data.Details}
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
    
            </Box> 
            )
         })}
      
        </div>



    </div>
  )
}

export default SectionPro