import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { name, img, author_name, price, requirements } = course;
    const eachRequirements = requirements.split('$');
    return (
        <div className="pt-20 bg-gradient-to-t from-black via-slate-800 to-gray-900 h-96">
            <article class="flex  bg-white transition hover:shadow-xl lg:mx-20 sm:mx-10">
                <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                    <time
                        datetime="2022-10-27"
                        class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                    >
                        <span>2022</span>
                        <span class="w-px flex-1 bg-gray-900/10"></span>
                        <span>Oct 27</span>
                    </time>
                </div>

                <div class="hidden sm:block sm:basis-56">
                    <img
                        alt="Guitar"
                        src={img}
                        class="aspect-square h-full w-full object-cover"
                    />
                </div>

                <div class="flex flex-1 flex-col justify-between">
                    <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                        <Link to={''}>
                            <h3 class="font-bold uppercase text-gray-900">
                                Course Name: <span className="text-lime-900">{name}</span>  <span className="ml-10">Price: {price}</span>$
                            </h3>
                        </Link>


                        {eachRequirements.map(requirement => <p class="mt-2 text-base font-semibold leading-relaxed text-gray-700 line-clamp-3">{requirement}</p>)}

                    </div>

                    <div class="sm:flex sm:items-end sm:justify-end">
                        <Link
                            to=''
                            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                        >
                            Buy Now
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default CheckOut;