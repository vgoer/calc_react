import { motion } from 'framer-motion'

const Motion = () => {

    const states = {
        show:{
            opactiy:1,
        },
        hidden: {
            opactiy:0,
        }
    }


    return (
        <motion.div
            className='text-brand'
        >

        hello

        </motion.div>
    )
}


export default Motion