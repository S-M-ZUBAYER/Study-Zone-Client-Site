import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const InstructorCard = ({ img, name, rating, reviews, quality }) => {
    const skills = quality.split('$');
    return (
        <div>
            <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-full bg-cover" style={{ backgroundImage: `url(${img})` }}></div>

                <div className="w-48 p-4 md:p-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h1>

                    {skills.map(skill => <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{skill}</p>)}

                    <p className="flex mt-5 items-center text-fuchsia-800 font-bold">Rating:<span className="text-orange-500 flex mr-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span> {rating}</p>

                    <div className="flex justify-between mt-2 item-center">
                        <h1 className="text-base font-bold text-gray-700 dark:text-gray-200 md:text-xl">Reviews: {reviews}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;