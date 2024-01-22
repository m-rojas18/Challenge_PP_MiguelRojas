//File to have methods to handle CRUD of tasks
import API from "./API";
export default {
    saveTask(task) {
        return API.post('register', task);
    }
}

