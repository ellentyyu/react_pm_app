import { useState } from 'react';
import ProjectsSidebar from './components/ProjectsSidebar';
import MainWrapper from './components/MainWrapper';
import Home from './components/Home';
import ProjectView from './components/ProjectView';
import CreateProject from './components/CreateProject';
const App = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [isViewing, setIsViewing] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [projectList, setProjectList] = useState([
        {
            id: 222,
            title: 'project01 its a very lo ooo oo oo o oo oo oo ooo ng naaa aa aaaa aaaa meeeee eeeeee eeeee',
            desc: '蛋包飯要咖哩還是奶油口味的發生，到底需要如何做到，不蛋包飯要咖哩還是奶油口味的發生，又會如何產生。我們一般認為，抓住了問題的關鍵，其他一切則會迎刃而解。這種事實對本人來說意義重大，相信對這個世界也是有一定意義的。',
            date: new Date('2022-03-25'),
            taskList: [],
        },
        {
            id: 3323,
            title: 'project02',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsam numquam voluptatum facere, nam optio nulla. Quasi iure harum asperiores.',
            date: new Date('2022-07-18'),
            taskList: [],
        },
    ]);

    let selectedProject = projectList.find(
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
    const saveNewProjectHandler = (project) => {
        setProjectList([...projectList, project]);
    };
    const viewProjectHandler = (id) => {
        setSelectedId(id);
        setIsViewing(true);
    };
    const deleteProjectHandler = () => {
        setProjectList(
            projectList.filter((project) => project.id !== selectedId),
        );
        setIsViewing(false);
        setSelectedId(null);
    };

    const addNewTaskHandler = (task) => {
        const nextProjectList = projectList.map((project) => {
            if (project.id === selectedId) {
                return { ...project, taskList: [...project.taskList, task] };
            } else {
                return project;
            }
        });

        setProjectList(nextProjectList);
    };

    const clearTaskHandler = (taskIdx) => {
        const nextProjectList = projectList.map((project) => {
            if (project.id === selectedId) {
                return {
                    ...project,
                    taskList: project.taskList.filter(
                        (_, idx) => idx !== taskIdx,
                    ),
                };
            } else {
                return project;
            }
        });

        setProjectList(nextProjectList);
    };

    return (
        <div className="flex min-h-screen bg-neutral-50">
            <ProjectsSidebar
                projectList={projectList}
                onCreate={createProjectHandler}
                onView={viewProjectHandler}
                selectedId={selectedId}
            />
            <MainWrapper>
                {!isCreating && !isViewing && (
                    <Home onCreate={createProjectHandler} />
                )}
                {isCreating && !isViewing && (
                    <CreateProject
                        onSaveProject={saveNewProjectHandler}
                        onDone={finishCreatingHandler}
                    />
                )}
                {isViewing && (
                    <ProjectView
                        project={selectedProject}
                        onAddTask={addNewTaskHandler}
                        onClearTask={clearTaskHandler}
                        onDeleteProject={deleteProjectHandler}
                    />
                )}
            </MainWrapper>

        </div>
    );
};

export default App;
