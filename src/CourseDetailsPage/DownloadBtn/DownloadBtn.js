import React from 'react';
import { Link } from 'react-router-dom';

const DownloadBtn = () => {
    return (
        <div>
            <Link
                class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                to="/items/:course_id"
            >
                <span
                    class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent"
                >
                    Download
                </span>
            </Link>
        </div>
    );
};

export default DownloadBtn;