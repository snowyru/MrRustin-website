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
            <motion.div className={styles.container}>

            </motion.div>
            <motion.div className={styles.container2}>

            </motion.div>
        </>
     );
}
 
export default prices;