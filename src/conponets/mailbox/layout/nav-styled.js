import Styled from 'styled-components';

export const Navbar = Styled.nav `
    background: #fff;
    height: 100vh;
    box-shadow: 0px 0px 5px -3px;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            a {
                display: block;                
                padding: 10px 15px;
                color: #000;
                font-size: 16px;
                i{
                    padding-right: 8px;
                }
            }
            a.active, a:hover {               
                background: #eeeeee50;
                border-right: 3px solid #547df9;                        
            }
        }
    }    
`;
