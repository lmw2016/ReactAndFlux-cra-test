import React from "react";
import TextInput from './TextInput'
import { Link } from 'react-router-dom';

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      
          <TextInput
            id="title"
            label="text"
            onChange={props.onChange}
            name="title"
            value={props.course.title}
            error={props.errors.title}
          />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            onChange={props.onChange}
            name="authorId"
            value={props.course.authorId||""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId&&(
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

          <TextInput
            id="category"
            name="category"
            label="category"
            onChange={props.onChange}
            value={props.course.category}
            error={props.errors.category}
          />
     
      <input type="submit" value="Save" className="btn btn-primary" /> {' '}
      <Link className="btn btn-primary" to="/courses">Go Back to Course list</Link>
    </form>
  );
}

export default CourseForm;
