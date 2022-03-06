import classes from "./StudentItem.module.css";

const StudentItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <h3>Name: {props.author}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Phone: {props.phone}</h3>
        <h3>Grade: {props.grade} %</h3>
      </figure>
    </li>
  );
};

export default StudentItem;
