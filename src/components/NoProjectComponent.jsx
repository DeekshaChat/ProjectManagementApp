
import NoProjectImg from './../assets/no-projects.png';
import ButtonComponent from './ButtonComponent';
export default function NoProjectComponent({addProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={NoProjectImg} alt="No Project" className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
      <p className='mt-8'>
        <ButtonComponent value={'Create New Project'} onClick={addProject}/>
      </p>
    </div>
  )
}
    
