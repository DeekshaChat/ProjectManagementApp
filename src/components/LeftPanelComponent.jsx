import ButtonComponent from "./ButtonComponent";

export default function LeftPanelComponent({children, addProject, projects, projectClick}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
     <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h1>
     <ButtonComponent value={'+ Add Project'} onClick={addProject}/>
     <ul className="mt-8">
      {projects.map((project, index) => (
        <li key={`${project.title}_${index}`}
        >
          <button 
          onClick={() => projectClick(project)}
          className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">{project.title}</button>
        </li>))}
     </ul>
    </aside>
  )
}