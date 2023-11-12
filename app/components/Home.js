"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const Home = () => {
	return (
		<motion.div className="home container">
			<motion.h2>Welcome to Pizza Joint</motion.h2>
			<Link href="/base">
				<motion.button animate={{}}>Create Your Pizza</motion.button>
			</Link>
		</motion.div>
	)
}

export default Home
