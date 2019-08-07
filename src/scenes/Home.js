import React, { Component} from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner/Banner';
import CoreTech from '../components/CoreTech/CoreTech';
import UseCases from '../components/UseCases';
import Press from '../components/Press';
import Roadmap from '../components/Roadmap';

class Home extends Component {
  render(){
    return(
      <Layout footerPadding={0}>
        <Banner />
        <CoreTech />
        <UseCases />
        <Roadmap/>
        <Press/>
      </Layout>
    );
  }
}

export default Home;
