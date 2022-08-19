import styled from "styled-components";


export const BannerContainer = styled.div`
    width:100%;
    height:550px;
    margin-bottom:50px;
    position:relative;

       @media screen and (max-width:800px){
          margin-top:80px; 
           
        }
    `;
export const BannerImageContainer = styled.div`
    width:100%;
    height:100%;
`;
export const BannerImage = styled.img`
    width:100%;
    height:100%;
  object-fit:cover;
`;
export const Header = styled.div`
    width:100%;
    position:absolute;
    top:20%;
    color: white;
    text-align:center;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    h1{
        font-size:80px;
    }
    span{
        font-size:30px;
        margin-top: -50px;
    }

  
    `;

export const Overlay = styled.div`
top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  opacity: 75%;
`;
