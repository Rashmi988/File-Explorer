import React, {useContext} from "react";
import FolderHierarchy from "./FolderHierarchy";
import { FILE_TYPE } from "../../constants";
import { FileExplorerProps } from "./model";
import ActionsPopup from "../ActionsPopup";
import './FileExplorer.css'
import DoubleClickFileContext from "../../context/double-click";

const FileExplorer: React.FC<FileExplorerProps> = ({ config, onFileSelect, selectedFileId }) => {
  const { currentFile, setFileContext } = useContext(
    DoubleClickFileContext
  ) as any;

  const handleContextMenu = (e: React.MouseEvent, fileName: string) => {
    e.preventDefault(); 
    setFileContext( fileName );
  };

  const handleAction = (action: string) => {
    if (currentFile) {
      console.log(`${action}: ${currentFile}`);
      setFileContext(null); 
    }
  };

  return (
    <div className="content">
      {config.map((conf) => {
        if (conf?.type === FILE_TYPE.FILE) {
          return (
          <div className="file-wrapper">
            <div key={conf.id}
              className={`file ${selectedFileId === conf.id ? "active" : ""}`}
              onContextMenu={(e) => handleContextMenu(e, conf.name)}
              onClick={() => onFileSelect?.(conf.id)}
            >
              {conf?.name}
            </div>
            {currentFile === conf?.name && (
              <ActionsPopup
                onClose={() => setFileContext(null)}
                onAction={handleAction}
              />
            )}
            </div>
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
