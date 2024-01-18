import { useContext } from "react";
import { DialogContext } from "./Dialog.context";

export const useDialogContext = () => {
    const dialogContext = useContext(DialogContext);
  
    if (!dialogContext) {
      throw new Error('StorageContext can be used only in StorageProvider!');
    }
  
    return dialogContext;
  };