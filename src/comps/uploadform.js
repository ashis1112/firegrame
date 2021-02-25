import React,{useState} from 'react'
import Progressbar from './progressbar'

const Uploadform=()=>{
    const [file,setFile]=useState(null)
    const [error,setError]=useState(null)

    const types=['image/png','image/jpeg']
    const handlechange=(e)=>{
        const selectedFile=e.target.files[0]
        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile)
            setError(null)
        }else{
            setFile(null)
            setError('Please select an image file (png or jpeg)')
        }
    }   

    return(
        <>
        <form >
            <label>
            <input type='file' onChange={handlechange} />
            <span>+</span>
            </label>
        </form>
        <div className='output'>
            {error && <div className='error'>{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <Progressbar file={file} setFile={setFile} />}
        </div>
        </>
    )
}

export default Uploadform