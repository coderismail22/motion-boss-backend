export type TTeacher = {
    teacherName: string;
    teacherId: string;
    designation: string;
}


export type TCourses = {
    id: '101' | '102' | '103' | '104' | '105' | '106' ;
    courseName:'Video Editing'| 'Motion Graphics' | 'Web Development'| 'Graphics Design' | 'Digital Marketing';
    teacherDetails:TTeacher,
    totalClass: number;
    amount: number;
    classDuration: '2 Month' | '3 Month' | '4 Month' | '5 Month' | '6 Month';
}