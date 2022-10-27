import React from 'react';

const Items = ({ course }) => {
    const chooseAns = (e) => {

    }
    const { name, img, id } = course;
    const showDetails = () => {
        console.log(id)
    }
    return (
        <div>
            <div onClick={showDetails} className=" text-center container  my-4 mx-auto ">
                <div onClick={(e) => { chooseAns(e) }} className=" my-2 flex overflow-hidden rounded-lg bg-slate-700 dark:text-gray-100 hover:bg-sky-700 cursor-pointer">
                    <div className="flex items-center justify-center px-4 bg-violet-400 dark:text-gray-800">
                        <img className='h-10 w-10 rounded-3xl' src={img} alt="" />
                    </div>
                    <div className="flex items-center justify-between flex-1 p-3">
                        <h3 className="text-xl font-bold text-lime-300">{name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;