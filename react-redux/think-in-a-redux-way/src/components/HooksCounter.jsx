import { useState } from "react";
import { connect, useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "../redux/counter/actions";
function HooksCounter({}) {
const count = useSelector((state)=>state.counter.value)

const dispatch = useDispatch()

const incrementHandler =(value)=>{
dispatch(increment(value))
}
const decrementHanlder =(value)=>{
dispatch(decrement(value))
}
  
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>incrementHandler()}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={()=>decrementHanlder()}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default HooksCounter