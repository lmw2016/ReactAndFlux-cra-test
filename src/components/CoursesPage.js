import React from 'react';
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component{
  state={
      courses:[]
  };

  componentDidMount(){ //Mount
      getCourses().then(courses=>this.setState({courses:courses}));
  }

    render(){
        return (<>
        <h2>Courses</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author ID</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                {this.state.courses.map(course=>{
                    return (
                     <tr key={course.id}>
                        <th>{course.title}</th>
                        <th>{course.authorId}</th>
                        <th>{course.category}</th>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        </>
        )
    }
}

export default CoursesPage;