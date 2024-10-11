import { TReview } from "./review.interface";
import { Reviews } from "./review.model";

const CreateReviewService = async(payLoad:TReview) =>{
    const result = await Reviews.create(payLoad)
    return result;
}

const GetAllReviewsService = async()=>{
    const result = await Reviews.find();
    return result
}

const GetSingleReviewsService = async(id:string) =>{
    const result = await Reviews.findOne([{ $match: { id } }]);
    return result
}

const DeleteSingleReviewsService = async(id:string) =>{
    const result = await Reviews.findByIdAndDelete(id)
    return result;
}

export const ReviewService = {
    CreateReviewService,
    GetAllReviewsService,
    GetSingleReviewsService,
    DeleteSingleReviewsService

}