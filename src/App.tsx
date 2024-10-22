import React, {useState} from 'react';
import './App.css';
import FileExplorer from "./components/FileExplorer";
import {fileStructure} from './constants'

function App() {
  const [selectedFileId, setSelectedFileId] = useState<number>();

  const onFileSelect = (id: number) => setSelectedFileId(id)
  return (
    <div className='explorer-wrapper'>
      <FileExplorer config={fileStructure} onFileSelect={onFileSelect} selectedFileId={selectedFileId}/>
    </div>
  );
}

export default App;
