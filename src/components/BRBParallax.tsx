/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import ParallaxBRB from '../assets/Grouped.svg';
import ImageHolder from './ImageHolder';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GLOBALS, { device } from 'config/globals';
import useMediaQuery from 'hooks/useMediaQuery';
import { Span } from 'components/SharedStyling';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);



function BRBParallax() {
  const isMobile = useMediaQuery(device.mobileL);

  ScrollTrigger.defaults({
    // Defaults are used by all ScrollTriggers
    // toggleActions: 'restart pause resume pause', // Scoll effect Forward, Leave, Back, Back Leave
    markers: false, // Easaly remove markers for production.
        
  });
      
  const timelineHeader = gsap.timeline({
    defaults: {ease: 'none'},
    scrollTrigger: {
      id: 'ZOOM', // Custom label to the marker
      trigger: '#home', // What element triggers the scroll
      scrub: 0.95, // Add a small delay of scrolling and animation. `true` is direct
      start: 'top top', // Start at top of Trigger and at the top of the viewport
      end: '+=100', // The element is 500px hight and end 50px from the top of the viewport
      //   end: '+=500% 0px', // The element is 500px hight and end 50px from the top of the viewport
      pin: true // Pin the element true or false
    } });
      
  useEffect(() => {
    timelineHeader.
      to('.firstBackground', {
        scale: isMobile ? 1.8 : 1.7,
      },
      'sameTime');


    ScrollTrigger.create({
      snap: 0,
      // onUpdate: (self) => {
      //   const progress = self.progress.toFixed(2);
      //   gsap.set('#home', { y: progress * 200 });
      // }
    });
  }, [isMobile]);

  // useEffect(()=>{
  //   gsap.set('.firstBackground', {yPercent: 0});
  //   gsap.to('.firstBackground', {scale: 1.7, scrollTrigger: {
  //     trigger: '#home',
  //     pin: '#home',
  //     scrub: true
  //   }});
  // },[]);

  const Stats = [
    {
      figure:'18',
      body: 'CITIES'
    },
    {
      figure:'1',
      body: 'BIG PROBLEM'
    },
    {
      figure:'$50k+',
      body: 'AVAILABLE IN PRIZES'
    }
  ];
      
  return (
    <Container>
      <BRBWrapper id="home">
        <FirstBackground className="firstBackground">
          <Span
            size={isMobile ? '25px' : '40px'}
            family="Glancyr !important"
            color="#E64DE9"
            // margin={isMobile ? '15.5em 0 0 0' : '202px 0 0 0'}
            margin={isMobile ? '25% 0 0 0' : '5% 0 0 0'}
          >
            #BRBIndia
          </Span>

          <ParallaxFlex>
            {Stats.map((item, i) => (
              <FlexItem key={i}>
                <Span
                  size={isMobile ? '45px' : '65px'}
                  family="Glancyr !important"
                  textAlign="center"
                  weight="600"
                  color="#fff"
                >
                  {item.figure}
                </Span>

                <Span
                  size={isMobile ? '10px' : '14px'}
                  family="Glancyr !important"
                  color="#fff"
                  textAlign="center"
                  spacing="0.03em"
                >
                  {item.body}
                </Span>
              </FlexItem>
            ))}
          </ParallaxFlex>
        </FirstBackground>

        {/* <div style={{color:'#fff'}}>clea n clean clean</div> */}
      </BRBWrapper>
    </Container>
  );
}

const MemberImage = styled(ImageHolder)`
`;

const Container = styled.div`
    width: 100%;
    color: white;
    margin-top: -15em;
    margin-bottom: 200px;
    // height: 100%;

    position: relative;
    scroll-snap-align: center;
    padding: 0px;
    // background: red;

      @media ${device.mobileL} {
         margin-top: -400px;
        //  margin-top: -30em;
         margin-bottom: 2em;
         overflow: hidden;
         padding-bottom: 12em;
   }
`;


const BRBWrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const FirstBackground = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;

  background-image: url(${ParallaxBRB});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {    
    width: 90%;
    //   align-items: flex-end;
//   justify-content: flex-end;
}
`;

const ParallaxFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: auto;
    gap: 8px;
    margin-top: 51px;
    position:absolute;
    top: 54%;

    @media(min-width:1550px){
      top: 58%;
      gap: 60px;
    }

    @media ${device.mobileL} {
        flex-direction: column;
        margin-top: 21px;
        top: 55%;
    }
`;

const FlexItem = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   min-width: 89px;
   max-width: 204px;
   @media ${device.mobileL} {
    margin: 10px 0;
}
   
`;




export default BRBParallax;
