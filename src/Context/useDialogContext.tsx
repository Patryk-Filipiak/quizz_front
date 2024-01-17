import { useContext } from "react";
import { DialogContext } from "./Dialog.context";

export const useDialogContext = () => {
    const values = useContext(DialogContext);
  
    if (!values) {
      throw new Error('StorageContext can be used only in StorageProvider!');
    }
  
    return values;
  };