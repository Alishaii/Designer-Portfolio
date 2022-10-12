import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Link from '../Link';

const Cell = styled.div`
  min-height: 180px;

  font-weight: 300;
  font-size: 20px;
  line-height: 26px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkedinAndEmail = styled.p``;

const Phone = styled.p`
  margin-left: auto;
`;

const ArrowUp = styled.div`
  cursor: pointer;
  margin-left: auto;
  margin-right: 12px;
`;

const FooterLaptop = () => {
  return (
    <>
      <Cell id="footer">
        <LinkedinAndEmail>
          linkedin.com/alina.llbarannykova/ <br />
          alina.llbarannykova@gmail.com
        </LinkedinAndEmail>
      </Cell>
      <Cell>
        <Phone>
          +48 536 166 614 <br />
          Poland, Warsaw
        </Phone>
      </Cell>
      <Cell>
        <ArrowUp>
          <Link href="#header">
            <Image src="/images/MainPage/arrow_up.svg" alt="" width={22} height={30} />
          </Link>
        </ArrowUp>
      </Cell>
    </>
  );
};

export default FooterLaptop;
