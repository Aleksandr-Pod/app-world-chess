import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "components/modal/Modal";
import ModalLogOut from "components/modalLogOut/modalLogOut";
import { GreeetingPC, LogOutBtn, TextBtn } from "./UserMenu.styled";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const UserMenuPC = () => {
    const [modal, setModal] = useState(false);
    const userName = useSelector((state: any) => state.userName);

    return (
        <div>
            <GreeetingPC>Welcome {userName}</GreeetingPC>
            <NavLink to={"/statistic"}>My statistic</NavLink>
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
        </div>
    );
};

export default UserMenuPC;
