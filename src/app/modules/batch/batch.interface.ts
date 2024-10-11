import { Types } from "mongoose";

export type TBatch = {
    course : Types.ObjectId;
    batchNumber : number;
    startDate? : string;
    endDate?: string;
    batchTime?: string;
    isAvailable : boolean;

}