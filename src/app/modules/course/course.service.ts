import { TCourses } from "./course.interface";
import { Course } from "./course.model";


const createCourseService = async(payLoad:TCourses)=>{
    const result = await Course.create(payLoad)
    return result;
}

const getAllCourseService = async() =>{
    const result = await Course.find();
    return result;
}

const getSingleCourseService = async(id:string) =>{
    const result = await Course.findOne(id);
    return result;
}

const deleteCourseService = async(id:string) =>{
    const result = await Course.findOneAndDelete(id);
    return result;
}


export const CourseService = {
    createCourseService,
    getAllCourseService,
    getSingleCourseService,
    deleteCourseService
}