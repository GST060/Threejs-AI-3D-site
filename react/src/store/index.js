// import { proxy } from "valtio";

// const state =proxy ({
//     intro: true,
//     color: '#EFBD48',
//     isLogoTexture: true,
//     isFullTexture: false,
//     logoDecal: './threejs.png',
//     fullDecal: './threejs.png',
// });

// export default state;



import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#3A5A40', 
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png', 
    fullDecal: './threejs.png', 
});

export default state;
