import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (b9414d2)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const cycleOrder=["o1aMl0Pml"];const variantClassNames={"o1aMl0Pml":"framer-v-1ynih3k"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="o1aMl0Pml",temperature:hkbZ5UAh4="24 ",humidity:mEBLoFsX5="50",co2:pPtr2ReTX="400",roomname:hMDiAomX3="Voorkamer",backgroundcolor:YkDXW6Wx_="rgb(56, 56, 56)",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"o1aMl0Pml",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-mIpIk",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"o1aMl0Pml",className:cx("framer-1ynih3k",className),style:{"borderBottomLeftRadius":19,"borderBottomRightRadius":19,"borderTopRightRadius":19,"borderTopLeftRadius":19,"boxShadow":"0px 10px 15px 5px rgba(0,0,0,0.25)","backgroundColor":YkDXW6Wx_,...style},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("o1aMl0Pml"),children:[/*#__PURE__*/ _jsxs(motion.div,{layoutId:"VjrybPuS6",className:"framer-8f8k3c",style:{},background:null,transition:transition,layoutDependency:layoutDependency,...addVariantProps("VjrybPuS6"),children:[/*#__PURE__*/ _jsxs(motion.div,{layoutId:"eorbH0Y15",className:"framer-zxulzo",style:{},background:null,"data-framer-name":"CO2 frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("eorbH0Y15"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"GpI8gyzRM",className:"framer-ae4wpy",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>ppm</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("GpI8gyzRM")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"Y6CR7TJp_",className:"framer-16f16la",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>400</span><br></span></span>",text:pPtr2ReTX,transition:transition,layoutDependency:layoutDependency,...addVariantProps("Y6CR7TJp_")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter"],layoutId:"HQ6uQz9VA",className:"framer-1y0pbar",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>CO2</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("HQ6uQz9VA")})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"PnZBRVLo5",className:"framer-1iplznl",style:{},background:null,"data-framer-name":"Humidity frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("PnZBRVLo5"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"NuhyC1mny",className:"framer-1hhhcxz",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>%</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("NuhyC1mny")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["Inter-Bold"],layoutId:"F5TcMUHgr",className:"framer-1q3iw9v",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>50</span><br></span></span>",text:mEBLoFsX5,transition:transition,layoutDependency:layoutDependency,...addVariantProps("F5TcMUHgr")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter"],center:"x",layoutId:"FW3uAhQhD",className:"framer-6ymypm",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Humidity</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("FW3uAhQhD")})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"rdM61yebB",className:"framer-1x03ncl",style:{},background:null,"data-framer-name":"Temperature frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("rdM61yebB"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"ciVsyXC18",className:"framer-1u7bp3z",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ciVsyXC18")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"dAcfYshGK",className:"framer-qb53io",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>24 </span><br></span></span>",text:hkbZ5UAh4,transition:transition,layoutDependency:layoutDependency,...addVariantProps("dAcfYshGK")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter"],center:"x",layoutId:"yrFo3SCIG",className:"framer-gf8oed",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("yrFo3SCIG")})]})]}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"kzktWtcc1",className:"framer-874pfr",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Voorkamer</span><br></span></span>",text:hMDiAomX3,transition:transition,layoutDependency:layoutDependency,...addVariantProps("kzktWtcc1")})]})})}));});const css=[".framer-mIpIk [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-mIpIk * { box-sizing: border-box; }",".framer-mIpIk .framer-1ynih3k { position: relative; overflow: visible; width: 352px; height: 153px; }",".framer-mIpIk .framer-8f8k3c { position: absolute; overflow: visible; height: 51px; right: 17px; bottom: 29px; left: 20px; flex: none; }",".framer-mIpIk .framer-zxulzo { position: absolute; overflow: visible; width: 88px; right: 0px; bottom: 0px; top: 0px; flex: none; }",".framer-mIpIk .framer-ae4wpy { position: absolute; overflow: visible; width: auto; height: auto; right: 0px; bottom: 5px; flex: none; white-space: pre; }",".framer-mIpIk .framer-16f16la, .framer-mIpIk .framer-qb53io { position: absolute; overflow: visible; width: auto; height: auto; bottom: 0px; left: 0px; flex: none; white-space: pre; }",".framer-mIpIk .framer-1y0pbar { position: absolute; overflow: visible; width: auto; height: auto; left: 0px; top: 0px; flex: none; white-space: pre; }",".framer-mIpIk .framer-1iplznl { position: absolute; overflow: visible; width: 53px; bottom: 2px; left: calc(46.03174603174605% - 53px/2); top: 0px; flex: none; }",".framer-mIpIk .framer-1hhhcxz { position: absolute; overflow: visible; width: auto; height: auto; bottom: 3px; left: 38px; flex: none; white-space: pre; }",".framer-mIpIk .framer-1q3iw9v { position: absolute; overflow: visible; width: auto; height: auto; bottom: -2px; left: 0px; flex: none; white-space: pre; }",".framer-mIpIk .framer-6ymypm { position: absolute; overflow: visible; width: auto; height: auto; left: 47%; top: 0px; flex: none; white-space: pre; }",".framer-mIpIk .framer-1x03ncl { position: absolute; overflow: visible; width: 72px; bottom: 0px; left: 0px; top: 0px; flex: none; }",".framer-mIpIk .framer-1u7bp3z { position: absolute; overflow: visible; width: auto; height: auto; right: 16px; bottom: 5px; flex: none; white-space: pre; }",".framer-mIpIk .framer-gf8oed { position: absolute; overflow: visible; width: auto; height: auto; left: 50%; top: 0px; flex: none; white-space: pre; }",".framer-mIpIk .framer-874pfr { position: absolute; overflow: visible; width: auto; height: auto; left: 20px; top: 27px; flex: none; white-space: pre; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 153
 * @framerIntrinsicWidth 352
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"hkbZ5UAh4": "temperature", "mEBLoFsX5": "humidity", "pPtr2ReTX": "co2", "hMDiAomX3": "roomname", "YkDXW6Wx_": "backgroundcolor"}
 */ const FramerYyFSIG0j9=withCSS(Component,css);export default FramerYyFSIG0j9;FramerYyFSIG0j9.displayName="Room_details";FramerYyFSIG0j9.defaultProps={"width":352,"height":153};addPropertyControls(FramerYyFSIG0j9,{"hkbZ5UAh4":{"type":ControlType.String,"title":"Temperature","defaultValue":"24 ","displayTextArea":false},"mEBLoFsX5":{"type":ControlType.String,"title":"Humidity","defaultValue":"50","displayTextArea":false},"pPtr2ReTX":{"type":ControlType.String,"title":"Co 2","defaultValue":"400","displayTextArea":false},"hMDiAomX3":{"type":ControlType.String,"title":"Roomname","defaultValue":"Voorkamer","displayTextArea":false},"YkDXW6Wx_":{"type":ControlType.Color,"title":"Backgroundcolor","defaultValue":"rgb(56, 56, 56)"}});addFonts(FramerYyFSIG0j9,[]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerYyFSIG0j9","slots":[],"annotations":{"framerContractVersion":"1","framerVariables":"{\"hkbZ5UAh4\": \"temperature\", \"mEBLoFsX5\": \"humidity\", \"pPtr2ReTX\": \"co2\", \"hMDiAomX3\": \"roomname\", \"YkDXW6Wx_\": \"backgroundcolor\"}","framerIntrinsicHeight":"153","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicWidth":"352"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./YyFSIG0j9.map