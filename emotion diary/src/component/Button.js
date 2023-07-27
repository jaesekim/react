import "./Button.css"

const Button = ({ text, type, onClick}) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button 
    className={["Button", `Button_${btnType}`].join(" ")} 
    onClick={onClick}
    >
      { text }
    </button>
  );
}

// 아무런 type도 props로 전달하지 않을 때 대비해서 지정
// type을 지정하지 않으면 props에는 default가 기본값으로 설정
Button.defaultProps = {
  type: "default",
};

export default Button