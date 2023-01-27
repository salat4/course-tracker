import React from 'react'
// import zxc from "../../functions/courses"
const Course = ({ course, refreshCourses }) => {

    
    const markCoursePurchased = async () => {
        try {
            await fetch('https://course-tracker.mdima4266.workers.dev/', {
                method: 'PUT',
                body: JSON.stringify({ ...course, purchased: true }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    const deleteCourse = async () => {
        try {
            await fetch('https://course-tracker.mdima4266.workers.dev/', {
                method: 'DELETE',
                body: JSON.stringify({ id: course.id }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="list-group-item">
            <a href={course.link}>
                <h4 className="list-group-item-heading">{course.Name}</h4>
            </a>
            <p>
                Tags:{' '}
                {course.Tags && course.Tags.map((tag, index) => (
                    <span className="badge badge-primary mr-2" key={index}>{tag}</span>
                ))}
            </p>
            {!course.purchased && (
                <button className="btn btn-sm btn-primary" onClick={markCoursePurchased}>Purchased</button>
            )}
            <button className="btn btn-sm btn-danger ml-2" onClick={deleteCourse}>Delete</button>
        </div>
    )
}
export default Course



// {
//     "Name": "asdasdфівфівфів",
//     "id": "recUSv8AEzEP69TwX",
//     "purchased": true
//     }