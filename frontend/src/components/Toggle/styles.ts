
import styled from "styled-components";
import Switch , { ReactSwitchProps } from 'react-switch'
export const Container = styled.div`
     margin-top: 1rem;
    margin-right: 7.5rem;
`;
export const ImagemDiaOuNoite = styled.img`
 height: 2.5rem;
`;



export const  ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.white,
        offColor: theme.colors.black,
    })
)<ReactSwitchProps>``;