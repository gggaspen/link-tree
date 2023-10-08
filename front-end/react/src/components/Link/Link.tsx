import React from 'react'
import './link.css'
import ILink from '../../models/Link.model'

const Link: React.FC<ILink> = () => {
    return (
        // <div className="border border-gray-300 rounded-md p-2 w-full sm:w-auto">
        //     <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
        //         <img src={img} className="w-8 h-8 object-cover" alt={description} />
        //         <span className="text-blue-500 hover:underline">
        //             {description}
        //         </span>
        //     </a>
        // </div>
    );
};

export default Link
