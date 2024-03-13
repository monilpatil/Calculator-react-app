import css from "./Display.module.css";

const Display = ({calVal})=>{
  return <input type="text" className={css.display}  value={calVal} readOnly/>
}
export default Display