import React from "react";
import { ButtonWrapper, ModalTitle, Container, TitleAccent } from "./ModalFindGame.styled";
import { GeneralButton } from "components/generalButton/GeneralButton.styled";
import { SpinnerDotted } from "spinners-react";

const ModalFindGame = ({ onModalClose }: any) => {
    return (
        <Container>
            <ModalTitle>
                <TitleAccent>Game search</TitleAccent>
                <SpinnerDotted size={50} thickness={100} speed={100} color="rgba(36, 204, 167, 1)" />
                Are you sure you want to cancel game search?
            </ModalTitle>
            <ButtonWrapper>
                <GeneralButton fullWidth variant={"contained"} bts={"submit"} onClick={onModalClose} type="submit">
                    Yes
                </GeneralButton>
            </ButtonWrapper>
        </Container>
    );
};

export default ModalFindGame;
