import { BackgroundBox, BlurMainPage } from "./BackgroundPage.styled";

const BackgroundPage = ({ children }: any) => {
    return (
        <BackgroundBox>
            <BlurMainPage />
            {children}
        </BackgroundBox>
    );
};

export default BackgroundPage;
