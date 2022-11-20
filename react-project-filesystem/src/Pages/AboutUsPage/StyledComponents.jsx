import styled from "@emotion/styled";
import Image from '../../assets/headerimage.jpg';

export const StyledContainer = styled('div')`
    padding-top:90px;
    height: 400vh;
    
    background: #ada996; /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #ada996, #f2f2f2, #dbdbdb, #eaeaea); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const StyledHeaderImage = styled('div')`
    display:flex;
    height:40vh;
    place-content:center;
    background: url(${Image});
    color:white;
    padding-bottom:10px;
`;
export const StyledCaption = styled('h1')`
    align-self:center;
    font-size:10vh;
`;

export const StyledText = styled('p')`
    text-align: center;
    width:100%; 
    overflow:hidden;
`;