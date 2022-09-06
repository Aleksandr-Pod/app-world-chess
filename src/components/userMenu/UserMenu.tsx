import { useState } from "react";
import { useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "components/modal/Modal";
import ModalLogOut from "components/modalLogOut/modalLogOut";
import { Greeeting, LogOutBtn, Wrapper, TextBtn } from "./UserMenu.styled";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const userName = useSelector((state: any) => state.userName);

    return (
        <Wrapper>
            <Greeeting
                onClick={() => {
                    navigate("/statistic");
                }}
            >
                {userName}
            </Greeeting>
            <LogOutBtn
                onClick={() => {
                    setModal(true);
                }}
            >
                <LogoutIcon />
                <TextBtn> Exit </TextBtn>
            </LogOutBtn>
            {modal ? (
                <Modal
                    onModalClose={() => {
                        setModal(false);
                    }}
                >
                    <ModalLogOut
                        onModalClose={() => {
                            setModal(false);
                        }}
                    />
                </Modal>
            ) : null}
        </Wrapper>
    );
};

export default UserMenu;
