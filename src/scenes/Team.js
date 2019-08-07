import React, { Component} from 'react';
import Layout from '../components/Layout';
import CoreTeam from '../components/CoreTeam';
import Advisors from '../components/Advisors';
import Investors from '../components/Investors/Investors';

class Team extends Component {
  render(){
    return(
      <Layout>
        <CoreTeam />
        <Advisors />
        <Investors />
      </Layout>
    );
  }
}

export default Team;
