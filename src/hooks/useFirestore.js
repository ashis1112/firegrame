import {useEffect,useState} from 'react'
import {projectfirestore} from '../firebase/config'


const useFirestore=(collection)=>{
    const [docs,setDocs]=useState([])

    useEffect(()=>{
        const unsub=projectfirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let documents=[]
            snap.forEach(doc=>{
                documents.push({...doc.data(),id:doc.id})
            })
            setDocs(documents)
        })
        // cleanup function,to unsubscribe services
        return ()=>unsub()
    },[collection])

    return {docs}
}

export default useFirestore