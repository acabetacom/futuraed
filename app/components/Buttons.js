import { useDragControls, motion } from 'framer-motion'

const Button = ({ bg, children }) => {
    const controls = useDragControls()
    return (
        <motion.div className={` text-black ${bg} gap-2 py-2 h-16 rounded-full flex justify-center items-center cursor-grabbing`}
            whileHover={{ scale: 1.01 }}
            whileTap={{sclae:0.9}}
            transition={{type:'spring', stiffness: 400, damping: 6}}
            drag
            dragListener={true}
            dragControls={controls}
            dragConstraints={{top:0, left:0, right:0, bottom:0}}
            style={{touchAction: 'none'}}
        >
                {children}
        </motion.div>
    )
}

export default Button