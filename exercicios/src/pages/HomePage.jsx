import CourseCard from "../components/CourseCard";

function HomePage() {
  return (
    <div className="homePage">
      <CourseCard
        imageUrl="/logo.png"
        name="React Js"
        category="front-end"
        description="Curso sobre React Js"
        duration={6}
      />
    </div>
  );
}

export default HomePage;
