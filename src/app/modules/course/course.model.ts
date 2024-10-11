import { Schema, model } from 'mongoose';
import { TCourses, TTeacher } from './course.interface';

const teacherSchema = new Schema<TTeacher>({
  teacherId: { type: String, required: true },
  teacherName: { type: String, required: true },
  designation: { type: String, required: true },
});

const courseSchema = new Schema<TCourses>({
  id: {
    type: String,
    enum: {
      values: ['101', '102', '103', '104', '105', '106'],
    },
  },
  courseName: {
    type: String,
    enum: {
      values: [
        'Video Editing',
        'Motion Graphics',
        'Web Development',
        'Graphics Design',
        'Digital Marketing',
      ],
      message: '{VALUE} is not a valid course name',
    },
  },
  teacherDetails: { type: teacherSchema, required: true },
  totalClass: { type: Number, required: true },
  amount: { type: Number, required: true },
  classDuration: {
    type: String,
    enum: { values: ['2 Month', '3 Month', '4 Month', '5 Month', '6 Month'] },
    required: true,
  },
});

courseSchema.pre('save', async function (next) {
  const isExistCourse = await Course.findOne({
    courseName: this.courseName,
  });
  if(isExistCourse){
    throw new Error('Course already exists');
  }
  next();
});

export const Course = model<TCourses>('Course', courseSchema);
