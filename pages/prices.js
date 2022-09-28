import {motion, transform} from 'framer-motion';
import styles from '../styles/Prices.module.css';
import {Box, duration, Grid, Typography} from '@mui/material';
import Image from 'next/image';
import Left from '../public/pics/pexels-flo-dahm-699459.jpg';
import Right from '../public/pics/pexels-paul-seling-12266915.jpg';
import { style } from '@mui/system';

const prices = () => {

    const transition = { duration: 1.2, ease:[0.6, 0.01, -0.05, 1]};
    const smSplit = {
        rhidden:{
            y:"100%",
            x:"-12%",
            opacity: 0,
        },
        lhidden:{
            y:"-100%",
            x:"12%",
            opacity: 0,
        },
        unhidden:{
            y:0,
            x:0,
            opacity:1,
            transition:transition,   
            skewX:"-10deg"
        }
    };

    return ( 
        <>
            <Box sx={{display:{sm:'block', xs:'none'}}} className={styles.container} >
                <motion.div variants={smSplit} exit='rhidden' initial='rhidden' animate='unhidden' className={styles.container1}>
                    <Image placeholder='blur' src="/../public/pics/pexels-kevin-ku-577585.jpg" layout="fill" priority 
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                        <motion.div drag className={styles.card} >
    
                        </motion.div>
                </motion.div>
                
                    <motion.div variants={smSplit} exit='lhidden' initial='lhidden' animate='unhidden' className={styles.container2}>
                        <Image placeholder='blur' src="/../public/pics/pexels-field-engineer-442151.jpg" layout="fill" priority 
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                    </motion.div>
            </Box>

            <Box sx={{display:{sm:'none', xs:'block'}}} className={styles.container} >
                <motion.div className={styles.xscontainer1}>
                    <Image placeholder='blur' src="/../public/pics/pexels-kevin-ku-577585.jpg" layout="fill" priority 
                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />

                </motion.div>

                    <motion.div className={styles.xscontainer2}>
                        <Image placeholder='blur' src="/../public/pics/pexels-field-engineer-442151.jpg" layout="fill" priority 
                        blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==" />
                    </motion.div>
            </Box>
        </>
     );
}
 
export default prices;