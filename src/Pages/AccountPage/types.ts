import { SetParams } from "../../Components/Layout/types";
import { DialogContextInterface } from "../../Context/Dialog.types";
import { AppDispatch } from "../../State/store";

export interface PageSectionParams {
    dialog: DialogContextInterface;
    param: SetParams;
    dispatch: AppDispatch;
}