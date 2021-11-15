import React, { useState } from 'react';
import styled from 'styled-components';
import ListTemplate from 'templates/ListTemplate';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
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
const StyledFlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledBoxTag1 = styled.div`
  background-color: #0A56DF;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`
const StyledBoxTag2 = styled.div`
  background-color: #0A56DF;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`

const StyledButton = styled(Button)`
  margin-left: auto;
  min-width: 105px;
  height: 25px;
`
const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`
const StyledLi = styled.li`
  display: flex;
`
const Settings = ({tags, addTag, removeTag}) => {
  const [nameTag, setNameTag] = useState('');

  const handleTagName = (e) => {
    setNameTag(e.target.value);
  }

  return(
    <ListTemplate>
      <StyledWrapper>
        <StyledBoxHeader>Header</StyledBoxHeader>
        <StyledFlexCenter>Account</StyledFlexCenter>
        <StyledBoxTag1>
          <StyledFlexCenter>Tags</StyledFlexCenter> 
          <StyledFlexCenter>
            <Input value={nameTag||''} placeholder="name tag" onChange={handleTagName}/>
          </StyledFlexCenter> 
          <StyledFlexCenter>
            <Button secondary onClick={() => addTag({
            value: nameTag,
            label: nameTag
            })}> ADD </Button>
          </StyledFlexCenter> 
        </StyledBoxTag1>
        <StyledBoxTag2> 
        </StyledBoxTag2>
        <StyledUl>
        <StyledBoxTag2>
          {tags.map((item) => 
            <StyledLi>{item.value} <StyledButton secondary onClick={() => removeTag(item.id)}> DELETE </StyledButton></StyledLi>
          )}
        </StyledBoxTag2>
        </StyledUl>

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