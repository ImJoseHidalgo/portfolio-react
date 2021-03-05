import styled from "styled-components";

export const MainContainer = styled.div`
  &.active .header {
    top: 0;
  }
  .header {
    position: fixed;
    z-index: 4;
    top: 3rem;
    left: 0;
    right: 0;
    height: 5rem;
    display: flex;
    align-items: center;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .header.active,
  .header.active::before {
    height: 10rem;
  }
  .header::before {
    content: "";
    background: var(--borders);
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    height: 0;
    transition: height 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .header-container {
    width: 100%;
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .header-container.active {
    width: 100%;
    margin: 0 10rem;
  }
  .header-container .logo {
    font-size: 1.6rem;
  }
  .header-container .logo a {
    display: flex;
    font-weight: bold;
  }
  .header-container .logo a span {
    font-weight: bold;
    transform: scaleX(0);
    transform-origin: left;
    width: 0;
    transition: 0.5s 0.5s;
    margin-right: 0.1rem;
  }
  &.active .header-container .logo a span:first-child {
    margin-right: 0.7rem;
  }
  &.active .header-container .logo a span {
    transform: scaleX(1);
    transform-origin: right;
    width: 100%;
  }
  .header-container .languages {
    display: flex;
    align-items: center;
  }
  .header-container .languages button {
    margin-left: 0.7rem;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    transition: 0.5s;
    color: var(--textColorGray);
    background: transparent;
    outline: none;
    border: none;
  }

  .bottom {
    position: fixed;
    z-index: 4;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--borders);
    height: 0;
    display: flex;
    align-items: center;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .bottom.active {
    height: 10rem;
  }
  .menu-footer {
    width: 100%;
    margin: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transform: scaleY(0);
    transition: 0.3s;
  }
  .menu-footer.active {
    transform: scaleY(1);
  }
  .menu-footer.active.active-menu {
    transform: scaleY(0);
  }
  .menu-footer p {
    font-weight: 600;
    font-size: 1.4rem;
  }
  .menu-footer ul {
    display: flex;
    list-style: none;
  }
  .menu-footer ul li {
    margin-left: 1rem;
  }
  .menu-footer a {
    font-weight: 600;
    font-size: 1.6rem;
    position: relative;
  }
  .menu-footer a:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    height: 0.6rem;
    width: 100%;
    background: #cecece;
    transition: 0.3s;
    transform: scaleX(0);
    transform-origin: left;
  }
  .menu-footer a:hover:before {
    transform: scaleX(1);
  }
  
  /* RIGHT
      =============================== */
  .right {
    position: fixed;
    z-index: 4;
    right: 0;
    top: 0;
    bottom: 0;
    background: var(--borders);
    width: 0;
    display: flex;
    align-items: center;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .right.active {
    width: 10rem;
  }
  .right .social-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .right .social-container .icon {
    width: 0;
    margin: 0.5rem 0;
    transition: 0.5s;
  }
  .right.active .social-container .icon {
    width: 1.6rem;
  }
  &.active .right .social-container .icon {
    width: 1.6rem;
  }
  
  /* LEFT
      =============================== */
  .left {
    position: fixed;
    z-index: 4;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--borders);
    width: 0;
    display: flex;
    align-items: center;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
  }
  .left.active {
    width: 10rem;
  }
  
  &.active .left,
  &.active .right {
    width: 5rem;
  }
  &.active .header::before,
  &.active .bottom {
    height: 5rem;
  }
  
  &.active .left.active,
  &.active .right.active {
    width: 10rem;
  }
  &.active .header.active::before,
  &.active .bottom.active {
    height: 10rem;
  }
  @media only screen and (max-width: 600px) {
    .header {
      height: 0px;
    }
    .header.active,
    .header.active::before {
      height: 20px;
    }
    .header-container .logo {
      position: absolute;
      left: 40px;
      top: 30px;
      opacity: 0;
      transition: 0.8s cubic-bezier(1, 0, 0, 1);
    }
    &.active .header-container .logo.active {
      opacity: 0;
    }
    .header-container .logo.active {
      opacity: 0;
      transition: 0.4s cubic-bezier(1, 0, 0, 1);
    }
    .header-container .languages {
      position: absolute;
      z-index: 20;
      left: -40px;
      top: 40px;
      opacity: 0;
      transition: 0.3s 0s;
    }
    .header-container .languages.active {
      left: 40px;
      opacity: 1;
      transition: 0.5s 0.2s;
    }
  
    /* BOTTOM
      =============================== */
    .bottom {
      height: 0px;
    }
    .bottom.active {
      height: 20px;
    }
    .right {
      width: 0px;
    }
    .right.active {
      width: 20px;
    }
    .right .social-container {
      display: none;
    }
    .left {
      width: 0;
    }
    .left.active {
      width: 0;
    }
    &.active .left,
    &.active .right {
      width: 0;
    }
    &.active .header::before,
    &.active .bottom {
      height: 0;
    }
    &.active .header.active::before,
    &.active .bottom.active {
      height: 20px;
    }
  }
`

