import { useCallback, useEffect,memo } from "react"

const Calculatecube=(props)=>{
    let num=props.input
    useEffect((num)=>{
console.log("inside useeffect");
 },[])
    const memorizefunction = useCallback((num)=>{
        console.log("inside usecallback"); 
        return
    },[])
    memorizefunction();
  
    return(
        <>Calculatecube{num}
        </>
    )
}
export default memo(Calculatecube);