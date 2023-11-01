import { useState } from "react";
import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
import ProjectView from "./components/ProjectView";
import CreateProject from "./components/CreateProject";
const App = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [projectList, setProjectList] = useState([
        {
            id: 222,
            title: 'project01 its a very lo ooo oo oo o oo oo oo ooo ng naaa aa aaaa aaaa meeeee eeeeee eeeee',
            decs: 'test description'
        },
        {
            id: 3323,
            title: 'project02',
            decs: 'test description'
        }
    ]);

    const createProjectHandler = () => {
        setIsCreating(true);
    }
    const addNewProjectHandler = (project) => {
        setProjectList([
            ...projectList,
            project
        ])
    }

    return (
        <div className="flex h-screen bg-neutral-100">
            <SideBar projectList={projectList} onCreate={createProjectHandler} />
            {!isCreating && <MainView onCreate={createProjectHandler} />}
            {isCreating && <CreateProject onAdd={addNewProjectHandler} />}
            {/* <ProjectView /> */}
        </div>
    );
};

export default App;
