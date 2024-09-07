import React, { useState } from "react";

import style from "./Calculator.module.css";


function Calculator(){

    const [input,setInput] = useState("");
    const [output,setOutput] = useState("");


const number_arr =['7','8','9','+','4','5','6','-','1','2','3','*','C','0','=','/'];



const calculate = (val) =>{

    if(val === '='){
        if(input === ''){
            setOutput('Error');

        }else{
            try{
                setOutput(eval(input));
            }catch(e){
                setOutput('Error');
            }           
        }

    }else if(val === 'C'){
        setInput('');
        setOutput('');

    }else{
        setInput(prevInput => prevInput +val); //adding val [new value] to existing input 
    }




}

return (
    <div className={style.wrapperDiv}>
        <div className={style.calculator_Div} >

            <h1>React Calculator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={()=>setInput(input)}
                className={style.input_style}/>

            <div className={style.outputDiv}>{output}</div>

            <div className={style.calc_div}>

                { number_arr.map((ele) =>{
               
                    return (<button 
                              key={ele}
                              className={style.calc_button}
                              onClick={ ()=>calculate(ele) } >{ele}
                              </button>);
                            })                
                }   
                
            </div>
        </div>
    </div>);


}
export default Calculator;