export const MenuButton = styled.div`
  user-select: none;
  position: fixed;
  top: calc(50% - 3rem);
  left: 2.2%;
  z-index: 10;
  width: 3rem;
  height: 3rem;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    position: absolute;
    font-size: 1rem;
    font-weight: 600;
    left: 2.5rem;
    padding: 1.2rem 0;
    margin-left: -0.7rem;
    transition: 0.2s all;
    transform: rotate(-90deg);
    letter-spacing: 3px;
    opacity: 1;
  }
  &:hover p {
    font-weight: bold;
  }

  &.active {
    width: 2.5rem;
    height: 2.5rem;
  }
  &.active p {
    opacity: 0;
  }
  .button {
    width: 80%;
    height: 0.2rem;
    background: var(--textColorDark);
    position: absolute;
    top: 1.4rem;
    left: 0;
    border-radius: 5rem;
    transition: 0.2s;
  }
  .button:before,
  .button:after {
    content: "";
    width: 60%;
    height: 0.2rem;
    background: var(--textColorDark);
    position: absolute;
    top: -0.5rem;
    right: 0;
    transition: 0.2s;
    border-radius: 5rem;
  }
  .button:after {
    width: 40%;
    top: 0.5rem;
  }

  &:hover .button:before,
  &:hover .button:after {
    width: 80%;
  }
  &.active .button {
    background: none;
  }
  &.active .button:after {
    left: 0;
    top: 0;
    transform: rotate(44deg);
    height: 0.2rem;
    width: 100%;
  }
  &.active .button:before {
    left: 0;
    top: 0;
    transform: rotate(-44deg);
    width: 100%;
  }
  &.light-active .button,
  &.light-active .button::before,
  &.light-active .button::after {
    background: var(--textColorLight);
  }
  &.light-active p {
    color: var(--textColorLight);
  }
  &.active.light-active .button {
    background: transparent;
  }
  &.active.light-active .button::before,
  &.active.light-active .button::after {
    background: var(--textColorDark);
  }
  &.active.light-active p {
    color: var(--textColorDark);
  }

  @media only screen and (max-width: 600px) {
      left: 83.5%;
      top: 4.3%;
      width: 3rem;
      height: 3rem;
    &.active {
      width: 3rem;
      height: 3rem;
    }
    &:after {
      content: "";
      position: absolute;
      z-index: -5;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: var(--lightBackground);
      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
    }
    p {
      display: none;
    }
    .button {
      height: 0.1rem;
      top: 0.9rem;
      left: 10%;
    }
    .button:before,
    .button:after {
      height: 0.14rem;
      top: -0.39rem;
      width: 100%;
    }
    .button:after {
      top: 0.35rem;
      height: 0.15rem;
    }
    &.active .button:after {
      height: 0.15rem;
    }
    &:hover .button:before,
    &:hover .button:after {
      width: 100%;
    }
    &.active .button {
      left: 10%;
      top: 45%;
    }
  }
`

export const MenuStyles = styled.div`
  position: fixed;
  z-index: 3;
  left: -100%;
  top: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s cubic-bezier(1, 0, 0, 1);

  &.active {
    left: 0;
  }
`
export const MenuBackGround = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  background: var(--darkBackground);
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.2s 0s ease-in-out;

  &.active {
    opacity: 1;
    transition: 0.5s 0.1s cubic-bezier(1, 0, 0, 1);
  }
