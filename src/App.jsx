import React from "react";
import NoProjectComponent from "./components/NoProjectComponent";
import FormComponent from "./components/FormComponent";
import LeftPanelComponent from "./components/LeftPanelComponent";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsObj, setProjectsObj] = React.useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });
  const [addProjectClicked, setAddProjectClicked] = React.useState(false);

  function handleAddProject() {
    setAddProjectClicked(true);
    setProjectsObj(prevState => {
      return{
        ...prevState,
        selectedProject: null,
        projects: []
      }
    })
  }

  function handleCancelClick() {
    setAddProjectClicked(false);
    setProjectsObj(prevState => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects]
      }
    })
  }

  function handleSaveClick({title, description, dueDate}) {
    console.log('title', title, 'description', description, 'dueDate', dueDate);
    
    setAddProjectClicked(false);
    setProjectsObj(prevState => {
      return {
        ...prevState,
        id: projectsObj.projects.length + 1,
        projects: [...projectsObj.projects, {
          title,
          description,
          dueDate
        }]
      }
    });
  }

  function handleChangeClick(){
    
  }

  function handleAddTask(task){
    console.log('add task===', task);
    console.log('add task===', projectsObj);
    
    setProjectsObj(prevState => {
      return {
      ...prevState,
      tasks: [...projectsObj.tasks, 
        {
        title: task
        }
      ]
    }
    });
  }

  function handleClearTask(task) {
    console.log('projectsObj.tasks.filter(t => t.title !== task)====', projectsObj.tasks.filter(t => t.title !== task));
    
    setProjectsObj(prevState => {
      return {
      ...prevState,
      tasks: projectsObj.tasks.filter(t => t.title !== task)
    }
    });
  }

  function handleProjectDetail(project) {
    console.log('handleProjectDetail====', project);
    
    setProjectsObj(prevState => {
      return {
        ...prevState,
        selectedProject: project,
        projects: [...projectsObj.projects]
      }
    })
  }

  console.log('selected data====', projectsObj);
  
  let content;
  if (projectsObj.selectedProject === undefined) {
    content = <NoProjectComponent addProject={handleAddProject} />
  } else if (projectsObj.selectedProject === null) {
    content = <FormComponent saveClick={handleSaveClick} cancelClick={handleCancelClick} onChange={handleChangeClick}/>
  } else {
    content = <SelectedProject
    project={projectsObj.selectedProject}
    onAdd={handleAddTask}
    onClear={handleClearTask}
    tasks={projectsObj.tasks}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <LeftPanelComponent addProject={handleAddProject} projects={projectsObj.projects} projectClick={handleProjectDetail} />
      {content}
    </main> 
  );
}

export default App;
