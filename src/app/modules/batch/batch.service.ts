import { TBatch } from "./batch.interface";
import { Batch } from "./batch.model";


const CreateBatchService = async(payLoad:TBatch) =>{
    const result = await Batch.create(payLoad)
    return result;
}

const GetAllBatchService = async()=>{
    const result = await Batch.find();
    return result
}

const GetSingleBatchService = async(id:string) =>{
    const result = await Batch.findOne([{ $match: { id } }]);
    return result
}

const DeleteSingleBatchService = async(id:string) =>{
    const result = await Batch.findByIdAndDelete(id)
    return result;
}

export const BatchService = {
    CreateBatchService,
    GetAllBatchService,
    GetSingleBatchService,
    DeleteSingleBatchService

}