import React, { Component } from 'react';
import SvgIcons from '../../components/SvgIcons';
import { QUOTES } from '../../Dummy/Quotes';
import './index.scss';
export default class Quotes extends Component {
  handleClick = () => {
    let random = Math.floor(Math.random() * QUOTES.length);
    document.getElementById('quote').textContent = QUOTES[random].quote;
    document.querySelector('.author').textContent = QUOTES[random].author;
  };

  render() {
    return (
      <div class='conainer'>
        <div class='row max-height align-items-center'>
          <div class='col-11 mx-auto col-md-6 quote-container p-5'>
            <button
              onClick={this.handleClick}
              class='btn-outline-primary text-capitalize my-4 d-block mx-auto'
              id='generate-btn'
            >
              generate quote
            </button>

            <h3 class='text-muted'>
              <span class='quote-icon mr-3'>
                <SvgIcons type={'quote'} />
              </span>
              <span id='quote'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur sint iste optio placeat dolor labore, reprehenderit
                ipsum aspernatur blanditiis maiores.
              </span>
            </h3>
            <h5 class='text-right text-capitalize author'>
              -<span class='quote-author ml-3 '>author</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
