import { style } from '@mui/system'
import { makeStyles } from '@mui/styles';
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography, Box } from '@mui/material';
import CheckInForm from '../components/home/CheckInForm';
import CardsSrc from '../components/CardsSrc';
import PopularSearches from '../components/home/PopularSearches';

const styled = makeStyles({
  hero:{
    marginBottom:"1vh",
    height:'45vh',alignItems:"center", 
  }, img:{
    // backgroundImage: `linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.7))`,
    width:"100vw", height:"55vh", 
  },
  checkIn:{
    maxWidth:"4/5",
    mx:"auto",
    border:"5px grey solid"
  },
  fit:{
    width:"100%", height:"100%"
  },
  cards:{
     width:"100%", 
  },
  popular:{
    marginTop:"4vh"
  }
})

const heading = {textAlign:"center", fontFamily:"Helvetica", fontSize:"1.25rem",zIndex:"4",fontWeight:"500",maxWidth:"80%", color:"black" , mx:"auto", letterSpacing:"1px", transform:'scale(1.3,1)'
}

export default function Home() {
  const classes = styled()
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {//hero img
      }

       <Box className={classes.img}>
       {/* <Image width={100} height={100} layout="fill" alt="nothing" src="/img/bg2.jpg" priority /> */}
       <img src="/img/bg3.png" className={classes.fit} alt="img" />
       </Box>

      {//checkIn form
      }

      <div className={classes.checkIn}>
        <CheckInForm/>
      </div>

      {//cards
      }

      <div className={classes.cards} data-aos="fade-up" data-aos-duration="3000" >
        <CardsSrc/>
      </div>

      {//Popular Searched
      }

      <div className={classes.popular} data-aos="fade-up" data-aos-duration="3000">
        <PopularSearches/>
      </div>

    </div>
  )
}