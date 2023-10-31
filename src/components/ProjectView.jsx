const ProjectView = () => {
    return (
        <div className="w-[calc(100%-theme(spacing.96))] bg-neutral-100 px-10 pt-32">
            <div className="w-5/6 flex justify-between">
                <h2>Project Title</h2>
                <button type="button">Delete</button>
            </div>
        </div>
    );
}

export default ProjectView;
