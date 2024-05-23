import styled from "styled-components";

export const Container = styled.div.attrs(props => ({className: props.className}))`
    &.focus{
        outline: transparent;
        box-shadow: 0 0 0 2px var(--orange-500);
        border-radius: 1rem;
    }


    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.gray_300};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}
        }

    }

    > svg {
            margin-left: 16px;
        }
     
`;