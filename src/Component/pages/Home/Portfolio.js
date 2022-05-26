import React from 'react';
import Footer from '../../Shered/Footer';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <img src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg" alt="" className="sidebarImg" />

                    <p className=' text-2xl text-primary font-bold'>Email : amenakter27@gmail.com <br /> Name : Mst. Amena Akter <br /> Education: Diploma(running) <br />BackGrond:CSC</p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle ">Technology Skill</span>
                    <ul className="sidebarlist lg:ml-52 ">
                        <li className="siderCatList">HTML(Beginner to Advance)</li>
                        <li className="siderCatList">css/framework(Beginner to Advance)</li>
                        <li className="siderCatList">Javasript(Beginner to Advance)</li>
                        <li className="siderCatList">ReactJs/framework</li>
                        <li className="siderCatList">Authentication And Authorizetoin(firebase)</li>
                        <li className="siderCatList">Backend(MongoDB)</li>
                    </ul>
                </div>

            </div>
            <span className='mt-16 text-center text-2xl text-primary font-bold'>My live Web Project</span>
            <div className='divider'></div>
            <div className='p-8'>
                <ul className="mb-16 text-center ">
                    <a href="https://warehouse-management-3d44d.web.app/" className='mb-8   font-bold'>  Warehouse Management :<span className='text-secondary'> :https://warehouse-management-3d44d.web.app/</span> </a> <br />
                    <a href="https://independence-service-provider.web.app/" className='mb-8   font-bold'>  Warehouse Management :<span className='text-secondary'> :https://independence-service-provider.web.app/</span> </a><br />
                    <a href="https://suspicious-bose-1bc155.netlify.app/" className='mb-8   font-bold'>  Simple Bootstrap :<span className='text-secondary'> website:https://suspicious-bose-1bc155.netlify.app/</span> </a><br />
                    <a href="https://willowy-flan-7811ae.netlify.app/" className='mb-8   font-bold'>  Simple website :<span className='text-secondary'>:https://willowy-flan-7811ae.netlify.app/</span> </a> <br />
                    <a href="https://kind-kalam-5ed477.netlify.app/" className='mb-8   font-bold'>  Hotel Management :<span className='text-secondary'>:https://kind-kalam-5ed477.netlify.app/</span> </a><br />
                </ul>

            </div>

            <div className="sidebarItem mb-8">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarIcon">
                    <i className="sidebarIcons fab fa-facebook-f"></i>
                    <i className="sidebarIcons fab fa-instagram-square"></i>
                    <i className="sidebarIcons fab fa-twitter-square"></i>
                    <i className="sidebarIcons fab fa-pinterest"></i>
                </div>
            </div>
            <Footer></Footer>
        </>
    );

};

export default Portfolio;