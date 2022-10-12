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

const Phone = styled.p``;

const ArrowUp = styled.div`
  cursor: pointer;
  margin-right: 12px;
`;

const FooterDesktop = () => {
  return (
    <>
      <Cell id="footer"></Cell>
      <Cell>
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

        <Link href="#header">
          <ArrowUp>
            <Image src="/images/MainPage/arrow_up.svg" alt="" width={22} height={30} />
          </ArrowUp>
        </Link>
      </Cell>
    </>
  );
};

export default FooterDesktop;
