import React from 'react';

// elements
import { ListContainer, ListBox, Item, ItemContent, ContentCheckBox, ContentText , ItemIcons, EditIcon, DeleteIcon } from './ListElements';

const List = () => {
  return (
      <ListContainer>
          <ListBox>
            {/* <TimeBox>9:00 AM</TimeBox> */}
            <Item>
              <ItemContent>
                <ContentCheckBox type='checkbox' />
                <ContentText type='text' value='Do AINN presentation' disabled />
              </ItemContent>
              <ItemIcons>
                <EditIcon />
                <DeleteIcon />
              </ItemIcons>
            </Item>
          </ListBox>
      </ListContainer>
  );
};

export default List;
