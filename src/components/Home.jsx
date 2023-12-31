import noProjectsImg from '../assets/no-projects.png';

const Home = props => {
  return (
    <div className="flex items-start justify-center pt-32">
        <div className="flex flex-col items-center">
            <img
                className="mb-5 w-20"
                src={noProjectsImg}
                alt="project icon"
            />
            <h2 className="mb-5 text-2xl font-semibold text-stone-600">
                No Project Selected
            </h2>
            <p className="mb-8 text-stone-400">
                Select a project or get started with a new one
            </p>
            <button
                className="rounded-md bg-stone-700 p-4 text-stone-400"
                onClick={props.onCreate}
            >
                Create new project
            </button>
        </div>
    </div>
  )
}

export default Home;