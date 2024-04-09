import { create } from 'zustand';
import {
  IConfig,
  IResumeConfig,
  IResumeData,
  RESUME_CONFIG,
} from './constants';

interface IPrintStore {
  isPrinting: boolean;
  setIsPrinting: (isPrinting: boolean) => void;
}

export const usePrintStore = create<IPrintStore>((set) => ({
  isPrinting: false,
  setIsPrinting: (isPrinting: boolean) => set({ isPrinting }),
}));

interface IResumeConfigStore {
  resumeConfig: IResumeConfig;
  setResumeConfig: (v: IResumeConfig) => void;
  setResumeData: (formData: Partial<IResumeData>) => void;
  setConfig: (formData: Partial<IConfig>) => void;
}

export const useResumeConfigStore = create<IResumeConfigStore>((set) => ({
  resumeConfig: RESUME_CONFIG,
  setResumeConfig: (v) => set({ resumeConfig: v }),
  setResumeData: (formData) =>
    set((state) => {
      state.resumeConfig.templateConfig.data = {
        ...state.resumeConfig.templateConfig.data,
        ...formData,
      };
      return { resumeConfig: { ...state.resumeConfig } };
    }),
  setConfig: (newConfig) =>
    set((state) => {
      state.resumeConfig.templateConfig.config = {
        ...state.resumeConfig.templateConfig.config,
        ...newConfig,
      };
      return { resumeConfig: { ...state.resumeConfig } };
    }),
}));
