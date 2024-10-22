export const FILE_TYPE = {
    FILE : "file",
    FOLDER : "folder",
  }

export type FileType = typeof FILE_TYPE[keyof typeof FILE_TYPE];

export interface FileItem {
    id: number;
    type: FileType;  
    name: string;
    meta?: string;             
    data?: FileItem[];       
  }

// export interface FileExplorerProps {
//     config: FileItem[];
//     onFileSelect: (id: number) => void;
//     selectedFileId?: number | undefined;
// }

// export interface FileHierarchyProps {
//     conf: FileItem;
//     onFileSelect: (id: number) => void;
//     selectedFileId?: number | undefined;
// }

// export interface ActionsPopupProps {
//     onClose: () => void;
//     onAction: (action: string) => void;
//   }

  export const fileStructure: FileItem[] = [{
    id: 1,
    type: "folder",
    name: "parent",
    data: [{
            id: 2,
            type: "folder",
            name: "root",
            data: [{
                    id: 3,
                    type: "folder",
                    name: "src",
                    data: [{
                        id: 4,
                        type: "file",
                        meta: 'js',
                        name: "index.js"
                    }]
                },
                {
                    id: 5,
                    type: "folder",
                    name: "public",
                    data: [{
                        id: 6,
                        type: "file",
                        meta: 'ts',
                        name: "index.ts"
                    }]
                },
                {
                    id: 7,
                    type: "file",
                    meta: 'html',
                    name: "index.html"
                },
                {
                    id: 8,
                    type: "folder",
                    name: "data",
                    data: [{
                        id: 9,
                        type: "folder",
                        name: "images",
                        data: [{
                            id: 10,
                            type: "file",
                            meta: 'img',
                            name: "image.png"
                        },
                        {
                            id: 11,
                            type: "file",
                            meta: 'img',
                            name: "image2.webp"
                        }]
                    },
                    {
                        id: 12,
                        type: "file",
                        meta: 'svg',
                        name: "logo.svg"
                    }]
                },
                {
                    id: 13,
                    type: "file",
                    meta: 'css',
                    name: "style.css"
            }]
        }]
    }];