import React from 'react';

const CourseCard = ({ course }) => {
    const { id, img, name, author_name, author_img, last_update, description } = course;
    return (
        <article className="max-w-md mx-auto mt-4 bg-cyan-900 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={id}>

            <img src={img} loading="lazy" alt={name} className="w-full img-fluid h-48 rounded-t-md" />

            <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-start text-yellow-300">
                    {name}
                </h3>
                <p className="text-gray-400 text-sm mt-1 text-start">{description.length > 250 ? description.slice(0, 300) + '...' : description}</p>
            </div>
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                    <img src={author_img} className="w-full h-full rounded-full" alt={author_name} />
                </div>
                <div className="ml-3 text-start mb-3">
                    <span className="block text-gray-900">Tutor: {author_name}</span>
                    <span className="block text-gray-400 text-sm">Last Update: {last_update}</span>
                </div>
            </div>

        </article>
    );
};

export default CourseCard;