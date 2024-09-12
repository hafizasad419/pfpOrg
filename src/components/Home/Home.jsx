import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MyButton } from '../../utils';
import banner1 from "../../assets/banners/banner1.jpg"

function Home() {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="">


        <div
        >
          <img
          src={banner1} alt="" />
        </div>


      </motion.div>


    </main>
  );
}

export default Home;
