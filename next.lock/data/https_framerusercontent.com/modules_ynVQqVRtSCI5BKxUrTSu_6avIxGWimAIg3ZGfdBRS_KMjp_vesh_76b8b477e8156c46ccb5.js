import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (b9414d2)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import Card from"https://framerusercontent.com/modules/Ree2XYGqXmb4IJ8BP1MN/bxMy0Aij0beUjvIvyVX7/YyFSIG0j9.js";import Sensordetail from"https://framerusercontent.com/modules/CO8XUCuw7oEIfw9rayzy/cZWhb9ibP37kgsu59Xao/WDY5YIMsB.js";import{Icon as Feather}from"https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/8wMRKrSQDZ6NDbLhK7JF/Feather.js";const CardFonts=getFonts(Card);const SensordetailFonts=getFonts(Sensordetail);const FeatherFonts=getFonts(Feather);const cycleOrder=["vL7Y7QX4V","aNiUuzCD7"];const variantClassNames={"vL7Y7QX4V":"framer-v-12qqmcd","aNiUuzCD7":"framer-v-191jpyw"};const humanReadableVariantMap={"Variant 1":"vL7Y7QX4V","Variant 2":"aNiUuzCD7"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="vL7Y7QX4V",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"vL7Y7QX4V",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const tap1o14mc3=activeVariantCallback(async(...args)=>{setVariant("aNiUuzCD7");});const onTap1914ias=activeVariantCallback(async(...args)=>{setVariant("vL7Y7QX4V");});const variantProps=React.useMemo(()=>({"aNiUuzCD7":{"vL7Y7QX4V":{"data-framer-name":"Variant 2","background":null}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="aNiUuzCD7")return false;return true;};const isDisplayed2=()=>{if(baseVariant==="aNiUuzCD7")return false;return true;};const isDisplayed3=()=>{if(baseVariant==="aNiUuzCD7")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-qJJG7",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"vL7Y7QX4V",className:cx("framer-12qqmcd",className),style:{...style},background:null,"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("vL7Y7QX4V"),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"ekkyv5hXT-container",className:"framer-1ebh332-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ekkyv5hXT-container"),children:/*#__PURE__*/ _jsx(Card,{width:"100%",height:"100%",layoutId:"ekkyv5hXT",id:"ekkyv5hXT",temperature:"22",humidity:"40",co2:"100",roomName:"Keuken",backgroundColor:"rgba(56, 56, 56, 0.8)",style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("ekkyv5hXT")})}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"w7bCeEXqx-container",className:"framer-1o14mc3-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("w7bCeEXqx-container"),children:/*#__PURE__*/ _jsx(Card,{width:"100%",height:"100%",layoutId:"w7bCeEXqx",id:"w7bCeEXqx",temperature:"10",humidity:"500",co2:"400",roomName:"Voorkamer",backgroundColor:"rgba(107, 127, 230, 0.8)",tap:tap1o14mc3,style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("w7bCeEXqx")})}),isDisplayed3()&&/*#__PURE__*/ _jsxs(motion.div,{layoutId:"x_FUzzbks",className:"framer-f37970",style:{"borderBottomLeftRadius":19,"borderBottomRightRadius":19,"borderTopRightRadius":19,"borderTopLeftRadius":19,"boxShadow":"0px 10px 15px 5px rgba(0,0,0,0.25)","backgroundColor":"rgb(107, 127, 230)"},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("x_FUzzbks"),children:[/*#__PURE__*/ _jsx(motion.div,{layoutId:"xr8vb_xDa",className:"framer-1n3mm8f",style:{},background:null,transition:transition,layoutDependency:layoutDependency,...addVariantProps("xr8vb_xDa")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"32px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"XlXWLqZEj",className:"framer-24i93f",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Voorkamer</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("XlXWLqZEj")}),/*#__PURE__*/ _jsx(motion.div,{layoutId:"yU9vUObhi",className:"framer-1914ias",style:{"borderBottomLeftRadius":20,"borderBottomRightRadius":20,"borderTopRightRadius":20,"borderTopLeftRadius":20,"backgroundColor":"rgba(0, 0, 0, 0.25)"},"data-highlight":true,onTap:onTap1914ias,transition:transition,layoutDependency:layoutDependency,...addVariantProps("yU9vUObhi"),children:/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"x2vgwFxhk-container",className:"framer-gumgjd-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("x2vgwFxhk-container"),children:/*#__PURE__*/ _jsx(Feather,{width:"100%",height:"100%",layoutId:"x2vgwFxhk",id:"x2vgwFxhk",selectByList:true,iconSelection:"chevrons-left",iconSearch:"Home",mirrored:false,color:"rgb(255, 255, 255)",style:{"width":"100%","height":"100%"},transition:transition,layoutDependency:layoutDependency,...addVariantProps("x2vgwFxhk")})})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":400,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter"],layoutId:"ZZnSt5k7q",className:"framer-1h3wb7h",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Room</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ZZnSt5k7q")}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"MMFo14pQd-container",className:"framer-yl3vpa-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("MMFo14pQd-container"),children:/*#__PURE__*/ _jsx(Sensordetail,{width:"100%",height:"100%",layoutId:"MMFo14pQd",id:"MMFo14pQd",title:"Temperature",amount:"40",temperatureSlider:40,transition:transition,layoutDependency:layoutDependency,...addVariantProps("MMFo14pQd")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"yMIseVPRg-container",className:"framer-1fogg2o-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("yMIseVPRg-container"),children:/*#__PURE__*/ _jsx(Sensordetail,{width:"100%",height:"100%",layoutId:"yMIseVPRg",id:"yMIseVPRg",title:"Humidity",amount:"24 ",temperatureSlider:20,transition:transition,layoutDependency:layoutDependency,...addVariantProps("yMIseVPRg")})})]})]})})}));});const css=[".framer-qJJG7 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-qJJG7 * { box-sizing: border-box; }",".framer-qJJG7 .framer-12qqmcd { position: relative; overflow: hidden; width: 390px; height: 844px; }",".framer-qJJG7 .framer-1ebh332-container { position: absolute; width: 350px; height: 150px; left: 20px; top: 186px; flex: none; }",".framer-qJJG7 .framer-1o14mc3-container { position: absolute; width: 350px; height: 150px; left: 20px; top: 21px; flex: none; }",".framer-qJJG7 .framer-f37970 { position: absolute; overflow: visible; width: 343px; height: 690px; left: 0px; top: 0px; flex: none; }",".framer-qJJG7 .framer-1n3mm8f { position: absolute; overflow: visible; height: 51px; right: 17px; bottom: 29px; left: 20px; flex: none; }",".framer-qJJG7 .framer-24i93f { position: absolute; overflow: visible; width: auto; height: auto; left: 94px; top: 46px; flex: none; white-space: pre; }",".framer-qJJG7 .framer-1914ias { position: absolute; cursor: pointer; overflow: visible; width: 40px; height: 40px; left: 31px; top: 33px; flex: none; }",".framer-qJJG7 .framer-gumgjd-container { position: absolute; width: 24px; bottom: 8px; left: 7px; top: 8px; flex: none; }",".framer-qJJG7 .framer-1h3wb7h { position: absolute; overflow: visible; width: auto; height: auto; left: 94px; top: 26px; flex: none; white-space: pre; }",".framer-qJJG7 .framer-yl3vpa-container { position: absolute; width: auto; height: auto; left: 20px; top: 124px; flex: none; }",".framer-qJJG7 .framer-1fogg2o-container { position: absolute; width: auto; height: auto; left: 20px; top: 261px; flex: none; }",".framer-qJJG7.framer-v-191jpyw .framer-12qqmcd { width: 343px; height: 691px; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 844
 * @framerIntrinsicWidth 390
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "aNiUuzCD7": {"layout": ["fixed", "fixed"]}}}
 */ const FramerKMjp_vesh=withCSS(Component,css);export default FramerKMjp_vesh;FramerKMjp_vesh.displayName="Scroll screen";FramerKMjp_vesh.defaultProps={"width":390,"height":844};addPropertyControls(FramerKMjp_vesh,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["vL7Y7QX4V","aNiUuzCD7"],"optionTitles":["Variant 1","Variant 2"]}});addFonts(FramerKMjp_vesh,[...CardFonts,...SensordetailFonts,...FeatherFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerKMjp_vesh","slots":[],"annotations":{"framerIntrinsicWidth":"390","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"aNiUuzCD7\": {\"layout\": [\"fixed\", \"fixed\"]}}}","framerIntrinsicHeight":"844"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./KMjp_vesh.map