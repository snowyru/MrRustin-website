import {motion} from 'framer-motion';
import styles from '../styles/Prices.module.css';
import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import Left from '../public/pics/pexels-flo-dahm-699459.jpg';
import Right from '../public/pics/pexels-paul-seling-12266915.jpg';
import { style } from '@mui/system';

const prices = () => {
    return ( 
        <>
        {/* Big displays */}
        <Box sx={{display: {xs:'none', lg:'block'}}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <motion.div className={styles.imgLeft} >
                        <Image src={Left} layout="fill" />
                    </motion.div>
                    <motion.div style={{backgroundColor:"transparent", zIndex:"3"}} whileHover={{backgroundColor: 'rgba(0, 255, 0, 0.4)'}} className={styles.imgLeft}/>
                    <Typography className={styles.lg} variant='h1' >content1</Typography>
                </Grid>
                <motion.div initial={{rotate:-10}} className={styles.divider}/> 
                <Grid item xs={12} md={6}>                    
                    <motion.div className={styles.imgRight} >
                        <Image src={Right} layout="fill" />
                    </motion.div>
                    <motion.div style={{backgroundColor:"transparent", zIndex:"2"}} whileHover={{backgroundColor: 'rgba(255, 0, 0, 0.4)'}} className={styles.imgRight}/>
                    <Typography className={styles.lg} variant='h1' >content2</Typography>
                </Grid>
            </Grid>
        </Box>           
        {/* Smol displays */}
        <Box sx={{display: {xs:'block', lg:'none'}}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.centered} variant='h1' ><motion.p className={styles.smleft}>content1</motion.p></Typography>
                </Grid>
                <motion.div initial={{rotate:60}} className={styles.divider}/> 
                <Grid item xs={12} md={6}>
                    <Typography className={styles.centered} variant='h1' > <motion.p className={styles.smright}>content2</motion.p> </Typography>
                </Grid>
            </Grid>
        </Box>   
        {/* <Box>
        <div style={{hieght:'100vh'}} ></div>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <motion.div transition={{staggerChildren:0.5}} ></motion.div>
                    <Typography className={styles.centered} variant='h2'> <motion.p>N</motion.p><motion.p>E</motion.p><motion.p>X</motion.p><motion.p>T</motion.p><motion.p>.</motion.p><motion.p>J</motion.p><motion.p>S</motion.p> </Typography>                    
                </Grid>
            </Grid>
        </Box> */}
        </>
     );
}
 
export default prices;