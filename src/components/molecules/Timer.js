import React, { useEffect } from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const StyledWrapperTimer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`

const StyledParagraph = styled(Paragraph)`
  margin: 10px 5px 0px 0px;
  display: flex;
  flex-flow: row nowrap;
`
const StyledButton = styled(Button)`
  width: 60px;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0;
`

class Timer extends React.Component {
  state = { 
    time: {}, 
    seconds: 0,
    status: true,
    timer: 0,
  }
  
  componentDidMount = () => {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.startAutoTimer()
  }

  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  startAutoTimer = () => {
    if (this.state.timer === 0 && this.state.seconds === 0) {
      this.setState({ timer : setInterval(this.countUp, 1000)})
    }
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.state.timer);
      } else {
        this.setState({ timer: setInterval(this.countUp, 1000)})
      }
      return { status: !this.state.status };
    });
  };

  countUp = () => {
    let seconds = this.state.seconds + 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
  }

  render() {
    const status = this.state.status;
    return(
      <StyledWrapperTimer>
          <StyledParagraph>m: {this.state.time.m} s:{this.state.time.s}</StyledParagraph>
        <StyledButton onClick={this.handleClick}>{status ? 'Stop' : 'Start'}</StyledButton>
      </StyledWrapperTimer>
    );
  }
}

export default Timer;