`
export const MenuContainer = styled.div`
  position: absolute;
  z-index: 30;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--borders);
  height: 100%;
  transition: 0.5s cubic-bezier(1, 0, 0, 1);

  &.active {
    right: 20%;
  }

  .menu-items li a {
    position: relative;
    font-size: 6rem;
    font-weight: 900;
    line-height: 6rem;
    color: transparent;
    color: var(--textColorDark);
    transition: .1s;
    -webkit-text-stroke-width: 0.1rem;
  }
  .menu-items li a:before {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0.3rem;
    height: 2rem;
    width: 100%;
    background: #dddddd;
    transition: 0.3s;
    transform: scaleX(0);
    transform-origin: left;
  }
  .menu-items li a:hover:before {
    transform: scaleX(1);
  }
  .menu-items li a:hover {
    -webkit-text-stroke-width: 0.1rem;
    -webkit-text-stroke-color: var(--textColorDark);
    color: var(--textColorLight);
  }
  .menu-items li a.link__active,
  .menu-items li a.link__active:before {
    transform: scaleX(1);
    -webkit-text-stroke-width: 0.1rem;
    -webkit-text-stroke-color: var(--textColorDark);
    color: var(--textColorLight);
  }
  .menu-items li {
    margin: 1rem 0;
    position: relative;
    left: 0;
    transition: 0.5s cubic-bezier(1, 0, 0, 1);
    opacity: 0;
    transform: scaleY(0);
  }
  &.active .menu-items li {
    left: 0;
    opacity: 1;
    transform: scaleY(1);
  }
  &.active .menu-items li:nth-child(1) {
    transition-delay: 0.4s;
  }
  &.active .menu-items li:nth-child(2) {
    transition-delay: 0.5s;
  }
  &.active .menu-items li:nth-child(3) {
    transition-delay: 0.6s;
  }
  &.active .menu-items li:nth-child(4) {
    transition-delay: 0.7s;
  }
  &.active .menu-items li:nth-child(5) {
    transition-delay: 0.8s;
  }
  /* &.active .menu-items.portfolio-focus li:nth-child(2) a,
  &.active .menu-items.portfolio-focus li:nth-child(2) a:before {
    -webkit-text-stroke-width: 0.1rem;
    -webkit-text-stroke-color: var(--textColorDark);
    color: var(--textColorLight);
    transform: scaleX(1);
  }
  &.active .menu-items.contact-focus li:nth-child(4) a,
  &.active .menu-items.contact-focus li:nth-child(4) a:before {
    -webkit-text-stroke-width: 0.1rem;
    -webkit-text-stroke-color: var(--textColorDark);
    color: var(--textColorLight);
    transform: scaleX(1);
  } */
  .contact {
    width: 60rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .menu-items {
    margin-top: 13rem;
  }
  .contact .contact-desc {
    opacity: 0;
    transition: 0.5s;
    width: 30rem;
  }
  &.active .contact .contact-desc {
    opacity: 1;
  }
  .contact .contact-desc p {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  .contact .contact-desc a {
    font-weight: 600;
    font-size: 1.4rem;
    color: var(--textColorDark);
    border-bottom: 1px solid var(--textColorGray);
  }
  .contact .contact-desc a:hover {
    border-bottom: 1px solid var(--textColorDark);
  }
  .contact .contact-desc .mobile {
    margin-top: 2rem;
  }

  .contact .contact-desc .social-container {
    display: none;
  }
  .contact .contact-desc .social-container .icon {
    width: 1.5rem;
    margin-right: 1rem;
  }

  &:after {
    content: "";
    position: fixed;
    z-index: 40;
    left: 0;
    bottom: 20%;
    width: 5rem;
    height: 3rem;
    background-repeat: no-repeat;
    opacity: 0;
    transition: 0.2s cubic-bezier(1, 0, 0, 1);
  }
  &.active:after {
    left: 7%;
    opacity: 1;
    transition: 0.8s cubic-bezier(1, 0, 0, 1);
  }

  @media only screen and (max-width: 600px) {
    .menu-container .contact {
      justify-content: space-around;
      width: 50%;
      margin-left: 20%;
    }
    .menu-container .menu-items {
      margin-top: 50%;
    }
    .menu-container .menu-items li a {
      font-size: 2rem;
    }
    .menu-container .contact-desc {
      margin-top: -8rem;
    }
    .menu-container .contact p {
      font-size: 1rem;
      line-height: 1.6rem;
      margin: 0.6rem 0;
    }
    .menu-container .contact a {
      font-size: 1rem;
      font-weight: 600;
    }
    .menu-container .contact .mobile {
      margin-top: 2rem;
    }
    .menu-container .contact .social-container {
      display: flex;
    }
    .menu-container::after {
      display: none;
    }
  }
`