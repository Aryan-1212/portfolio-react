import React from 'react'
import ProjectCard from '../project-card/ProjectCard'

function Project() {
  return (
    <div className="mx-auto w-full max-w-7xl my-20">
      <div className='px-40 space-y-20'>
        <ProjectCard src="src\assets\scantodine-ss.png" title="ScanToDine" tech="HTML, CSS, JavaScript, Php" desc="ScanToDine is a digital food ordering platform using QR code technology to connect restaurants with customers. It allows for effortless digital menu management, real-time order updates, and seamless online billing. The system enhances kitchen operations, ensures smooth dining experiences, and offers robust customer feedback and analytics." />


        <ProjectCard src="src\assets\jarvis.jpg" title="Jarvis AI" tech="Python" desc="A voice-activated assistant capable of performing various tasks based on voice commands. This project leverages multiple APIs and libraries, including openai-api, weather-api, news-api, and the Speech Recognition library." />


        <ProjectCard src="src\assets\microsoft.png" title="Mircosoft Responsive Clone" tech="HTML, CSS(Tailwindcss)" desc="A responsive clone of Microsoft's website using TailwindCSS to enhance my understanding of responsive design and modern CSS frameworks. This project showcases my ability to replicate complex layouts and create adaptive user interfaces." />


        <ProjectCard src="src\assets\videoGen.jpg" title="Auto Video Generator" tech="Python" desc="An automated video compilation tool that fetches video clips based on specified topics, combines them, and overlays a multi-language voiceover generated from a script. It streamlines the process of creating high-quality video content with customizable parameters, making it an efficient and cost-effective solution for content creators." />


        <ProjectCard src="src\assets\youtube.png" title="Youtube Responsive Clone" tech="HTML, CSS" desc="A YouTube clone developed using HTML and CSS, demonstrating skills in front-end development and the ability to recreate complex interfaces with a focus on clean, responsive design." />


        <ProjectCard src="src\assets\flipkart.png" title="Flipkart Responsive Clone" tech="HTML, CSS" desc="A Flipkart clone built using HTML and CSS, highlighting expertise in front-end development and the ability to replicate intricate e-commerce layouts with responsive design principles." />
      </div>
    </div>
  )
}

export default Project