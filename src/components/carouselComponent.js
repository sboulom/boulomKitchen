import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
{
    src: '/asset/img/ubericekrispy.png',
    altText: 'Ube Rice Krispy 3',
    header: 'Ube Rice Krispy Treats',
    key: '1'
},
  {
    src: '/asset/img/cheesecake.png',
    altText: 'Cheesecake',
    // caption: 'Slide 2',
    header: 'Cheesecake Flight',
    key: '2'
  },
  {
    src: '/asset/img/macaronPrep.png',
    altText: 'Macaron Prep',
    // caption: 'Slide 3',
    header: 'Macarons',
    key: '3'
  },
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;