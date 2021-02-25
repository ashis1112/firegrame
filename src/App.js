import React,{useState} from 'react';
import Title from './comps/Title';
import Uploadform from './comps/uploadform'
import Imagegrid from './comps/imagegrid'
import Modal from './comps/modal'

function App() {
  const [selectedImg,setSelectedImg]=useState(null)

  return (
    <div className="App">
      <Title/>
      <Uploadform />
      <Imagegrid selectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
