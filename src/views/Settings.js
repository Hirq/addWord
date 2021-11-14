import React from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import { connect } from 'react-redux';
import { addTag as addTagAction, removeTag as removeTagAction } from 'redux/actions';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px 300px;
  grid-gap: 10px;
`
const StyledBoxHeader = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  text-align: center;
`
const StyledBox = styled.div`
  background-color: #0A56DF;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledButton = styled(Button)`
  margin-left: auto;
  min-width: 105px;
  height: 25px;
`
const StyledLi = styled.li`
  display: flex;
`
const Settings = ({tags, addTag, removeTag}) => {
  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledBoxHeader>Header</StyledBoxHeader>
        <StyledBox>Account</StyledBox>
        <StyledBox></StyledBox>
        <StyledBox>Tags <Button secondary onClick={() => addTag({
          value: 'NOWY',
          label: 'TEST'
        })}> ADD </Button> </StyledBox>
        <StyledBox>
          <ul>
            {tags.map((item) => 
              <StyledLi>{item.value} <StyledButton secondary onClick={() => removeTag(item.id)}> DELETE </StyledButton></StyledLi>
            )}
          </ul>
        </StyledBox>
      </StyledWrapper>
    </ListTemplate>
  ) 
}

const mapStateToProps = state => {
  const { tags } = state;
  return { tags };
}

const mapDispatchToProps = dispatch => ({
  addTag: (value, label) => dispatch(addTagAction(value, label)),
  removeTag: (id) => dispatch(removeTagAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps )(Settings);