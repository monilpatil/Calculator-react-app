import css from "./ButtonContainer.module.css";
const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "/",
    "=",
    "C",
  ];

  return (
    <div className={css.btnsContainor}>
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className={css.button} onClick={()=>onButtonClick(buttonName)}>
          {buttonName}
          
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
