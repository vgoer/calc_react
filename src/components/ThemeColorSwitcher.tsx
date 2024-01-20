import { useEffect, useState } from "react"
import { COLORS } from "../constants"
import { motion } from 'framer-motion'

// 主题颜色切换
const ThemeColorSwitcher = () => {

    const [mounted, setMounted] = useState(false)
    const [color, setColor] = useState<string | undefined>(undefined)

    useEffect(() => {
        
        setMounted(true);
        setColor(document.documentElement.dataset.color || "indigo");
    },[])

    useEffect(() => {
        
        if(!mounted || color === undefined) return;

        document.documentElement.dataset.color = color;

        localStorage.color = color;
        
    },[color])


    const onToggle = (newColor:string) => () => {
        setColor(newColor)
    }

    if(!mounted) return null;


    return (
        <div className=" mb-20 flex items-center justify-center space-x-4">
            
            {COLORS.map(({id, name}) => (
                <motion.div 
                whileHover={{
                    rotate:90,
                    scale:1.2
                }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%",
                }}
                key={id} 
                onClick={onToggle(id)} 
                className={`theme-color ${name} ${color == id && 'active'} `}></motion.div>
            ))}
        </div>
    )

}



export default ThemeColorSwitcher