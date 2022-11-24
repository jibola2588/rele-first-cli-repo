import React, { Component } from 'react';
import Footer from '../components/Footer';
import  ExampleNav from '../components/Navbar';
import Section from '../components/Section';

export default class Home extends Component {
  render() {
    return (
      <div>
         < ExampleNav />
         <Section />
         <Footer />
      </div>
    );
  }
}
