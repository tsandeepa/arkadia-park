import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Itmes from "./items";
import Link from "next/link";
import { Container, ContainerFluid } from "../styles/styled/layout.styled";
import { ItemGrid } from "../styles/styled/itemGrid.styled";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import { BiHeartCircle } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { VscHeart } from "react-icons/vsc";
import HomeBanner from "../components/home/homeBanner";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Blurb from "../components/blurb";
import SectionWide from "../components/home/secWide";

//section images

// export const getStaticProps = async () =>{
//   // const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const res = await fetch('https://my-favourites-965fb-default-rtdb.firebaseio.com/items.json');
//   const data = await res.json()
//   console.log(data);
//   return{
//       props: {items: data}
//   }
// }
export default function Home() {
  const [items, setItems] = useState(null);
  const [isFavourite, setisFavourite] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://my-favourites-965fb-default-rtdb.firebaseio.com/items.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
  }, [isFavourite]);

  // console.log(items);
  const makeFavourite = async (id) => {
    setIsLoading(true);
    // console.log(id);
    const res = await fetch(
      "https://my-favourites-965fb-default-rtdb.firebaseio.com/items/" +
        id +
        ".json",
      {
        method: "PATCH",
        body: JSON.stringify({
          favourite: true,
        }),
      }
    ).then(() => {
      setisFavourite(!isFavourite);
    });
  };
  const notFavourite = async (id) => {
    setIsLoading(true);
    // console.log(id);
    const res = await fetch(
      "https://my-favourites-965fb-default-rtdb.firebaseio.com/items/" +
        id +
        ".json",
      {
        method: "PATCH",
        body: JSON.stringify({
          favourite: false,
        }),
      }
    ).then(() => {
      setisFavourite(!isFavourite);
    });
  };
  const gridLoad = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "easeIn",
        delay: i * 0.08,
      },
    }),
  };

  const secBgs = [
    {
      sec: "sec_1",
      background:
        "linear-gradient(90deg, rgba(22,18,74,1) 0%, rgba(32,23,82,1) 35%, rgba(84,60,136,1) 100%)",
    },
    {
      sec: "sec_2",
      background:
        "linear-gradient(45deg, rgba(45,36,36,1) 0%, rgba(135,98,77,1) 100%)",
    },
    {
      sec: "sec_3",
      background:
        " linear-gradient(45deg, rgba(8,13,63,1) 0%, rgba(15,16,71,1) 34%, rgba(29,8,63,1) 100%)",
    },
  ];

  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="l-anim">
            <span> Loading... </span>
          </div>
        </div>
      )}

      <HomeBanner />
      <ContainerFluid>
        <Row className="rm-px">
          <Col lg="6">
            <Blurb
              bl_top="New to Arkadia"
              bl_Title="The Explores"
              bl_img="Images/s1_1.png"
              bl_desc="Learn how to join the theme park and start your adventure"
            />
          </Col>
          <Col lg="6">
            <Blurb
              bl_top="New to Arkadia"
              bl_Title="Enter the portal"
              bl_img="Images/s1_2.png"
              bl_desc="Learn how to join the theme park and start your adventure"
            />
          </Col>
        </Row>
      </ContainerFluid>
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[0]}
        sec_img="Images/sec-1.png"
        sec_animate={{
          scale: [1, 1.01, 1.01, 1, 1],
          x: [-10, 10, 0, -10],
          // rotate: [0, 0, 20, -20, 0],
        }}
        sec_transition={{
          duration: 10,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[1]}
        sec_img="Images/sec-2.png"
        sec_animate={{
          scale: [1, 1.01, 1.02, 1, 1],
          // rotate: [0, 0, 20, -20, 0],
        }}
        sec_transition={{
          duration: 12,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[2]}
        sec_img="Images/sec-3.png"
        sec_animate={{
          scale: [1, 1.01, 1.02, 1, 1],
          // rotate: [0, 0, 20, -20, 0],
          x: [-5, 5, 0, -5],
        }}
        sec_transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[1]}
        sec_img="Images/sec-4.png"
        sec_animate={{
          scale: [1, 1.01, 1.02, 1, 1],
          // rotate: [0, 0, 20, -20, 0],
          x: [-5, 5, 0, -5],
        }}
        sec_transition={{
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
      <ContainerFluid>
        <Row className="rm-px">
          <Col lg="6">
            <Blurb
              bl_top="New to Arkadia"
              bl_Title="The Explores"
              bl_img="Images/cosater.png"
              bl_desc="Learn how to join the theme park and start your adventure"
            />
          </Col>
          <Col lg="6">
            <Blurb
              bl_top="New to Arkadia"
              bl_Title="Enter the portal"
              bl_img="Images/ark-park.png"
              bl_desc="Learn how to join the theme park and start your adventure"
            />
          </Col>
        </Row>
      </ContainerFluid>
      {/* <Container>
        <ItemGrid className='items'>
          {items &&
            items.map((item, i) => (
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={gridLoad}
                className='item' key={item.id}>
                <div className="character">
                  <motion.img
                    initial={{
                      borderRadius: '100%'
                    }}
                    whileHover={{
                      borderRadius: ["100%", "10%"],
                      scale: 0.9,
                      rotate: [0, 0, 5, -5, 0, 0],
                    }}
                    src={item.image} />
                  <h3>{item.name}</h3>
                  {
                    item.favourite ? <motion.button
                      whileTap={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className='btn-fav-not' onClick={() => notFavourite(item.id)}>
                      <BiHeart />


                    </motion.button> :
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className='btn-fav' onClick={() => makeFavourite(item.id)}>
                        <BiHeart />
                      </motion.button>
                  }
                </div>
              </motion.div>
            ))
          }
        </ItemGrid>
      </Container> */}
    </>
  );
}
