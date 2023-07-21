const Body = (props) => {
  console.log(props)
  return (
    <div className="body">
      {props.name}
    </div>
  );
}
export default Body