import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button type={props.type} className={styles["form-control__submit-button"]}>{props.children}</button>
  );
}

export default Button;
