import {motion} from 'framer-motion';
import styles from '../styles/Prices.module.css';
import {Box, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import Left from '../public/pics/pexels-flo-dahm-699459.jpg'


const prices = () => {
    return ( 
        <>
        {/* Big displays */}
        <Box sx={{display: {xs:'none', lg:'block'}}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Image className={styles.img} layout="fixed" src={Left} width={100} height={100}/>
                    <Typography className={styles.lg} variant='h1' >content1</Typography>
                </Grid>
                <motion.div initial={{rotate:20}} className={styles.divider}/> 
                <Grid item xs={12} md={6}>
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
        </>
     );
}
 
export default prices;