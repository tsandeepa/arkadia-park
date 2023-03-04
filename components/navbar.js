import Link from "next/link";
import { Topbar } from "../styles/styled/navbar.styled";
import { BiAdjust } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar = ({ handleTheme }) => {
  return (
    <Topbar>
      <div className="h-logo">
        <motion.img
          animate={{
            // scale: [1, 1.1, 1.1, 1, 1],
            rotate: [0, 0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
          src="Images/logo.svg"
          alt=""
        />
      </div>

      <ul>
        <motion.li whileHover={{ scale: 1.05 }}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>
          <Link href="/communities">
            <a>Communities</a>
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>
          {/* <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleTheme()}><BiAdjust /></motion.button> */}
        </motion.li>
      </ul>
    </Topbar>
  );
};

export default Navbar;
