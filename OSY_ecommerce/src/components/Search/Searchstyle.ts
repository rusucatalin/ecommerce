import styled from "styled-components";
import { Search } from "./Search";
export interface ISearchInterface {
  width?: number | string;
  height?: number | string;
}

export const StyledSearch = styled(Search)(
  ({ styles }: { styles: ISearchInterface }) => ({ ...styles })
);
