import "./style.css";
import Router, { Render } from "./utils/index";
import Task from "./pages/TaskPage";
import { handleEvent } from "./handles/handleTask";

const app = document.getElementById("app");
Router.on("/", () => Render(app, Task()),
    {
        after(){
            handleEvent()
        }
    }
);

Router.resolve();
