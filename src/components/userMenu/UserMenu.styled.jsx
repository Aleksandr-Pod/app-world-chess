import styled from "@emotion/styled";

export const Greeeting = styled.span`
    display: block;
    font-family: "Circe";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    @media (min-width: 768px) {
        &:after {
            content: "|";
            width: 1px;
            height: 30px;
            margin-left: 12px;
        }
    }
`;

export const GreeetingPC = styled.span`
    display: block;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: #002a69;
    margin-right: 12px;
    margin-top: 30px;
    @media (min-width: 768px) {
    }
`;

export const LogOutBtn = styled.div`
    color: #bdbdbd;
    min-width: 0px;
    padding: 0px;
    padding-top: 18px;
    padding-bottom: 18px;
    display: flex;
    text-align: center;
    justify-content: center;
    cursor: pointer;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        transform: scale(1.1);
    }

    @media (min-width: 768px) {
        padding-top: 28px;
        padding-bottom: 28px;
        color: #464646;
        &:hover {
            color: #531a1a;
        }
    }
`;

export const TextBtn = styled.span`
    display: none;
    @media (min-width: 768px) {
        display: block;
        font-family: "Circe";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        margin-left: 8px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;
