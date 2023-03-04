import SectionWide from "../components/home/secWide";
import CommunityBanner from "../components/communities/communityBanner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Communities = () => {
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
      <CommunityBanner />
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
    </>
  );
};

export default Communities;
