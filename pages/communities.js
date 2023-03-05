import SectionWide from "../components/home/secWide";
import CommunityBanner from "../components/communities/communityBanner";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommExplorer from "../components/communities/communityExplorer";

const Communities = () => {
  const secBgs = [
    {
      sec: "sec_1",
      background:
        "linear-gradient(90deg, rgba(22,18,74,1) 0%, rgba(32,23,82,1) 35%, rgba(84,60,136,1) 100%)",
    },
    {
      sec: "sec_2",
      background: "#CA5454",
    },
    {
      sec: "sec_3",
      background: "#EEB87C",
    },
    {
      sec: "sec_4",
      background: "#423FE1",
    },

  ];
  return (
    <>
      <CommunityBanner />
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[0]}
        sec_img="Images/cs-1.png"
      // sec_animate={{
      //   scale: [1, 1.01, 1.01, 1, 1],
      //   x: [-10, 10, 0, -10],
      // }}
      // sec_transition={{
      //   duration: 10,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 2,
      // }}
      />

      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[1]}
        sec_img="Images/cs-2.png"
        sec_reverse={true}
      // sec_animate={{
      //   scale: [1, 1.01, 1.01, 1, 1],
      //   x: [-10, 10, 0, -10],
      // }}
      // sec_transition={{
      //   duration: 10,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 2,
      // }}
      />

      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[2]}
        sec_img="Images/cs-3.png"
      // sec_animate={{
      //   scale: [1, 1.01, 1.01, 1, 1],
      //   x: [-10, 10, 0, -10],
      // }}
      // sec_transition={{
      //   duration: 10,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 2,
      // }}
      />
      <SectionWide
        sec_title="Parklist & Golden Passes"
        sec_desc="Non-fungible tokens (NFTs) are unique digital assets that use blockchain technology to verify their ownership and authenticity. NFTs are changing the way we think about ownership and value in the digital world, and they are quickly becoming the new standard for digital art, collectibles, and more."
        Sec_btn_text="learn More"
        sec_bg={secBgs[3]}
        sec_img="Images/cs-4.png"
        sec_reverse={true}
      // sec_animate={{
      //   scale: [1, 1.01, 1.01, 1, 1],
      //   x: [-10, 10, 0, -10],
      // }}
      // sec_transition={{
      //   duration: 10,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 2,
      // }}
      />

      <CommExplorer />
    </>
  );
};

export default Communities;
