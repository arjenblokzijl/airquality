import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (b9414d2)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import{Slider}from"https://framerusercontent.com/modules/AHY1z1xp5QsxaZBkEL9H/VjxqOgQHce3knCJNr85R/Slider.js";const SliderFonts=getFonts(Slider);const cycleOrder=["o1aMl0Pml","aqWMAXQKw"];const variantClassNames={"o1aMl0Pml":"framer-v-1ynih3k","aqWMAXQKw":"framer-v-fo5qhz"};const humanReadableVariantMap={"card_list":"o1aMl0Pml","card_expand":"aqWMAXQKw"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,width,height,layoutId,variant:outerVariant="o1aMl0Pml",temperature:hkbZ5UAh4="10",humidity:mEBLoFsX5="50",co2:pPtr2ReTX="400",roomName:hMDiAomX3="Voorkamer",backgroundColor:D91SYkbEQ="rgba(56, 56, 56, 0.8)",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"o1aMl0Pml",variant,transitions,variantClassNames,cycleOrder});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTap1ynih3k=activeVariantCallback(async(...args)=>{setVariant("aqWMAXQKw");});const onTapfo5qhz=activeVariantCallback(async(...args)=>{setVariant("o1aMl0Pml");});const variantProps=React.useMemo(()=>({"aqWMAXQKw":{"o1aMl0Pml":{"onTap":onTapfo5qhz,"data-framer-name":"card_expand","data-highlight":true},"kzktWtcc1":{"center":false},"ZxmOV7FVO":{"direction":"vertical","distribution":"start","alignment":"center","background":null,"__contentWrapperStyle":{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"}}}}),[onTapfo5qhz]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="aqWMAXQKw")return true;return false;};const isDisplayed2=()=>{if(baseVariant==="aqWMAXQKw")return false;return true;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-JjsEo",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"o1aMl0Pml",className:cx("framer-1ynih3k",className),style:{"borderBottomLeftRadius":19,"borderBottomRightRadius":19,"borderTopRightRadius":19,"borderTopLeftRadius":19,"boxShadow":"0px 10px 15px 5px rgba(0,0,0,0.25)","backgroundColor":D91SYkbEQ,...style},"data-highlight":true,"data-framer-name":"card_list",onTap:onTap1ynih3k,transition:transition,layoutDependency:layoutDependency,ref:ref,...addVariantProps("o1aMl0Pml"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],center:true,layoutId:"kzktWtcc1",className:"framer-874pfr",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Voorkamer</span><br></span></span>",text:hMDiAomX3,transition:transition,layoutDependency:layoutDependency,...addVariantProps("kzktWtcc1")}),isDisplayed1()&&/*#__PURE__*/ _jsxs(Stack,{layoutId:"ZxmOV7FVO",className:"framer-19ho8o",style:{"backgroundColor":"transparent"},background:null,direction:"vertical",distribution:"start",alignment:"center",gap:20,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},center:"x",variants:{"aqWMAXQKw":{"backgroundColor":"transparent"}},transition:transition,layoutDependency:layoutDependency,...addVariantProps("ZxmOV7FVO"),children:[/*#__PURE__*/ _jsxs(motion.div,{layoutId:"qRX8Lto_f",className:"framer-2xu1j6",style:{"borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10,"backgroundColor":"rgba(0, 0, 0, 0.15)"},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("qRX8Lto_f"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"eGegaVdOG-container",className:"framer-1eyt8ny-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("eGegaVdOG-container"),children:/*#__PURE__*/ _jsx(Slider,{width:"100%",height:"100%",layoutId:"eGegaVdOG",id:"eGegaVdOG",fillColor:"rgb(209, 51, 51)",trackColor:"rgba(0, 0, 0, 0.1)",knobColor:"rgb(255, 255, 255)",shadow:"rgba(0, 0, 0, 0.1)",shouldAnimateChange:true,transition:transition,knobSetting:"Hide",constrainKnob:false,knobSize:20,value:20,trackHeight:15,min:0,trackRadius:15,max:100,style:{"width":"100%"},layoutDependency:layoutDependency,...addVariantProps("eGegaVdOG")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"tKBTHjhpD",className:"framer-dk3ks0",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("tKBTHjhpD")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"bV2OLC895",className:"framer-1gxu0nz",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("bV2OLC895"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"32px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"Q0g9SUfvD",className:"framer-sk8rw2",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>24 </span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("Q0g9SUfvD")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"cnXWlAGh1",className:"framer-8tdxtk",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("cnXWlAGh1")})]})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"rqU4TDr5U",className:"framer-1en5eoi",style:{"borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10,"backgroundColor":"rgba(0, 0, 0, 0.15)"},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("rqU4TDr5U"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"L1nBlhYZK-container",className:"framer-1y79rhy-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("L1nBlhYZK-container"),children:/*#__PURE__*/ _jsx(Slider,{width:"100%",height:"100%",layoutId:"L1nBlhYZK",id:"L1nBlhYZK",fillColor:"rgb(209, 51, 51)",trackColor:"rgba(0, 0, 0, 0.1)",knobColor:"rgb(255, 255, 255)",shadow:"rgba(0, 0, 0, 0.1)",shouldAnimateChange:true,transition:transition,knobSetting:"Hide",constrainKnob:false,knobSize:20,value:20,trackHeight:15,min:0,trackRadius:15,max:100,style:{"width":"100%"},layoutDependency:layoutDependency,...addVariantProps("L1nBlhYZK")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"qVQMTgxPF",className:"framer-44ohwt",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("qVQMTgxPF")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"xA7dR5OPQ",className:"framer-1gozbq0",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("xA7dR5OPQ"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"32px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"ZwjbTkByV",className:"framer-1l8m5z",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>24 </span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ZwjbTkByV")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"Dw45fGHFm",className:"framer-1ku810y",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("Dw45fGHFm")})]})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"ifpSuitEv",className:"framer-kx8dxg",style:{"borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10,"backgroundColor":"rgba(0, 0, 0, 0.15)"},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ifpSuitEv"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"WonCvxZwC-container",className:"framer-18qjrkk-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("WonCvxZwC-container"),children:/*#__PURE__*/ _jsx(Slider,{width:"100%",height:"100%",layoutId:"WonCvxZwC",id:"WonCvxZwC",fillColor:"rgb(209, 51, 51)",trackColor:"rgba(0, 0, 0, 0.1)",knobColor:"rgb(255, 255, 255)",shadow:"rgba(0, 0, 0, 0.1)",shouldAnimateChange:true,transition:transition,knobSetting:"Hide",constrainKnob:false,knobSize:20,value:20,trackHeight:15,min:0,trackRadius:15,max:100,style:{"width":"100%"},layoutDependency:layoutDependency,...addVariantProps("WonCvxZwC")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"HE61ws5FQ",className:"framer-1upc86a",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("HE61ws5FQ")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"j4PXt1VKj",className:"framer-2qxuhu",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("j4PXt1VKj"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"32px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"GfBQJQlj3",className:"framer-19ritnn",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>24 </span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("GfBQJQlj3")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"GIoZHeZgx",className:"framer-ubdk64",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("GIoZHeZgx")})]})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"IpFg1Af2I",className:"framer-1nqtwzi",style:{"borderBottomLeftRadius":10,"borderBottomRightRadius":10,"borderTopRightRadius":10,"borderTopLeftRadius":10,"backgroundColor":"rgba(0, 0, 0, 0.15)"},"data-framer-name":"Variant 1",transition:transition,layoutDependency:layoutDependency,...addVariantProps("IpFg1Af2I"),children:[/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"YEpYn_YwB-container",className:"framer-eqjimw-container",transition:transition,layoutDependency:layoutDependency,...addVariantProps("YEpYn_YwB-container"),children:/*#__PURE__*/ _jsx(Slider,{width:"100%",height:"100%",layoutId:"YEpYn_YwB",id:"YEpYn_YwB",fillColor:"rgb(209, 51, 51)",trackColor:"rgba(0, 0, 0, 0.1)",knobColor:"rgb(255, 255, 255)",shadow:"rgba(0, 0, 0, 0.1)",shouldAnimateChange:true,transition:transition,knobSetting:"Hide",constrainKnob:false,knobSize:20,value:20,trackHeight:15,min:0,trackRadius:15,max:100,style:{"width":"100%"},layoutDependency:layoutDependency,...addVariantProps("YEpYn_YwB")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"VLYed0z9z",className:"framer-1q7q5n0",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("VLYed0z9z")}),/*#__PURE__*/ _jsxs(Stack,{layoutId:"qNxVNDm8m",className:"framer-1iifjyw",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("qNxVNDm8m"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"32px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"YZplFMElo",className:"framer-7btm3m",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>24 </span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("YZplFMElo")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"c7ZGECSeI",className:"framer-wos12c",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("c7ZGECSeI")})]})]})]}),isDisplayed2()&&/*#__PURE__*/ _jsxs(motion.div,{layoutId:"VjrybPuS6",className:"framer-8f8k3c",style:{},background:null,transition:transition,layoutDependency:layoutDependency,...addVariantProps("VjrybPuS6"),children:[/*#__PURE__*/ _jsxs(motion.div,{layoutId:"eorbH0Y15",className:"framer-zxulzo",style:{},background:null,"data-framer-name":"CO2 frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("eorbH0Y15"),children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"unx2z8mXH",className:"framer-9pkx8r",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("unx2z8mXH"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"Y6CR7TJp_",className:"framer-16f16la",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>400</span><br></span></span>",text:pPtr2ReTX,transition:transition,layoutDependency:layoutDependency,...addVariantProps("Y6CR7TJp_")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"GpI8gyzRM",className:"framer-ae4wpy",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>ppm</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("GpI8gyzRM")})]}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"HQ6uQz9VA",className:"framer-1y0pbar",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>CO2</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("HQ6uQz9VA")})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"PnZBRVLo5",className:"framer-1iplznl",style:{},background:null,"data-framer-name":"Humidity frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("PnZBRVLo5"),children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"BdWOMiL1t",className:"framer-630t5s",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("BdWOMiL1t"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"left","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,alignment:"left",fonts:["Inter-Bold"],layoutId:"F5TcMUHgr",className:"framer-1q3iw9v",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>50</span><br></span></span>",text:mEBLoFsX5,transition:transition,layoutDependency:layoutDependency,...addVariantProps("F5TcMUHgr")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"NuhyC1mny",className:"framer-1hhhcxz",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>%</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("NuhyC1mny")})]}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],center:"x",layoutId:"FW3uAhQhD",className:"framer-6ymypm",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Humidity</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("FW3uAhQhD")})]}),/*#__PURE__*/ _jsxs(motion.div,{layoutId:"rdM61yebB",className:"framer-1x03ncl",style:{},background:null,"data-framer-name":"Temperature frame",transition:transition,layoutDependency:layoutDependency,...addVariantProps("rdM61yebB"),children:[/*#__PURE__*/ _jsxs(Stack,{layoutId:"FnWp8WzXs",className:"framer-1aqcoqy",style:{},background:null,direction:"horizontal",distribution:"start",alignment:"start",gap:5,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,transition:transition,layoutDependency:layoutDependency,...addVariantProps("FnWp8WzXs"),children:[/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"dAcfYshGK",className:"framer-qb53io",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>10</span><br></span></span>",text:hkbZ5UAh4,transition:transition,layoutDependency:layoutDependency,...addVariantProps("dAcfYshGK")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.5)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"ciVsyXC18",className:"framer-1u7bp3z",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>°C</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("ciVsyXC18")})]}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-style":"normal","--framer-font-weight":500,"--framer-text-color":"rgba(255, 255, 255, 0.8)","--framer-font-size":"12px","--framer-letter-spacing":"0px","--framer-text-transform":"capitalize","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],center:"x",layoutId:"yrFo3SCIG",className:"framer-gf8oed",rawHTML:"<span style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><span style='direction: ltr; font-size: 0'><span style=''>Temperature</span><br></span></span>",transition:transition,layoutDependency:layoutDependency,...addVariantProps("yrFo3SCIG")})]})]})]})})}));});const css=[".framer-JjsEo [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}","@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-JjsEo * { box-sizing: border-box; }",".framer-JjsEo .framer-1ynih3k { position: relative; cursor: pointer; overflow: visible; width: 365px; height: 130px; }",".framer-JjsEo .framer-874pfr { position: absolute; overflow: visible; width: auto; height: auto; left: 25%; top: 30%; flex: none; white-space: pre; }",".framer-JjsEo .framer-19ho8o { position: absolute; overflow: visible; width: 312px; height: 478px; left: 50%; top: 90px; flex: none; }",".framer-JjsEo .framer-2xu1j6, .framer-JjsEo .framer-1en5eoi, .framer-JjsEo .framer-kx8dxg, .framer-JjsEo .framer-1nqtwzi { position: relative; overflow: visible; width: 299px; height: 112px; flex: none; }",".framer-JjsEo .framer-1eyt8ny-container, .framer-JjsEo .framer-1y79rhy-container, .framer-JjsEo .framer-18qjrkk-container, .framer-JjsEo .framer-eqjimw-container { position: absolute; height: auto; right: 22px; bottom: 17px; left: 22px; flex: none; }",".framer-JjsEo .framer-dk3ks0, .framer-JjsEo .framer-44ohwt, .framer-JjsEo .framer-1upc86a, .framer-JjsEo .framer-1q7q5n0 { position: absolute; overflow: visible; width: auto; height: auto; left: 25px; top: 27px; flex: none; white-space: pre; }",".framer-JjsEo .framer-1gxu0nz, .framer-JjsEo .framer-1gozbq0, .framer-JjsEo .framer-2qxuhu, .framer-JjsEo .framer-1iifjyw { position: absolute; overflow: visible; width: min-content; height: min-content; right: 22px; top: 18px; flex: none; }",".framer-JjsEo .framer-sk8rw2, .framer-JjsEo .framer-8tdxtk, .framer-JjsEo .framer-1l8m5z, .framer-JjsEo .framer-1ku810y, .framer-JjsEo .framer-19ritnn, .framer-JjsEo .framer-ubdk64, .framer-JjsEo .framer-7btm3m, .framer-JjsEo .framer-wos12c, .framer-JjsEo .framer-16f16la, .framer-JjsEo .framer-ae4wpy, .framer-JjsEo .framer-1q3iw9v, .framer-JjsEo .framer-1hhhcxz, .framer-JjsEo .framer-qb53io, .framer-JjsEo .framer-1u7bp3z { position: relative; overflow: visible; width: auto; height: auto; flex: none; white-space: pre; }",".framer-JjsEo .framer-8f8k3c { position: absolute; overflow: visible; width: 315px; height: 51px; left: calc(49.86301369863016% - 315px/2); top: calc(60.76923076923079% - 51px/2); flex: none; }",".framer-JjsEo .framer-zxulzo { position: absolute; overflow: visible; width: 88px; right: 22px; bottom: 0px; top: 0px; flex: none; }",".framer-JjsEo .framer-9pkx8r { position: absolute; overflow: visible; width: 88px; height: min-content; bottom: -4px; left: 0px; flex: none; }",".framer-JjsEo .framer-1y0pbar { position: absolute; overflow: visible; width: auto; height: auto; left: 0px; top: 5px; flex: none; white-space: pre; }",".framer-JjsEo .framer-1iplznl { position: absolute; overflow: visible; width: 53px; bottom: 2px; left: calc(43.80952380952383% - 53px/2); top: 0px; flex: none; }",".framer-JjsEo .framer-630t5s { position: absolute; overflow: visible; width: 52px; height: min-content; bottom: -6px; left: 0px; flex: none; }",".framer-JjsEo .framer-6ymypm { position: absolute; overflow: visible; width: auto; height: auto; left: 47%; top: 5px; flex: none; white-space: pre; }",".framer-JjsEo .framer-1x03ncl { position: absolute; overflow: visible; width: 72px; bottom: 0px; left: 0px; top: 0px; flex: none; }",".framer-JjsEo .framer-1aqcoqy { position: absolute; overflow: visible; width: min-content; height: min-content; bottom: -4px; left: 0px; flex: none; }",".framer-JjsEo .framer-gf8oed { position: absolute; overflow: visible; width: auto; height: auto; left: 50%; top: 5px; flex: none; white-space: pre; }",".framer-JjsEo.framer-v-fo5qhz .framer-1ynih3k { width: 362px; height: 644px; cursor: pointer; }",".framer-JjsEo.framer-v-fo5qhz .framer-874pfr { width: auto; height: auto; right: auto; bottom: auto; left: 25px; top: 25px; flex: none; white-space: pre; }",".framer-JjsEo.framer-v-fo5qhz .framer-19ho8o { overflow: visible; }",".framer-JjsEo.framer-v-fo5qhz .framer-2xu1j6, .framer-JjsEo.framer-v-fo5qhz .framer-1en5eoi, .framer-JjsEo.framer-v-fo5qhz .framer-kx8dxg, .framer-JjsEo.framer-v-fo5qhz .framer-1nqtwzi { width: 299px; height: 112px; right: auto; bottom: auto; left: auto; top: auto; flex: none; aspect-ratio: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 130
 * @framerIntrinsicWidth 365
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "aqWMAXQKw": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"hkbZ5UAh4": "temperature", "mEBLoFsX5": "humidity", "pPtr2ReTX": "co2", "hMDiAomX3": "roomName", "D91SYkbEQ": "backgroundColor"}
 */ const FramerYyFSIG0j9=withCSS(Component,css);export default FramerYyFSIG0j9;FramerYyFSIG0j9.displayName="Card";FramerYyFSIG0j9.defaultProps={"width":365,"height":130};addPropertyControls(FramerYyFSIG0j9,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["o1aMl0Pml","aqWMAXQKw"],"optionTitles":["card_list","card_expand"]},"hkbZ5UAh4":{"type":ControlType.String,"title":"Temperature","defaultValue":"10","placeholder":"00","displayTextArea":false},"mEBLoFsX5":{"type":ControlType.String,"title":"Humidity","defaultValue":"50","placeholder":"00","displayTextArea":false},"pPtr2ReTX":{"type":ControlType.String,"title":"Co 2","defaultValue":"400","placeholder":"000","displayTextArea":false},"hMDiAomX3":{"type":ControlType.String,"title":"Room Name","defaultValue":"Voorkamer","displayTextArea":false},"D91SYkbEQ":{"type":ControlType.Color,"title":"Background Color","defaultValue":"rgba(56, 56, 56, 0.8)"}});addFonts(FramerYyFSIG0j9,[...SliderFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerYyFSIG0j9","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"365","framerIntrinsicHeight":"130","framerVariables":"{\"hkbZ5UAh4\": \"temperature\", \"mEBLoFsX5\": \"humidity\", \"pPtr2ReTX\": \"co2\", \"hMDiAomX3\": \"roomName\", \"D91SYkbEQ\": \"backgroundColor\"}","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"aqWMAXQKw\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./YyFSIG0j9.map