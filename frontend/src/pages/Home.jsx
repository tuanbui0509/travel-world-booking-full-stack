import '../styles/home.css'

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import worldImg from '../assets/images/world.png'
import heroVideo from '../assets/images/hero-video.mp4'
import { Col, Container, Row } from 'reactstrap'
import Subtile from 'shared/Subtile'
import SearchBar from 'shared/SearchBar'

const Home = () => {
  return (
    <>
      {/* hero start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtile subtile={'Know before you go'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>Traveling open the door creating {" "} <span className='highlight'>memory</span> </h1>
                <p>Follow Cam Mackintosh in the guise of The Wanderer, as he dives into the fascinating emirate of Abu Dhabi. Explore each step of his travel guide among deserts' hidden gems. Follow along on his epic journey.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <video src={heroVideo} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroImg02} alt='' />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* hero end */}
    </>
  )
}

export default Home