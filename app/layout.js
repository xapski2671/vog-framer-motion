import { Quicksand } from "next/font/google"
import "./globals.sass"
import Header from "./components/Header"

const quicksand = Quicksand({ subsets: ["latin"] })

export const metadata = {
	title: "Pizza joint",
	description: "pizza joint",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={quicksand.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
