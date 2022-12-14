import "./InfinityLoopSlider.css"
const SRCS1 = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBtC4-m8DnE4ZJkd-xdMZsJ3RMxv1RHLUXg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqREKf2DK82jsIV3kBFBOllOer_H7GsQHuTw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSy1NbohS-nEQr4m69-paReuIms2ii2MnPw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfoU0LbVzVwAOOYlPrs7JRRvZRv8IiaZbdA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ9ayi-cus8o7Hw2vZ1fBHwTX7_-pA1kqikQ&usqp=CAU"
]

const SRCS2 = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchG-JJTI_1cAXTd3UeAzX1oVI7xpl8F6WEA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnWTxyS2lDwtlgZ76FVYHip929SmluNoRMaA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreU1-UYyOokskqSAK8b8EB8QIqDSf64UbTg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd2XziS7czWcS1oK9KMY_R4FAGX4l6ZFdrA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpUdYZ5wDz3StZv4jtjgKbRSNdznavVwn2Q&usqp=CAU"
]
const SRCS3 = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4rN33PyWHKh1AnV91DHPLsB-t-FEAjS2eA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3tSMdArMnAmluuKZNuec_KLJ-EDJEVlXHaA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1i2OEnTdy5Qu9bVGo4sH65u2JvnAQXdi-mKGYIoS80dH7y_rfslglQ4yGsxFnoovrPPw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqskADUePC23B_QRHoTABFDXvAUUWXG_1kg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecK9d4axE_iFsTmVEW0uyDibosfiRrA_hNg&usqp=CAU"
]
const DURATION = 50500;
const ROWS = 1;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Img = ({src}) => (
  <div >
    <img className="images" src={src} alt="aaa" height="150" width="300" />
  </div>
);

const InfinityLoopSlider = () => (
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={false}>
          {
            SRCS1.map((img, i) => (
              <Img src={img} key={i}/>
            ))
          }
        </InfiniteLoopSlider>
      ))}
      
        {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={true}>
          {
            SRCS2.map((img, i) => (
              <Img src={img} key={i}/>
            ))
          }
        </InfiniteLoopSlider>
      ))}
        
        {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000,DURATION + 5000)} reverse={false}>
          {
            SRCS3.map((img, i) => (
              <Img src={img} key={i}/>
            ))
          }
        </InfiniteLoopSlider>
      ))}
      
    </div>
);


export default InfinityLoopSlider