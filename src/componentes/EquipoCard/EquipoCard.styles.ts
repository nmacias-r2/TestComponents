import { styled } from 'styled-components';

// import { md, sm } from '@/utils/screenSizes';

export const EquipoCardWrapper = styled.div`
    cursor: pointer;
    overflow: hidden;
    border-radius: 20px;

    .img-container {
        position: relative;
        width: 100%;
        height: 200px;
        background-color: #dee2e6;
        overflow: hidden;
        img {
            object-fit: cover;
            opacity: 0.8;

            transition: all ease 0.3s;
        }
    }
    .text {
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        bottom: 0;
        transition: all ease 0.3s;
        color: white;
        padding: 10px 5px;
        position: absolute;
        .location {
            overflow: hidden;
            max-height: 0;
            transition: max-height ease 0.5s;
        }
    }
    .clave {
        color: white;
        position: absolute;
        padding: 5px 5px;
        top: 0;
        bottom: auto;
        width: auto;
        right: 14px;
        background-color: black;
        font-weight: bold;
    }
    &:hover {
        img {
            opacity: 1;
            transform: scale(1.1);
            transition: all ease 0.3s;
        }
        .text {
            background: rgba(0, 0, 0, 0.7);
            transition: all ease 0.5s;
            .location {
                max-height: 200px;
            }
        }
    }
`;
