import React from "react"

import $ from 'jquery';

class Up extends React.Component {

  constructor() {
    super();

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $('.upbutton').css('display', 'block')
      } else {
        $('.upbutton').css('display', 'none')
      }
    });

    this.scrollup = () => {
      $('html, body').animate({scrollTop:0}, 400);
    }
  };

  render() {
  return (

    <div>
      <div onClick={this.scrollup.bind(this)} class="upbutton">
        <h2>^</h2>
      </div>
    </div>

  );
};
};

export default Up;
