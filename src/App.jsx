import SideBar from "./components/SideBar";
import MainView from "./components/MainView";
const App = () => {
    return (
        <div className="flex h-screen bg-neutral-100">
            <SideBar />
            <MainView />
        </div>
    );
};

export default App;
