import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
import CreateProject from "./components/CreateProject";
const App = () => {
    return (
        <div className="flex h-screen bg-neutral-100">
            <SideBar />
            {/* <MainView /> */}
            <CreateProject />
        </div>
    );
};

export default App;
