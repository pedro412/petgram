import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Item = styled.li`
    padding: 0 8px;
`

export const List = styled.ul`
    display: flex;
    overflow: auto;
    width: 100%;
    ${props => props.fixed && css`
    ${fadeIn('0.3s', 'ease')}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
        `
}
`
