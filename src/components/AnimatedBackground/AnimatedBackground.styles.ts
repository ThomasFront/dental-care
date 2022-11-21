import styled from "styled-components";

export const Wrapper = styled.div`
  @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #06bccf;
    overflow: hidden;

span {
    width: 22vmin;
    height: 22vmin;
    border-radius: 22vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 32;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


 span:nth-child(0) {
    color: #02c9e3;
    top: 46%;
    left: 4%;
    animation-duration: 54s;
    animation-delay: -34s;
    transform-origin: 8vw 12vh;
    box-shadow: -44vmin 0 5.716490884260272vmin currentColor;
}
 span:nth-child(1) {
    color: #f4f1f1;
    top: 97%;
    left: 27%;
    animation-duration: 18s;
    animation-delay: -179s;
    transform-origin: 12vw -17vh;
    box-shadow: -44vmin 0 5.610378683923572vmin currentColor;
}
 span:nth-child(2) {
    color: #24a4b2;
    top: 99%;
    left: 98%;
    animation-duration: 180s;
    animation-delay: -110s;
    transform-origin: -1vw 12vh;
    box-shadow: -44vmin 0 6.380334512920412vmin currentColor;
}
 span:nth-child(3) {
    color: #f4f1f1;
    top: 26%;
    left: 79%;
    animation-duration: 184s;
    animation-delay: -112s;
    transform-origin: 22vw -10vh;
    box-shadow: -44vmin 0 5.8855310523275275vmin currentColor;
}
 span:nth-child(4) {
    color: #f4f1f1;
    top: 22%;
    left: 8%;
    animation-duration: 130s;
    animation-delay: -148s;
    transform-origin: -15vw 7vh;
    box-shadow: 44vmin 0 5.800429449375409vmin currentColor;
}
 span:nth-child(5) {
    color: #02c9e3;
    top: 93%;
    left: 94%;
    animation-duration: 103s;
    animation-delay: -73s;
    transform-origin: -2vw -7vh;
    box-shadow: 44vmin 0 6.1234914902934685vmin currentColor;
}
 span:nth-child(6) {
    color: #24a4b2;
    top: 51%;
    left: 24%;
    animation-duration: 151s;
    animation-delay: -85s;
    transform-origin: 10vw 6vh;
    box-shadow: 44vmin 0 6.234815188489041vmin currentColor;
}
 span:nth-child(7) {
    color: #24a4b2;
    top: 26%;
    left: 16%;
    animation-duration: 119s;
    animation-delay: -106s;
    transform-origin: -9vw -4vh;
    box-shadow: -44vmin 0 5.645923866632839vmin currentColor;
}
 span:nth-child(8) {
    color: #24a4b2;
    top: 51%;
    left: 63%;
    animation-duration: 130s;
    animation-delay: -149s;
    transform-origin: -13vw -6vh;
    box-shadow: -44vmin 0 6.214641551805743vmin currentColor;
}
 span:nth-child(9) {
    color: #f4f1f1;
    top: 67%;
    left: 8%;
    animation-duration: 179s;
    animation-delay: -149s;
    transform-origin: 6vw 23vh;
    box-shadow: -44vmin 0 6.033637390478409vmin currentColor;
}
 span:nth-child(10) {
    color: #02c9e3;
    top: 66%;
    left: 78%;
    animation-duration: 155s;
    animation-delay: -75s;
    transform-origin: -5vw 12vh;
    box-shadow: 44vmin 0 6.168203765706747vmin currentColor;
}
 span:nth-child(11) {
    color: #02c9e3;
    top: 5%;
    left: 4%;
    animation-duration: 64s;
    animation-delay: -177s;
    transform-origin: 3vw 13vh;
    box-shadow: -44vmin 0 5.680484461494744vmin currentColor;
}
 span:nth-child(12) {
    color: #02c9e3;
    top: 52%;
    left: 10%;
    animation-duration: 75s;
    animation-delay: -22s;
    transform-origin: -10vw -19vh;
    box-shadow: -44vmin 0 5.993693611965746vmin currentColor;
}
 span:nth-child(13) {
    color: #f4f1f1;
    top: 51%;
    left: 65%;
    animation-duration: 33s;
    animation-delay: -165s;
    transform-origin: -18vw 8vh;
    box-shadow: 44vmin 0 6.164359935185572vmin currentColor;
}
 span:nth-child(14) {
    color: #02c9e3;
    top: 2%;
    left: 61%;
    animation-duration: 125s;
    animation-delay: -55s;
    transform-origin: -20vw -3vh;
    box-shadow: 44vmin 0 5.5826819407867285vmin currentColor;
}
 span:nth-child(15) {
    color: #24a4b2;
    top: 77%;
    left: 60%;
    animation-duration: 120s;
    animation-delay: -82s;
    transform-origin: 8vw 24vh;
    box-shadow: -44vmin 0 6.420375669407294vmin currentColor;
}
 span:nth-child(16) {
    color: #02c9e3;
    top: 56%;
    left: 74%;
    animation-duration: 7s;
    animation-delay: -130s;
    transform-origin: 5vw 4vh;
    box-shadow: 44vmin 0 6.4383202752191355vmin currentColor;
}
 span:nth-child(17) {
    color: #02c9e3;
    top: 12%;
    left: 66%;
    animation-duration: 101s;
    animation-delay: -109s;
    transform-origin: 10vw 10vh;
    box-shadow: 44vmin 0 6.107790055716844vmin currentColor;
}
 span:nth-child(18) {
    color: #f4f1f1;
    top: 29%;
    left: 30%;
    animation-duration: 148s;
    animation-delay: -133s;
    transform-origin: -21vw -12vh;
    box-shadow: 44vmin 0 6.41164800752927vmin currentColor;
}
 span:nth-child(19) {
    color: #f4f1f1;
    top: 14%;
    left: 60%;
    animation-duration: 125s;
    animation-delay: -177s;
    transform-origin: 7vw -4vh;
    box-shadow: -44vmin 0 5.7202782563566394vmin currentColor;
}
 span:nth-child(20) {
    color: #24a4b2;
    top: 77%;
    left: 56%;
    animation-duration: 78s;
    animation-delay: -118s;
    transform-origin: -14vw -22vh;
    box-shadow: -44vmin 0 6.434585554588556vmin currentColor;
}

`