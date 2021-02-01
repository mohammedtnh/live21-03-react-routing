import { Link, Redirect, useParams } from "react-router-dom";
import { Button, ButtonsWrapper } from "./styles";

const InstructorProfile = ({ instructors, instructorSlug, goTo }) => {
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );
  // if (!instructor) goTo("/404");
  if (!instructor) <Redirect to="/404" />;

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        {/* <div onClick={() => goTo("/")}> */}
        <Link to="/">
          <Button color="tomato" textColor="white">
            Go back home
          </Button>
        </Link>
        {/* </div> */}
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
