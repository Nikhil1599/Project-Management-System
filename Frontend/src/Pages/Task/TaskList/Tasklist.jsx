/* eslint-disable react/jsx-key */
import TaskCard from "../TaskCard/TaskCard";

const Tasklist = () => {
  return (
    <div className="w-[67vw]">
      <div className="space-y-3">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
