import React from "react";
import Icon1 from "../../images/1.jpg";
import Icon2 from "../../images/2.jpg";
import Icon3 from "../../images/3.jpg";
import Icon4 from "../../images/4.jpg";
import Icon5 from "../../images/5.jpg";
import Icon6 from "../../images/11.jpg";
import Icon7 from "../../images/22.jpg";
import Icon8 from "../../images/33.jpg";
import Icon9 from "../../images/44.jpg";
import Icon10 from "../../images/55.jpg";
import Icon11 from "../../images/111.jpg";
import Icon12 from "../../images/222.jpg";
import Icon13 from "../../images/333.jpg";
import Icon14 from "../../images/444.jpg";
import Icon15 from "../../images/555.jpg";
import Icon16 from "../../images/1111.jpg";
import Icon17 from "../../images/2222.jpg";
import Icon18 from "../../images/3333.jpg";
import Icon19 from "../../images/4444.jpg";
import Icon20 from "../../images/5555.jpg";
import {
  GalleryContainer,
  GalleryWrapper,
  GalleryCard,
  GalleryIcon,
  GalleryH2,
  GalleryP,
  // GalleryH1,
  // Icon,
} from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer>
      {/* <GalleryH1>LIVING ROOM</GalleryH1> */}
      <GalleryWrapper>
        <GalleryCard>
          <GalleryH2>Living Room</GalleryH2>
          <GalleryP>We help build your Dream Home</GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon1} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon2} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon3} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon4} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon5} alt="nekz concepts" />
        </GalleryCard>
      </GalleryWrapper>
      {/* <GalleryH1>KITCHEN</GalleryH1> */}
      <GalleryWrapper>
        <GalleryCard>
          <GalleryH2>Kitchen</GalleryH2>
          <GalleryP>We help build your Dream Home</GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon6} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon7} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon8} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon9} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon10} alt="nekz concepts" />
        </GalleryCard>
      </GalleryWrapper>
      {/* <GalleryH1>OFFICE SPACE</GalleryH1> */}
      <GalleryWrapper>
        <GalleryCard>
          <GalleryH2>Office Space</GalleryH2>
          <GalleryP>We help build your Dream Home</GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon11} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon12} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon13} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon14} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon15} alt="nekz concepts" />
        </GalleryCard>
      </GalleryWrapper>
      {/* <GalleryH1>BEDROOM</GalleryH1> */}
      <GalleryWrapper>
        <GalleryCard>
          <GalleryH2>Bedroom</GalleryH2>
          <GalleryP>We help build your Dream Home</GalleryP>
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon16} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon17} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon18} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon19} alt="nekz concepts" />
        </GalleryCard>
        <GalleryCard>
          <GalleryIcon src={Icon20} alt="nekz concepts" />
        </GalleryCard>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
