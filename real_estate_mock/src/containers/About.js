import React, {useState, useEffect, Fragment} from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet-async';
import House from '../assets/images/house.jpg'

const About = () => {
  const [topSeller, setTopSeller] = useState([]);
  const [realtors, setRealtors] = useState([]);
  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json"
    }
    const getTopSeller = async () => {
      try{
        const res = await axios.get('http://localhost:8000/api/realtors/topseller')
        setTopSeller(res.data)
      }catch(err){
        console.log(err, "err About")
      }
    }
    getTopSeller()
  },[])

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json"
    }
    const getRealtors = async () => {
      try{
        const res = await axios.get('http://localhost:8000/api/realtors/')
        setRealtors(res.data)
      }catch(err){
        console.log(err, "err About")
      }
    }
    getRealtors()
  },[])
  const getAllRealtors = () => {
    let allRealtors = [];
    let res = [];
    realtors.map(realtor => {
      return allRealtors.push(
        <Fragment key={realtor.id}>
          <div className='about__display'>
            <img className='about__display__image' src={realtor.photo} alt='' />
            <h3 className='about__realtor'>{realtor.name}</h3>
            <p className='about__contact'>{realtor.phone}</p>
            <p className='about__contact'>{realtor.email}</p>
            <p className='about__about'>{realtor.description}</p>
          </div>
        </Fragment>
      )
    })
    for(let i=0; i<realtors.length; i+=3){
      res.push(
        <div key={i} className='row'>
          <div className='col-1-of-3'>
            {allRealtors[i]}
          </div>
          <div className='col-1-of-3'>
            {allRealtors[i+1] ? allRealtors[i+1] : null}
          </div>
          <div className='col-1-of-3'>
            {allRealtors[i+2] ? allRealtors[i+2] : null}
          </div>
        </div>
      )
    }
    return res;
  }
  const getTopSeller = () => {
    let res = []
    topSeller.map(seller => {
      return res.push(
        <Fragment key={seller.id}>
          <div className='about__display'>
            <img className='about__display__image' src={seller.photo} alt='' />
            <h3 className='about__topseller'>Top Seller:</h3>
            <p className='about__realtor'>{seller.name}</p>
            <p className='about__contact'>{seller.phone}</p>
            <p className='about__contact'>{seller.email}</p>
            <p className='about__about'>{seller.description}</p>
          </div>
        </Fragment>
      )
    });
    return res;
  }

  return (
    <main className='about'>
      <Helmet>
        <title>Sun Realty - About</title>
        <meta name='description' content='About Us'/>
      </Helmet>
      <header className='about__header'>
        <h1 className='about__heading'>About Sun Realty</h1>
      </header>
      <section className='about__info'>
        <div className='row'>
          <div className='col-3-of-4'>
            <h2 className='about__subheading'>We find the perfect home for you!</h2>
            <p className='about__paragraph'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
            <div className='about__display'>
              <img className='about__display__image' src={House} alt='' />
            </div>
            <p className='about__paragraph'>
              Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
              non proident, sunt in culpa qui officia deserunt 
              mollit anim id est laborum.
            </p>
          </div>
          <div className='col-1-of-4'>
            {getTopSeller()}
          </div>
        </div>
      </section>
      <section className='about__team'>
        <div className='row'>
          <h2 className='about__subheading'>Meet our awesome team</h2>
          {getAllRealtors()}
        </div>
      </section>
    </main>
  );
}

export default About;
