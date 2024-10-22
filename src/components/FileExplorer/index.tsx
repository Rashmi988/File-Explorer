import React, {useState} from "react";
import FolderHierarchy from "./FolderHierarchy";
import { FILE_TYPE, FileExplorerProps } from "../../constants";
import ActionsPopup from "../ActionsPopup";
import './FileExplorer.css'

const FileExplorer: React.FC<FileExplorerProps> = ({ config, onFileSelect, selectedFileId }) => {

  const [fileContext, setFileContext] = useState<string | null >(null);

  const handleContextMenu = (e: React.MouseEvent, fileName: string) => {
    e.preventDefault(); 
    setFileContext( fileName );
  };

  const handleAction = (action: string) => {
    if (fileContext) {
      console.log(`${action}: ${fileContext}`);
      setFileContext(null); 
    }
  };

  return (
    <div className="content">
      {config.map((conf) => {
        if (conf?.type === FILE_TYPE.FILE) {
          return (
          <>
            <div key={conf.id}
              className={`file ${selectedFileId === conf.id ? "active" : ""}`}
              onContextMenu={(e) => handleContextMenu(e, conf.name)}
              onClick={() => onFileSelect?.(conf.id)}
            >
              {conf?.name}
            </div>
            {fileContext && (
              <ActionsPopup
                onClose={() => setFileContext(null)}
                onAction={handleAction}
              />
            )}
            </>
          );
        } else {
          return (
            <div>
              <FolderHierarchy conf={conf} onFileSelect={onFileSelect} selectedFileId={selectedFileId} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default FileExplorer;
