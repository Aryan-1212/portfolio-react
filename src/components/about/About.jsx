import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="rounded-md shadow-2xl"
                            src="src/assets/my-image.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Aryan Parvani,
                        </h2>
                        <h3 className="text-xl text-gray-800">Dedicated Computer & AIML Student at L.D. College of Engineering</h3>
                        <p className="mt-6 text-gray-600">
                        I'm a passionate and motivated computer engineering student with a strong understanding of Python, JavaScript, and PHP, including frameworks like React and TailwindCSS. I’ve developed projects across these technologies, gaining valuable experience and honing my problem-solving skills. 
                        </p>
                        <p className="mt-6 text-gray-600">My journey in coding has been driven by a love for discovering new technologies and adapting to challenges. I'm eager to contribute my skills to innovative projects and collaborate with like-minded professionals. If you're seeking a committed and versatile team member, let's connect!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}