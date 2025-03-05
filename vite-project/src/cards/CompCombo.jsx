import React from 'react';
import JsonArray from './JsonData';
function CompCombo(){
    let uniqueComp=new Set();
    let alll=JsonArray.map((obj)=>{
        uniqueComp.add(obj.company);
    });
    let unArray=[...uniqueComp]
    
    return (
        <select>
            <option value="">select</option>
            {  
            unArray.map((str,index)=>{
                 return (
                 <option value={str} key={index}>{str}</option>)
            })
            }
        </select>
    )
}
export default CompCombo;