import Sidebar from "../Sidebar/Sidebar";
import Tasklist from "../Task/TaskList/Tasklist";

const Home = () => {
  return (
    <div className="lg:flex px-5 lg:px-20 pt-[2.9vh]">
      <div className="hidden lg:block w-[25vw] relative">
        <Sidebar />
      </div>
      <div className="w-full flex justify-center mb-10">
        <Tasklist />
      </div>
    </div>
  );
};

export default Home;
