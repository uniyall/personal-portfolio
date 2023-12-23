import React from "react";

    
function ProjectItem({ name, image }) {
  return (
    <div className='w-[300px] h-[300px] rounded-md m-[40px] text-center shadow-md'>
        {image === 'wip' ? <div className='rounded-t-md w-full h-4/5 bg-gradient-to-r from-cyan-500 to-blue-500'/> : <img src={`${image}`} alt="" className="rounded-t-md w-full h-4/5 " />}
        
      <h2 className="mt-3 mb-0 text-xl">{name}</h2>
    </div>
  );    
}

export default ProjectItem;
