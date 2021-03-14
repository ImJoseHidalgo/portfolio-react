import React from 'react';
import { Card, Grid } from "./DetailCard.styles";

const DetailCard = ({card}) => {

  const createMarkup = () => {
    return {__html: `${card.techP}`};
  }

  return (
    <Card className="container">
      <h3>{card.title}</h3>
      <img loading="lazy" src={card.img} alt="giffapp"/>
      <h4>{card.descTitle}</h4>
      <p className='desc'>{card.desc}</p>
      <Grid>
        <ul>
          <li>{card.liTitle1}</li>
          <li>{card.liDesc1}</li>
        </ul>
        <ul>
          <li>{card.liTitle2}</li>
          <li>{card.liDesc2}</li>
        </ul>
        <ul>
          <li>{card.liTitle3}</li>
          <li>{card.liDesc3}</li>
        </ul>
      </Grid>
      <h4>{card.techT}</h4>
      <p dangerouslySetInnerHTML={createMarkup()} />
      <a target="_blank" rel='noreferrer' href={card.linkDemo}>{card.butDemo}</a>
      <a target="_blank" rel='noreferrer' href={card.linkRepo}>{card.butRepo}</a>
    </Card>
  )
}

export default DetailCard
