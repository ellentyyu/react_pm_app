import { useState } from "react";
import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
import ProjectView from "./components/ProjectView";
import CreateProject from "./components/CreateProject";
const App = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [projectList, setProjectList] = useState([
        {
            id: 222,
            title: "project01 its a very lo ooo oo oo o oo oo oo ooo ng naaa aa aaaa aaaa meeeee eeeeee eeeee",
            decs: "test description",
        },
        {
            id: 3323,
            title: "project02",
            decs: "test description",
        },
    ]);

    let selectedProject = projectList.filter(
        (project) => project.id === selectedId,
    );

    const createProjectHandler = () => {
        if (selectedId) {
            setIsViewing(false);
            setSelectedId(null);
        }
        
        setIsCreating(true);
    };
    const finishCreatingHandler = () => {
        setIsCreating(false);
    };
    const addNewProjectHandler = (project) => {
        setProjectList([...projectList, project]);
    };
    const viewProjectHandler = (id) => {
        console.log("view", id);
        setSelectedId(id);
        setIsViewing(true);
    };

    return (
        <div className="flex h-screen bg-neutral-100">
            <SideBar
                projectList={projectList}
                onCreate={createProjectHandler}
                onView={viewProjectHandler}
                selectedId={selectedId}
            />
            {(!isCreating && !isViewing) && <MainView onCreate={createProjectHandler} />}
            {(isCreating && !isViewing) && (
                <CreateProject
                    onAdd={addNewProjectHandler}
                    onDone={finishCreatingHandler}
                />
            )}
            {isViewing && <ProjectView project={selectedProject} />}
        </div>
    );
};

export default App;
