import {FileItem} from '../../constants'

export interface FileExplorerProps {
    config: FileItem[];
    onFileSelect: (id: number) => void;
    selectedFileId?: number | undefined;
}

export interface FileHierarchyProps {
    conf: FileItem;
    onFileSelect: (id: number) => void;
    selectedFileId?: number | undefined;
}