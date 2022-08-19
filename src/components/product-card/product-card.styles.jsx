import styled from "styled-components";

export const BaseProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  position: relative;
  margin:10px;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
     @media screen and (max-width:800px){   
      height: 200px;
      margin:0;

           button{
            top:50%;
          }
           
      }

   
`;

export const Image = styled.img`
  width: 100%;
  height: 95%;
  object-fit: scale-down;
  margin-bottom: 5px;

  background-color: #f7f7f7;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  font-size: 1rem;
  padding-right: 20px;
  padding-left: 5px;
  flex-direction: column;
   text-align:center;
  
`;

export const Name = styled.span`
  width: 100%;
  font-weight:bold;
`;

export const Price = styled.span`
  width: 100%;
 
`;

export const ShopProductContainer = styled(BaseProductCardContainer)`
  width:40%;
  margin: 0 20px 0 0;

  button{
    top:170px;
  }
  
  span{
    width:100%;
  }
      @media screen and (max-width:800px){
           width:100%;
      button {
        width:40%;
        top:50%;
      }
    
  }
`;