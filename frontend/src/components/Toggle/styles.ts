
import styled from "styled-components";
import Switch , { ReactSwitchProps } from 'react-switch'
export const Container = styled.div`
     margin-top: 10px;
    margin-right: 75px;
`;
export const ImagemDiaOuNoite = styled.img`
 height: 25px;
`;



export const  ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.white,
        offCOlor: theme.colors.black,
    })
)<ReactSwitchProps>``;