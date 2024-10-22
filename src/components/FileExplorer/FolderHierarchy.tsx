import { useState } from "react";
import FileExplorer from "../FileExplorer";
import { FileHierarchyProps } from "./model";

const FolderHierarchy: React.FC<FileHierarchyProps> = ({ conf, onFileSelect, selectedFileId }) => {
  const [isFolderOpen, setIsFolderOpen] = useState<Record<string, boolean>>({});

  const onFolderClick = (id: number) => {
    setIsFolderOpen({
      ...isFolderOpen,
      [id]: !isFolderOpen?.[id],
    });
  };

  return (
    <div>
      <button className="btn" onClick={() => onFolderClick(conf?.id)}>
        {isFolderOpen[conf.id] ? "-" : "+"}
      </button>
      <span className="folder">{conf?.name}</span>
      {(!!isFolderOpen?.[conf?.id] && (
        <div className="sub-folder-wrapper">
          <FileExplorer config={conf?.data || []} onFileSelect={onFileSelect} selectedFileId={selectedFileId} />
        </div>
      )) ||
        null}
    </div>
  );
};

export default FolderHierarchy;
