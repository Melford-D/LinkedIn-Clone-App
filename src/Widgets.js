import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <section className="widgets__article">
          <article className="widgets__articleLeft">
              <FiberManualRecordIcon/>
          </article>
          <article className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
          </article>
        </section>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('PAPA REACT', 'Hitting it hard- 3045 readers')}
            {newsArticle('Coronavirus Nigeria updates', 'May God help us to the pandemic')}
            {newsArticle('BitCoin Breaks $22k', 'Cypto - 8000 readers')}
            {newsArticle('Are you coding everyday?', 'Fears of junior developers - 5.2k readers')}
        </div>
    )
}

export default Widgets
