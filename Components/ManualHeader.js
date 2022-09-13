
import {useMoralis} from "react-moralis"
import {useEffect} from "react"

export default function ManualHeader(){

        const {enableWeb3, account,isWeb3Enabled,Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis()
        console.log(` "isWeb3Enabled" status is ${isWeb3Enabled}`)
        console.log (` Account is : ${account}`)
        console.log(`(typeof window ${(typeof window)}`)

        //This line address the issue when reload makes it forget about connection already.
        // following line refereshes, whenever "isWeb3Enabled" state changes.
        useEffect(()=>{
            if (isWeb3Enabled) return 
            if (typeof window !== "undefined"){
                if (window.localStorage.getItem("connected")){ //if key exists, enable web3
                    enableWeb3()
                }
            }
        }, [isWeb3Enabled]) 
        // read on strict.mode on git repo
        // no array, run on every render 
        // empty array, run once
        // dependency array, run when the stuff in it changesan
        useEffect(()=>{
            Moralis.onAccountChanged((account) => {
                console.log(`Account changed to ${account}`)
                if (account == null){
                    window.localStorage.removeItem("connected")
                    deactivateWeb3()
                    console.log("Null account found")
                }
            })          
        }, []) 


    return (<div>
            {account ? (<div>Connected to {account.slice(0,6)}...{account.slice(account.length-4)}</div>) : (<button onClick={
                async ()=>{ await enableWeb3() 
                            if (typeof window !== "undefined") { 
                                window.localStorage.setItem("connected","injected")} 
                           }}
                           disabled={isWeb3EnableLoading}
                           >Connect</button>)}
           
    </div>)
}


