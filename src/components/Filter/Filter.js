import { RiUserSearchFill } from 'react-icons/ri';
import { FilterLable, InputdWrapper, StyledFilter } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <StyledFilter>
      <FilterLable>
        Find contacts by name <RiUserSearchFill />
      </FilterLable>
      <InputdWrapper
        type="text"
        value={filter}
        onChange={evt => onChangeFilter(evt.target.value)}
        placeholder="Filter by name..."
      />
    </StyledFilter>
  );
};
