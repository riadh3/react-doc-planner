import React from 'react';
import ReactDOM from 'react-dom';

import "./Style.css"

import Header from './components/Header.js'
import MainTitles from './components/MainTitles'
import IntroduceSite from './components/IntroduceSite'
import DoctorsCard  from './components/DoctorsCard'
import ServiceCard  from './components/ServiceCard'
import GlobalList   from './components/GlobalList'
import GlobalCompany   from './components/GlobalCompany'
import FeatureCard   from './components/FeatureCard'
import FeaturePlatform   from './components/FeaturePlatform'
import ImproveLives   from './components/ImproveLives'
import Footer   from './components/Footer'
import ImagesGrid   from './components/ImagesGrid'




const serviceCardProps = {
    category: 'For patients',
    title: 'Find a doctor, book a visit and solve any health-related doubt',
    background: '#00ccb1',
    image: 'https://www.docplanner.com/img/screen-marketplace@2x.png'
  }

  const items = ['Znanylekarz', 'Miodottore', 'Ismertorvos', 
                    'Doctoralia', 'Doktortakvimi','Znamylekar'];


                    
// let images = [
//     'https://www.docplanner.com/images/warsaw.png',
//     'https://www.docplanner.com/images/barcelona.png',
//     'https://www.docplanner.com/images/istanbul.png',
//     'https://www.docplanner.com/images/rome.png',
//     'https://www.docplanner.com/images/mexico-city.png',
//     'https://www.docplanner.com/images/curitiba.png'
// ];
// let links=[
//     'https://www.docplanner.com/career?&loc=poland#jobs-offers',
//     'https://www.docplanner.com/career?&loc=spain#jobs-offers',
//     'https://www.docplanner.com/career?&loc=rome#jobs-offers',
//     'https://www.docplanner.com/career?&loc=italy#jobs-offers',
//     'https://www.docplanner.com/career?&loc=mexico#jobs-offers',
//     'https://www.docplanner.com/career?&loc=mexico#jobs-offers'
// ];


//     const linksItems = links.map((link) =>

//                 <a key={link.toString()} href={link}/>  
//     );
   
// function ImagesList(props) {
//     const images = props.images;
//     const ImagesItems = images.map((image) =>
//          <a href= {linksItems}>
//              <li key={image.toString()}>
//                 <img src={image}/> 
//                 <input type="button" value="SEE OPININGS" />Rome
//              </li> 
//           </a>
//     );
//     return (
//       <ul className="cities">{ImagesItems}</ul>
//     );
//   }


const Main = ()=>

 <div className="body">
     <Header />
     <div className="page">

         <MainTitles
               mainLogo="https://www.docplanner.com/img/sygnet.png"
               mainTitle='Making the healthcare experience more human'
          />

          <IntroduceSite
                introduceLeft="We want patients to find the perfect doctor and book an appointment in 
                the most easy way. The patient journey should be enjoyable, and that's why 
                we are always next to them: to help them find the best possible care. Anytime,
                 anywhere."
                introduceRight={<span>We also help doctors to better manage their practice and build their online
                reputation. With our integrated end-to-end solution, doctors are able not only
                to improve their online presence, but also to devote their time to what really 
                matters: their patients.</span>}
             />
           <div className="cards">
                    <ServiceCard service={serviceCardProps} />
                    <DoctorsCard
                        category="For doctors"
                        title="Save time managing visits and cut no-shows by half"
                        image="https://www.docplanner.com/img/screen-saas@2x.png"
                    />
            </div>
     
            <div className="global-list" >
                    <GlobalCompany 
                        title={<span  style={{color: '#00b39b'}}>We are a global  <br />company <br />with local culture</span>}
                    />  
                    <GlobalList 
                        items={items}  />
                </div>

            
     <div className="feautures-platform">

             <div className="left-features">
                <FeaturePlatform
                title={<span>The world's  <br />biggest healthcare platform</span>}
                description={<span>We work from 6 offices all over the world, bringing Docplanner<br /> Group to life in almost 20 countries.</span>}
                // icon="https://www.docplanner.com/img/sygnet.png"
                />
            </div>

            

            <div className="right-features" >

                <div className="features-position-down">
                    <FeatureCard
                        title={<span>Leader in <br />8 countries</span>}
                        icon="https://www.docplanner.com/img/flag.png"
                        description="Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile" />
                    <FeatureCard
                        title={<span>20 million unique <br /> patients</span>}
                        icon="https://www.docplanner.com/img/patients.png"
                        description="visit us every month" />
                    </div>

                    <div className="features-position-upper">
                    <FeatureCard
                        title={<span>600 000<br /> appointments</span>}
                        icon="https://www.docplanner.com/img/visits.png"
                        description="booked last month" />
                
                    <FeatureCard
                        title={<span>35 000 active <br /> doctors </span>}
                        icon="https://www.docplanner.com/img/doctors.png"
                        description="trust in our solutions" />
                    </div>
            </div>
        </div>

        <ImproveLives 
             title={<span>Improve the lives of millions.  <br /> Change yours forever </span>}
             description="More than 500 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops."
            />
        
        <div className="cities-grid">
            <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/warsaw.png'
                    cityName='Warsaw'
            />
            <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/barcelona.png'
                    cityName='Barcelona'
            />
             <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/istanbul.png'
                    cityName='Istanbul'
            />
             <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/rome.png'
                    cityName='Rome'
            />
             <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/mexico-city.png'
                    cityName='Mexico city'
            />
             <ImagesGrid 
                    imageLink= 'https://www.docplanner.com/images/curitiba.png'
                    cityName='Curitiba'
            />
        </div>



       < Footer 
           countries={<span>We are leaders in 8 countries:<a href="https://www.znanylekarz.pl/?_ga=2.8644149.1421527236.1531219389-1527311259.1531219389">Poland, </a> 
           <a href="https://www.doktortakvimi.com/?_ga=2.8644149.1421527236.1531219389-1527311259.1531219389"> Turkey, </a><a href="https://www.doctoralia.es/">Spain, </a>
           <a href="https://www.doctoralia.com.mx/"> Mexico, </a><a href="http://www.doctoralia.com.br/"> Brazil, </a><a href="http://www.doctoraliar.com/"> Argentina, </a>en <a href="http://www.doctoralia.cl/">  Chile </a></span>}
           copyright={<span>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.<br /> www.docplanner.com © 2018</span>}
        />
    
     </div>

 </div>

ReactDOM.render(<Main />, document.getElementById('root'));