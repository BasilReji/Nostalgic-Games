import React, { Component } from 'react';
import Button from '../../components/Button';
import SvgIcons from '../../components/SvgIcons';
import { QUOTES } from '../../Dummy/Quotes';
import './index.scss';
export default class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = { quoteIndex: Math.floor(Math.random() * QUOTES.length) };
  }

  handleClick = () => {
    let random = Math.floor(Math.random() * QUOTES.length);
    this.setState({ quoteIndex: random });
  };

  render() {
    const { quoteIndex } = this.state;
    return (
      <div class='conainer'>
        <div class='row max-height align-items-center'>
          <div class='col-11 mx-auto col-md-6 quote-container p-5'>
            <div
              class='btn-outline-primary text-capitalize my-4 d-block mx-auto'
              id='generate-btn'
            >
              <Button onClick={this.handleClick}>Generate Quote</Button>
            </div>

            <h3 class='text-muted'>
              <span class='quote-icon mr-3'>
                <SvgIcons type={'quote'} />
              </span>
              <span id='quote'>{QUOTES[quoteIndex].quote}</span>
            </h3>
            <h5 class='text-right text-capitalize author'>
              <span class='quote-author ml-3 '>
                {QUOTES[quoteIndex].author}
              </span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
