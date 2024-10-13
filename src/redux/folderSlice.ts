import { Shortcut } from "@/app/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export  interface FolderInitialState{
    openFolder : Shortcut[],
    minimizedFolders : string[]
}

const initialState: FolderInitialState = {
    openFolder : [],
    minimizedFolders : []
}

const folderSlice = createSlice({
    name : 'folderSlice',
    initialState,
    reducers : {
        openFolders : (state, action : PayloadAction<Shortcut>) => {
          state.openFolder.push(action.payload)
        },
        closeFolder : (state, action : PayloadAction<string>) => {
           state.openFolder = state.openFolder.filter(folder=> folder.name !== action.payload)
        },
        minimizeFolder : (state, action : PayloadAction<string>) => {
            state.minimizedFolders.push(action.payload)
        },
        unMinimizeFolder : (state, action : PayloadAction<string>) => {
            state.minimizedFolders = state.minimizedFolders.filter(folder => folder !== action.payload)
        }
    }
})

export const {openFolders, closeFolder, minimizeFolder, unMinimizeFolder } = folderSlice.actions
export default folderSlice.reducer