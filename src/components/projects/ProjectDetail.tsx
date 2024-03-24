import ButtonRr from '@/ELEMENTX/Ui/Buttons/ButtonRr';
import TechX from '@/ELEMENTX/Ui/Tech/TechX';
import ThemeContext from '@/feature/themeContext/ThemeContext'
import { useTheme } from 'next-themes';
import React, { useContext } from 'react'

const ProjectDetailPage = () => {

let {theme} = useTheme();
  return (
    <div className='pjd-main frame bar'>
        <div className="pjd-div1">
        <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } trans sec-f pjd-title-def`}>Melodious , Random Music Album Generating App</div>
            <div className={`${theme == 'dark' ? 'fontclD' : 'fontcl' } trans sec-f pjd-title`}>Melodious , Random Music Album Generating App</div>
            <div className={`${theme == 'dark' ? 'pjd-img-ctn1D' : 'pjd-img-ctn1'} trans  bg-sec`}>
                <img src="https://i.pinimg.com/736x/71/11/f9/7111f9908d41bb1a4bb97dc68d0387fe.jpg" alt="" className="pic pjd-img1" />
            </div>
        </div>
        <div className="pjd-div2 bar">
            <div className="pjd-tech-ctn">
                <div className="pjd-tech-title-ctn">
                    <div className="pjd-tech-title fontcl2 sec-f text-[13px]">Tech Stacks</div>
                    <div className="pjd-line bg-sec"></div>
                </div>
                <div className="pjd-techs">
                    <TechX logo='ReactJS' />
                    <TechX logo='TypeScript' />
                    <TechX logo='Laravel' />

                </div>
            </div>
        <div className='pjd-img-ctn2 trans bg-sec'>
                <img src="https://i.pinimg.com/564x/e5/17/6f/e5176f1a3272a1b18c2b5542ec9dba9f.jpg" alt="" className="pic pjd-img2" />
            </div>
        </div>
        <div className="pjd-div3 big-bar">
           
           <div className="pjd-desc-main">
           <div className="pjd-desc-ctn">
                <div className="pjd-desc-title fontcl2 text-[16px] sec-f">Project Description</div>
                <div className={`pjd-desc sec-f mega-trans text-[13px] ${theme == 'dark' ? 'fontcl3D' : 'fontcl3'}`}>
                    {
                        `
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                          `
                    }
                </div>
            </div>
            <div className="pjd-btn-ctn">
  <ButtonRr url='/' text={'Go live'} theme={theme} wh={'pj-live-btn'} type={'live'} />
  <ButtonRr url='/' text={'Repo'} theme={theme} wh={'pjd-repo-btn'} type={'repo'} />

</div>
           </div>
            <div className='pjd-img-ctn3 trans bg-sec'>
                <img src="https://i.pinimg.com/736x/57/8a/f1/578af1d1d37c0d4357a20d51e63b24db.jpg" alt="" className="pic pjd-img3" />
            </div>
        </div>

    </div>
  )
}

export default ProjectDetailPage