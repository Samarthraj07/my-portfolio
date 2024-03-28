import React, { useRef } from "react";
import Socials from "../Components/Socials";
import profile from "../imgs/profile.jpg";
import backgroundImage from "../imgs/profile-background.jpg";
import ProjectCard from "../Components/ProjectCard";
import { Scrollbar } from 'react-scrollbars-custom';
import { Link } from "react-router-dom";
//mport { useRef } from "react";

const Home = () => {

  const elementRef = useRef();
  //const backgroundImage = 'url("../imgs/profile-background.jpg")'
  const emailAddress = 'samarthrajsatbhai@gmail.com';
  return (
    //<Scrollbar elementRef={elementRef}>
    <div className="flex bg-app-background  text-gray-400 h-screen">
      <div className="left-side bg-left-side-col bg-opacity-60 w-1/5 m-2 p-5 rounded">
        <div className="Navbar mb-10">
          <Socials icon={"material-symbols:home"} name="Home"/>
          <Socials icon={"ph:pencil-line"} name="Skills"/>
          <Socials icon={"eos-icons:project"} name="Projects"/>
        </div>
        <div className="socials">
          <div className="text-xl font-semibold">Socials</div>
          <Socials
            icon={"lucide:linkedin"}
            name="Linkdin"
            link="https://www.linkedin.com/in/samarthraj-satbhai-9565a9222/"
          />
          <Socials icon={"bi:github"} name="Github"
          link="https://github.com/Samarthraj07" />
          <Socials icon={"material-symbols:mail"} name="Mail" link={`mailto:${emailAddress}`}/>
        </div>
      </div>
     
      <div className="right-side w-4/5 m-2 overflow-auto">
        <div
          className="title h-36 flex items-center bg-cover bg-center rounded px-5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="w-32 h-32 ">
            <img
              src={profile}
              alt=""
              className="rounded-full  border-4 border-white"
            />
          </div>
          <div className="text-white text-3xl font-semibold ml-5">
      
            Samarthraj Satbhai
          </div>
        </div>
        <div className="info">
          <div className="font-semibold text-xl flex mt-10" >About me</div>
          <p className="text-start">Computer Science Engineering graduate with a keen interest in web development and software technologies.</p>
        </div>
        <div className="skills mt-10">
          <div className="font-semibold text-xl flex">What I know</div>
          <ul className="flex flex-col items-start mt-5">
            <div className="bg-blue-800 text-gray-200 p-2 w-4/5 text-start cursor-pointer rounded hover:bg-blue-600">
              <span className="font-semibold">Frontend : </span>HTML, CSS,
              JavaScript, React Js
            </div>
            <div className="bg-blue-800 text-gray-200 p-2 my-4 w-4/5 text-start cursor-pointer rounded hover:bg-blue-600">
              <span className="font-semibold">Backend : </span>Node Js, Express JS, JWT
            </div>
            <div className="bg-blue-800 text-gray-200 p-2 w-4/5 text-start cursor-pointer rounded hover:bg-blue-600">
              <span className="font-semibold">Database : </span>MongoDB, MySql
            </div>
          </ul>
        </div>
        <div className="projects">
          <div className="text-xl font-semibold text-start mt-10 mb-5">Projects</div>
          <div className="project-cards w-full flex justify-between gap-4 px-4">
           <ProjectCard title="Threads Clone" description="Nextjs,Typescript,MongoDB,Tailwindcss" imageUrl="https://static01.nyt.com/images/2023/07/07/multimedia/07THREADS-LOGO-zmkv/07THREADS-LOGO-zmkv-articleLarge.jpg?quality=75&auto=webp&disable=upscale" link="#"/>
           <ProjectCard title="Threads Clone" description="Nextjs,Typescript,MongoDB,Tailwindcss" imageUrl={require("../imgs/Threads.jpeg")} link="#"/>
           <ProjectCard title="Spotify Clone" description="React, Nodejs, Express, MongoDB" imageUrl={require("../imgs/spotify (1).jpg")} link="#"/>
          </div>
        </div>
        <div className="bottom-part flex justify-center mt-10 mx-5 gap-10">
          <div className="left-part">
             <Link to="https://www.linkedin.com/in/samarthraj-satbhai-9565a9222/" target="_blank">
              <img className="rounded h-96" src={require("../imgs/linkdin.PNG")} alt=""/>
             </Link>
          </div>
          <div className="right-part rounded text-start p-4 bg-slate-800">
            <h2 className="text-lg font-bold mb-3">More Projects</h2>
            <ul className="flex flex-col">
              <Link className="py-1 my-1 hover:text-white">Social Media App</Link>
              <Link className="py-1 my-1 hover:text-white">Tetris Game</Link>
              <Link className="py-1 my-1 hover:text-white">Tetris Game</Link>
              <Link>User Authentication using JWT</Link>
            </ul>
          </div>
        </div>
      </div>
     
      
     
      
    </div>
   // </Scrollbar>
  );
};

export default Home;
