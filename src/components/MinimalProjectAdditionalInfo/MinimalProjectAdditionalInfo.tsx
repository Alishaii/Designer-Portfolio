import React from 'react';
import styled from 'styled-components';
import * as minimal from '../../constants/MinimalPage/minimal';
import Marginer from '../Marginer';

const Item = styled.div``;

const MinimalProjectAdditionalInfoContainer = styled.div`
  grid-column: 1 / span 3;

  display: grid;
  grid-template-columns: 210px auto;
  row-gap: 37px;
`;

const ItemTitle = styled.p`
  font-size: 20px;
  line-height: 110%;
`;

const InnerItems = styled.div``;

const InnerItem = styled.p`
  line-height: 100%;
`;

const MinimalProjectAdditionalInfo = () => {
  return (
    <MinimalProjectAdditionalInfoContainer>
      {minimal.projectAdditionalInfo.map((item, index) => (
        <Item key={index}>
          <ItemTitle>{item.title}</ItemTitle>
          <Marginer margin={10} />

          <InnerItems>
            {item.items.map((innerItem, innerIndex) => (
              <InnerItem key={innerIndex}>{innerItem}</InnerItem>
            ))}
          </InnerItems>
          <Marginer margin={10} />
        </Item>
      ))}
    </MinimalProjectAdditionalInfoContainer>
  );
};

export default MinimalProjectAdditionalInfo;
