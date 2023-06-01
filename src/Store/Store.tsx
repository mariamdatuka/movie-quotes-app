import { create } from 'zustand'

interface ModalState {
    openModal:boolean;
    setOpenModal:()=>void;
    modalContent: React.ReactNode | null;
    updateModalContent: (content: React.ReactNode) => void;
  };

const useModalStore=create<ModalState>((set)=>({
   openModal:false,
   setOpenModal:()=>set((state)=>({openModal: !state.openModal })),
   modalContent:null,
   updateModalContent: (content) => set(() => ({ modalContent: content })),
}))

export default useModalStore;