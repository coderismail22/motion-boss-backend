import catchAsync from "../../utils/catchAsync";
import { EnrollmentServices } from "./enrollment.service";


const CreateEnrollmentController = catchAsync(async (req, res) => {
  const result = await EnrollmentServices.CreateEnrollmentService(req.body);
  res.status(200).json({
    success: true,
    message: 'Enrollment created successfully',
    data: result,
  });
});

const GetAllEnrollmentController = catchAsync(async(req,res)=>{
    const result = await EnrollmentServices.getAllEnrollments();
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Enrollment created successfully',
        data: result,
    });
})

const GetSingleEnrollmentController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await EnrollmentServices.getSingleEnrollment(id);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Enrollment created successfully',
        data: result,
    });
})

const UpdateEnrollmentController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await EnrollmentServices.updateEnrollment(id,req.body);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Enrollment created successfully',
        data: result,
    });
})

const DeleteEnrollmentController = catchAsync(async(req,res)=>{
    const {id} = req.params;
    const result = await EnrollmentServices.deleteEnrollment(id);
    res.status(200).json({
        success: true,
        statusCode: res.statusCode,
        message: 'Enrollment created successfully',
        data: result,
    });
})





export const EnrollmentController = {
  CreateEnrollmentController,
  GetAllEnrollmentController,
  GetSingleEnrollmentController,
  UpdateEnrollmentController,
  DeleteEnrollmentController,
};
