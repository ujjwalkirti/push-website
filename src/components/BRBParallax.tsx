/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import ParallaxBRB from '../assets/Grouped.svg';
import ParallaxBRBMobile from '../assets/GroupedMobile.svg';
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
    ScrollTrigger.matchMedia({
      '(min-width: 480px)': function() {
        timelineHeader.
          to('.firstBackground', {
            scale: 1.7,
          },
          'sameTime');
      },
      '(max-width: 479px)': function() { 
        return;
      },
      // 'all': function() { return; }
    });

    ScrollTrigger.create({
      snap: 0
    });

  }, []);

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
      <BRBWrapper id={!isMobile && 'home'}>
        <FirstBackground isMobile={isMobile} className="firstBackground">
          <Span
            size={isMobile ? '50px' : '40px'}
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
                  size={isMobile ? '80px' : '65px'}
                  family="Glancyr !important"
                  textAlign="center"
                  weight="600"
                  color="#fff"
                >
                  {item.figure}
                </Span>

                <Span
                  size={isMobile ? '18px' : '14px'}
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

    position: relative;
    scroll-snap-align: center;
    padding: 0px;

      @media ${device.mobileL} {
         margin-top: -10em;
         scroll-snap-align: none;
         margin-bottom: 2em;
         overflow: hidden;
         padding-bottom: 18em;
   }
`;


const BRBWrapper = styled.div`
    width: 100%;
    height: 100vh;
    @media ${device.mobileL} {
      min-height: 100vh;
    }
`;

const FirstBackground = styled.div`
  width: 80%;
  height: 100%;
  margin: 0px auto;

  // background-image: ${(props) => props.isMobile ? `url(${ParallaxBRBMobile})` : `url(${ParallaxBRB})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {    
    width: 100%;
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
        margin-top: 30px;
        // gap: 50px;
        top: 45%;
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
