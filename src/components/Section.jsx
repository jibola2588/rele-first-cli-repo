import React, { Component } from 'react';
import BasicCard from './Card';

export default class Section extends Component {
  render() {
    return (
      <div  className='d-flex flex-wrap justify-content-between'>
        <BasicCard 
        btn = 'tree'
        img = 'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?b=1&k=20&m=517188688&s=612x612&w=0&h=x8h70-SXuizg3dcqN4oVe9idppdt8FUVeBFemfaMU7w='
        />
        <BasicCard
        btn='paper'
        img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6FokyKZUwhEOeXze9KQPb9fyuQjgd0TQoH6xyxa0&s'
        />
        <BasicCard 
        btn='dust'
        img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8O103pFlZgC-CR8zFOaOW70d7YjI7QlRAe4AQjL7&s'
        />
        <BasicCard
        btn='sand'
        img = 'https://static.vecteezy.com/packs/media/vectors/term-bg-1-666de2d9.jpg'
         />
        <BasicCard 
        btn='soil'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQneXqM5Yj2q_X3QhpCFHhLi-vb2k3GHL5LVYX7psFs&s'
        />
        <BasicCard 
        btn='gas'
        img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1d4pPYRP9TLdERtZQLsqGTr4_lr0Mdk4Y_73Jl6AM&s'
        />
      </div>
    );
  }
}
