import { Link } from "react-router-dom";
import InstructorTag from "./InstructorTag";

const Home = ({ instructors, goTo }) => {
  return (
    <>
      <h2>When in doubt, ask for help!</h2>
      {instructors.map((instructor) => (
        <Link to="">
          <InstructorTag
            instructor={instructor}
            key={instructor.slug}
            goTo={goTo}
          />
        </Link>
      ))}
    </>
  );
};

export default Home;
