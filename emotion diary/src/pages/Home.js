import Editor from "../component/Editor";

const Home = () => {

  return (
    <div>
      <Editor onSubmit={() => alert('clicked submit button')}/>
    </div>
  );
};

export default Home;