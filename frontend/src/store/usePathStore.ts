import { create } from "zustand";

interface PathState{
  pathName: string;
  setPathName: (path:string) => void;
}

export const usePathStore = create<PathState>((set) =>({
  pathName: "",
  setPathName: (path: string) => set({pathName: path}),
}))