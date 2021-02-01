import { Link } from "react-router-dom";
import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";

const InstructorTag = ({ instructor, goTo }) => {
  const { emoji, name, slug } = instructor;

  return (
    // <div
    //   onClick={() => {
    //     goTo(`/instructors/${slug}`);
    //   }}
    // >
    <Link to={`/instructors/${slug}`}>
      <TagWrapper>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile>Go to profile</GoToProfile>
      </TagWrapper>
    </Link>
    // </div>
  );
};

export default InstructorTag;
