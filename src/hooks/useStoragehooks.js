import {projectStorage,projectfirestore,timestamp} from '../firebase/config'
import {useState,useEffect} from 'react'

const useStorage=(file)=>{
    const [progress,setProgress]=useState(0)
    const [error,setError]=useState(null)
    const [url,setUrl]=useState(null)

    useEffect(()=>{
        //reference
        const storageRef=projectStorage.ref(file.name)
        const collectionRef=projectfirestore.collection('images')
        storageRef.put(file).on('state change',(snap)=>{
            let percentage=(snap.bytesTransferred / snap.totalBytes)*100
            setProgress(percentage)
        },
        (error)=>{setError(error)}
        ,async()=>{
            // this function will fire when upload fully complete
            const url=await storageRef.getDownloadURL()
            const createdAt=timestamp()
            collectionRef.add({url,createdAt})
            setUrl(url)
        })
    },[file])

    return {progress,url,error}

}

export default useStorage