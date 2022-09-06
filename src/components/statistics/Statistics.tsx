// import React, { useState } from "react";
import { BacgroundStatistic, TitleStatistic } from "./Statistics.styled";

const Statistics = () => {
    // const { data } = useStatisticaQuery(param);

    return (
        <BacgroundStatistic>
            <TitleStatistic>Statistica:</TitleStatistic>
            <div>Name:{}</div>
            <div>Reiting:{}</div>
            <div>Maximal reiting:{}</div>
            <div>All game:{}</div>
            <div>Win game:{}</div>
            <div>Looser game:{}</div>
        </BacgroundStatistic>
    );
};

export default Statistics;
