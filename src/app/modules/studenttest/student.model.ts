// import bcrypt from 'bcrypt';
// import { Schema, model } from 'mongoose';
// import config from '../../config';
// import {
//   TStudent,
//   TUserName,
// } from './student.interface';

// const userNameSchema = new Schema<TUserName>({
//   firstName: {
//     type: String,
//     required: [true, 'First Name is required'],
//     trim: true,
//     maxlength: [20, 'Name can not be more than 20 characters'],
//   },
//   middleName: {
//     type: String,
//     trim: true,
//   },
//   lastName: {
//     type: String,
//     trim: true,
//     required: [true, 'Last Name is required'],
//     maxlength: [20, 'Name can not be more than 20 characters'],
//   },
// });


// const studentSchema = new Schema<TStudent>(
//   {
//     id: { type: String, required: [true, 'ID is required'], unique: true },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//       maxlength: [20, 'Password can not be more than 20 characters'],
//     },
//     user: {
//       type : Schema.Types.ObjectId,
//       required: true,
//       unique: true,
//       ref: 'User'
//     },
//     name: {
//       type: userNameSchema,
//       required: [true, 'Name is required'],
//     },
//     gender: {
//       type: String,
//       enum: {
//         values: ['male', 'female', 'other'],
//         message: '{VALUE} is not a valid gender',
//       },
//       required: [true, 'Gender is required'],
//     },
//     dateOfBirth: { type: String },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//     },
//     contactNo: { type: String, required: [true, 'Contact number is required'] },


//     address: {
//       type: String,
//       required: [true, 'Present address is required'],
//     },


//     profileImg: { type: String },
//     isActive: {
//       type: String,
//       enum: {
//         values: ['active', 'blocked'],
//         message: '{VALUE} is not a valid status',
//       },
//       default: 'active',
//     },
//     isDeleted: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   {
//     timestamps: true
//   },
// );

// // virtual
// studentSchema.virtual('fullName').get(function () {
//   return this.name.firstName + this.name.middleName + this.name.lastName;
// });

// // pre save middleware/ hook : will work on create()  save()
// studentSchema.pre('save', async function (next) {
//   // console.log(this, 'pre hook : we will save  data');
//   // eslint-disable-next-line @typescript-eslint/no-this-alias
//   const user = this; // doc
//   // hashing password and save into DB
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds),
//   );
//   next();
// });

// // post save middleware / hook
// studentSchema.post('save', function (doc, next) {
//   doc.password = '';
//   next();
// });

// // Query Middleware
// studentSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// studentSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// // [ {$match: { isDeleted : {  $ne: : true}}}   ,{ '$match': { id: '123456' } } ]

// studentSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });

// //creating a custom static method
// studentSchema.statics.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };

// //creating a custom instance method
// // studentSchema.methods.isUserExists = async function (id: string) {
// //   const existingUser = await Student.findOne({ id });

// //   return existingUser;
// // };

// export const Student = model<TStudent, StudentModel>('Student', studentSchema);
