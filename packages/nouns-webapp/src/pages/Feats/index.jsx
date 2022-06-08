import Section from '../../layout/Section';
import { Col } from 'react-bootstrap';
import classes from './Feats.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Link from '../../components/Link';
// import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatsPage = () => {
  // const AnbeShivam = (
  //   <Links buttonIcon={<FontAwesomeIcon icon={faCircleInfo} />} url="https://anbe-shivam.vercel.app/" leavesPage={true} />
  // );
  // const Contractlist = (
  //   <Links buttonIcon={<FontAwesomeIcon icon={faCircleInfo} />} url="https://contractlist.vercel.app/" leavesPage={true} />
  // );
  // const GnuSwap = (
  //   <Links buttonIcon={<FontAwesomeIcon icon={faCircleInfo} />} url="https://gnuswap-chiliagons.vercel.app/" leavesPage={true} />
  // );
  // const Zoduid = (
  //   <Links buttonIcon={<FontAwesomeIcon icon={faCircleInfo} />} url="https://github.com/chiliagons/0-chiliagon-dao" leavesPage={true} />
  // );
  // const SkyfireDAO = (
  //   <Links buttonIcon={<FontAwesomeIcon icon={faCircleInfo} />} url="https://github.com/skyfire-dao/unicode" leavesPage={true} />
  // );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
           <h2>Hackathons</h2>
           <br />
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>GnuSwap
            </Accordion.Header>
            <Accordion.Body>
              Connext Network sponsor prize at ETHGlobal Scaling Ethereum Hackathon.<br />
              Last Modified on : 04-10-2021<br />
               <Link text="Click Here" url="https://gnuswap-chiliagons.vercel.app/" leavesPage={true} />
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>Zoduid</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>3rd Place Enzyme Finance sponsor prize</li>
                <li> Superfluid pool prize at ETHOnline 2021 Hackathon.</li>         
              </ul>
              Last Modified on : 11-10-2021<br />
               <Link text="Click Here" url="https://github.com/chiliagons/0-chiliagon-dao" leavesPage={true} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Skyfire DAO
            </Accordion.Header>
            <Accordion.Body>
              Finalist prize at ETHGlobal Unicode Hackathon.
              <br />
              Last Modified on : 10-11-2021<br />
              <Link text="Click Here" url="https://github.com/skyfire-dao/unicode" leavesPage={true} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              AnbeShivam
            </Accordion.Header>
            <Accordion.Body>
               <ul>
                <li>Received grant at Polygon Grants Hackathon.</li>
                <li>3rd Place India Track at Celo Make Crypto Mobile Hackathon.</li>
              </ul> 
              Last Modified on : 07-11-2021<br />
              <Link text="Click Here" url="https://anbe-shivam.vercel.app/" leavesPage={true} />
            </Accordion.Body>
          </Accordion.Item>
           <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Contractlist
            </Accordion.Header>
            <Accordion.Body>
               Polygon pool prize at ETHGlobal Road to Web3 Hackathon.
              <br />
              Last Modified on : 11-02-2022<br />
              <Link text="Click Here" url="https://contractlist.vercel.app/" leavesPage={true} />
            </Accordion.Body>
          </Accordion.Item>
           <div className={classes.headerWrapper}>
           <h2>Grants</h2>
           <br />
           </div>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              Connext
            </Accordion.Header>
            <Accordion.Body>
              Connext Network Grant ($5k)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default FeatsPage;




