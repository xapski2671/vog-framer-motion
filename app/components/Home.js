"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const Home = () => {
	return (
		<motion.div animate={{}} className="home container">
			<motion.h2 animate={{}}>Welcome to Pizza Joint</motion.h2>
			<Link href="/base">
				<motion.button animate={{}}>Create Your Pizza</motion.button>
				<motion.button animate={{}}>Checkout</motion.button>
			</Link>
		</motion.div>
	)
}

export default Home
