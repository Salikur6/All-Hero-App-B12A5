// components/Loader/OrbitLoader.jsx
import React from 'react';

const OrbitLoader = () => {
    return (
        <div className="flex items-center justify-center w-full py-16">
            <div className="flex flex-col items-center gap-4">
                <div className="orbit-loader">
                    <div className="orbit-loader__core" />
                    <div className="orbit-loader__ring" />

                    <div className="orbit-loader__dot-wrapper">
                        <div className="orbit-loader__dot" />
                    </div>

                    <div className="orbit-loader__dot-wrapper orbit-loader__dot-wrapper--slow">
                        <div className="orbit-loader__dot orbit-loader__dot--outer" />
                    </div>
                </div>

                <p className="text-sm text-slate-500">
                    Loading your apps…
                </p>
            </div>
        </div>
    );
};

export default OrbitLoader;
