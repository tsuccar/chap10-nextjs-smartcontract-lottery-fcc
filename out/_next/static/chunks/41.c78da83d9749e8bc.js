"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41],{20041:function(o,r,t){t.r(r),t.d(r,{default:function(){return u}});var n=t(97621);t(67294),t(83078);let e=(0,n.f)(n.h)`
    background-color: ${o=>{var r;return null==(r=o.customize)?void 0:r.backgroundColor}};

    span {
        color: ${o=>{var r;return null==(r=o.customize)?void 0:r.textColor}};
        font-size: ${o=>{var r;return(null==(r=o.customize)?void 0:r.fontSize)+"px"}};
    }

    svg {
        fill: ${o=>{var r;return null==(r=o.customize)?void 0:r.textColor}};
    }

    :after {
        background-color: transparent;
        content: '';
        display: block;
        height: 100%;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        transition: all 0.3s ease;
        width: 100%;
        z-index: 0;
    }

    :hover {
        background-color: ${o=>{var r;return null==(r=o.customize)?void 0:r.backgroundColor}};

        :after {
            background-color: ${o=>{var r;return(null==(r=o.customize)?void 0:r.onHover)==="lighten"?(0,n.d)("light",20):(0,n.d)("dark",20)}};
        }
    }

    :active {
        :after {
            background-color: ${o=>{var r;return(null==(r=o.customize)?void 0:r.onHover)==="lighten"?(0,n.d)("light",40):(0,n.d)("dark",40)}};
        }
    }
`,{ButtonCustomStyled:l}={ButtonCustomStyled:e},u=({customize:o,...r})=>(0,n.i)(l,{customize:o,...r})}}]);