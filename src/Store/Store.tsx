import { create } from 'zustand'

interface ModalState {
    modalContent: React.ReactNode | null;
    updateModalContent: (content: React.ReactNode) => void;
  };

const useModalStore=create<ModalState>((set)=>({
   modalContent:null,
   updateModalContent: (content) => set(() => ({ modalContent: content })),
}))

export default useModalStore;