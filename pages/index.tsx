import DefaultLayout from 'layouts/default';
import {
  HeroSection,
  WheelSection,
  SixFSection,
  StoryOfGenesisSection,
  DigDeeperSection,
  GetInvolvedSection,
  AboutUsSection,
} from 'components/sections/home';
import { Footer } from 'components/footer';
import ReactFullpage from '@fullpage/react-fullpage';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <ReactFullpage
        render={({}: any) => {
          return (
            <ReactFullpage.Wrapper>
              <div className='section'>
                <HeroSection />
              </div>
              <div className='section'>
                <WheelSection />
              </div>
              <div className='section'>
                <SixFSection />
              </div>
              <div className='section'>
                <StoryOfGenesisSection />
              </div>
              <div className='section'>
                <DigDeeperSection />
              </div>
              <div className='section'>
                <GetInvolvedSection />
              </div>
              <div className='section'>
                <AboutUsSection />
              </div>
              <div className='section'>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    </DefaultLayout>
  );
}
