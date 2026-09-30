import React from 'react';

const CourseCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 px-4 max-w-6xl mx-auto">
           <img src="/courses/course_card_1.png" alt="Course Card" /> 
           <img src="/courses/course_card_2.png" alt="Course Card" /> 
           <img src="/courses/course_card_3.png" alt="Course Card" /> 
           <img src="/courses/course_card_4.png" alt="Course Card" /> 
           <img src="/courses/course_card_5.png" alt="Course Card" /> 
           <img src="/courses/course_card_6.png" alt="Course Card" /> 
        </div>
    );
};

export default CourseCard;