import React, {useState} from 'react';
import FileExplorer from "./components/FileExplorer";
import {fileStructure} from './constants'
import DoubleClickFileContext from "./context/double-click";

function App() {
  const [selectedFileId, setSelectedFileId] = useState<number>();
  const [fileContext, setFileContext] = useState<string | null >(null);

  const onFileSelect = (id: number) => setSelectedFileId(id)
  return (
    <DoubleClickFileContext.Provider
    value={{ currentFile: fileContext, setFileContext }}
  >
    <div className='explorer-wrapper'>
      <FileExplorer config={fileStructure} onFileSelect={onFileSelect} selectedFileId={selectedFileId} />
    </div>
    </DoubleClickFileContext.Provider>
  );
}

export default App;
