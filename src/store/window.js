// for keeping track of open windows we will use zustand - state management
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants/constant";
import { create } from "zustand";
import { immer} from "zustand/middleware/immer";
const useWindowStore=create(
    immer((set)=>({
    windows:WINDOW_CONFIG,
    nextZIndex:INITIAL_Z_INDEX+1,

    openWindow:(windowKey,data=null)=>set((state)=>{
        const win=state.windows[windowKey];
        win.isOpen=true;
        win.zIndex=state.nextZIndex;
        win.data=data ??win.heart
        state.nextZIndex++;

        

    }),
    closeWindow:(windowKey)=>set((state)=>{
        const win=state.windows[windowKey];
        win.isOpen=false;
        win.zIndex=state.nextZIndex;
        win.data=null;


    }),
    focusWindow:(windowKey)=>set((state)=>{
        const win=state.windows[windowKey];
        win.zIndex=state.nextZIndex++;

    }),

})),
);
export default useWindowStore
