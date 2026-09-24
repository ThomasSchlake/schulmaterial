"use strict";
const $=(s,r=document)=>r.querySelector(s);

//__CFG__

const TREE=CFG.tree;
const NW=190, NH=120;
const NAME=Object.fromEntries(TREE.map(n=>[n.id,n.t]));
const done=loadDone();
function loadDone(){ try{return JSON.parse(localStorage.getItem(CFG.store))||{};}catch(e){return {};} }
function saveDone(){ try{localStorage.setItem(CFG.store,JSON.stringify(done));}catch(e){} }
function stateOf(n){ return done[n.id] ? 'done' : (n.needs.every(x=>done[x]) ? 'avail' : 'lock'); }
let selId=null;

// Lange Titel auf zwei möglichst gleich lange Zeilen aufteilen.
function wrapTitle(t){ if(t.length<=15) return [t]; const w=t.split(' '); if(w.length<2) return [t];
  let best=1, bd=1e9;
  for(let i=1;i<w.length;i++){ const a=w.slice(0,i).join(' ').length, b=w.slice(i).join(' ').length, d=Math.abs(a-b);
    if(d<bd){bd=d;best=i;} }
  return [w.slice(0,best).join(' '), w.slice(best).join(' ')]; }

const ICONS={
  // --- Klasse 8: Optik & Astronomie ---
  licht:(x,y,s)=>{ let r=''; for(let i=0;i<8;i++){ const a=i*Math.PI/4;
      r+=`<line x1="${x+Math.cos(a)*s*0.55}" y1="${y+Math.sin(a)*s*0.55}" x2="${x+Math.cos(a)*s*0.92}" y2="${y+Math.sin(a)*s*0.92}" stroke="#f5b301" stroke-width="${s*0.11}" stroke-linecap="round"/>`; }
      return `<circle cx="${x}" cy="${y}" r="${s*0.4}" fill="#f5b301"/>`+r; },
  winkel:(x,y,s)=>`<line x1="${x-0.7*s}" y1="${y+0.6*s}" x2="${x+0.78*s}" y2="${y+0.6*s}" stroke="#9aa3b5" stroke-width="${0.1*s}"/>`+
    `<line x1="${x-0.7*s}" y1="${y+0.6*s}" x2="${x+0.55*s}" y2="${y-0.55*s}" stroke="#2f6df6" stroke-width="${0.12*s}"/>`+
    `<path d="M${x-0.3*s},${y+0.6*s} A ${0.4*s} ${0.4*s} 0 0 0 ${x-0.42*s},${y+0.32*s}" fill="none" stroke="#2f6df6" stroke-width="${0.08*s}"/>`,
  reflexion:(x,y,s)=>`<line x1="${x}" y1="${y-0.72*s}" x2="${x}" y2="${y+0.72*s}" stroke="#5a6684" stroke-width="${0.14*s}"/>`+
    `<line x1="${x-0.75*s}" y1="${y-0.45*s}" x2="${x}" y2="${y-0.02*s}" stroke="#f5b301" stroke-width="${0.11*s}"/>`+
    `<line x1="${x}" y1="${y-0.02*s}" x2="${x-0.75*s}" y2="${y+0.4*s}" stroke="#f5b301" stroke-width="${0.11*s}"/>`,
  brechung:(x,y,s)=>`<rect x="${x-0.8*s}" y="${y}" width="${1.6*s}" height="${0.8*s}" fill="rgba(127,176,255,.18)"/>`+
    `<line x1="${x-0.8*s}" y1="${y}" x2="${x+0.8*s}" y2="${y}" stroke="#7fb0ff" stroke-width="${0.1*s}"/>`+
    `<line x1="${x-0.55*s}" y1="${y-0.62*s}" x2="${x}" y2="${y}" stroke="#f5b301" stroke-width="${0.11*s}"/>`+
    `<line x1="${x}" y1="${y}" x2="${x+0.32*s}" y2="${y+0.68*s}" stroke="#f5b301" stroke-width="${0.11*s}"/>`,
  farben:(x,y,s)=>`<path d="M${x-0.1*s},${y-0.62*s} L${x-0.55*s},${y+0.5*s} L${x+0.35*s},${y+0.5*s} Z" fill="none" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<line x1="${x+0.3*s}" y1="${y+0.05*s}" x2="${x+0.9*s}" y2="${y-0.2*s}" stroke="#e5533c" stroke-width="${0.09*s}"/>`+
    `<line x1="${x+0.3*s}" y1="${y+0.12*s}" x2="${x+0.9*s}" y2="${y+0.02*s}" stroke="#2fb672" stroke-width="${0.09*s}"/>`+
    `<line x1="${x+0.3*s}" y1="${y+0.19*s}" x2="${x+0.9*s}" y2="${y+0.24*s}" stroke="#2f6df6" stroke-width="${0.09*s}"/>`,
  linse:(x,y,s)=>`<path d="M${x},${y-0.62*s} Q${x+0.34*s},${y} ${x},${y+0.62*s} Q${x-0.34*s},${y} ${x},${y-0.62*s} Z" fill="rgba(47,109,246,.2)" stroke="#2f6df6" stroke-width="${0.09*s}"/>`+
    `<line x1="${x-0.9*s}" y1="${y-0.3*s}" x2="${x}" y2="${y-0.3*s}" stroke="#f5b301" stroke-width="${0.08*s}"/>`+
    `<line x1="${x}" y1="${y-0.3*s}" x2="${x+0.9*s}" y2="${y}" stroke="#f5b301" stroke-width="${0.08*s}"/>`+
    `<line x1="${x-0.9*s}" y1="${y+0.3*s}" x2="${x}" y2="${y+0.3*s}" stroke="#f5b301" stroke-width="${0.08*s}"/>`+
    `<line x1="${x}" y1="${y+0.3*s}" x2="${x+0.9*s}" y2="${y}" stroke="#f5b301" stroke-width="${0.08*s}"/>`+
    `<circle cx="${x+0.9*s}" cy="${y}" r="${0.07*s}" fill="#e5533c"/>`,
  auge:(x,y,s)=>`<path d="M${x-0.8*s},${y} Q${x},${y-0.55*s} ${x+0.8*s},${y} Q${x},${y+0.55*s} ${x-0.8*s},${y} Z" fill="#fff" stroke="#5a6684" stroke-width="${0.09*s}"/>`+
    `<circle cx="${x}" cy="${y}" r="${0.28*s}" fill="#2f6df6"/>`+
    `<circle cx="${x}" cy="${y}" r="${0.12*s}" fill="#1b2440"/>`,
  faser:(x,y,s)=>`<path d="M${x-0.8*s},${y-0.4*s} C${x-0.2*s},${y-0.62*s} ${x-0.2*s},${y+0.6*s} ${x+0.8*s},${y+0.3*s}" fill="none" stroke="#2fb672" stroke-width="${0.24*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.8*s},${y-0.4*s} C${x-0.2*s},${y-0.62*s} ${x-0.2*s},${y+0.6*s} ${x+0.8*s},${y+0.3*s}" fill="none" stroke="#eafaf1" stroke-width="${0.08*s}"/>`+
    `<circle cx="${x+0.8*s}" cy="${y+0.3*s}" r="${0.13*s}" fill="#f5b301"/>`,
  lupe:(x,y,s)=>`<circle cx="${x-0.15*s}" cy="${y-0.15*s}" r="${0.5*s}" fill="rgba(47,109,246,.12)" stroke="#2f6df6" stroke-width="${0.12*s}"/>`+
    `<line x1="${x+0.22*s}" y1="${y+0.22*s}" x2="${x+0.72*s}" y2="${y+0.72*s}" stroke="#5a6684" stroke-width="${0.18*s}" stroke-linecap="round"/>`,
  planet:(x,y,s)=>`<circle cx="${x}" cy="${y}" r="${0.5*s}" fill="#f2a521"/>`+
    `<ellipse cx="${x}" cy="${y}" rx="${0.9*s}" ry="${0.32*s}" fill="none" stroke="#7a5cf0" stroke-width="${0.09*s}" transform="rotate(-20 ${x} ${y})"/>`,
  star:(x,y,s)=>{ let p=''; for(let i=0;i<10;i++){ const a=-Math.PI/2+i*Math.PI/5, rr=i%2?0.34*s:0.82*s; p+=(i?'L':'M')+(x+Math.cos(a)*rr)+','+(y+Math.sin(a)*rr); } return `<path d="${p} Z" fill="#f5b301"/>`; },
  spektro:(x,y,s)=>{ const cols=['#e5533c','#f2a521','#f5d000','#2fb672','#2f6df6','#7a5cf0'], w=1.5*s/cols.length, x0=x-0.75*s; let b='';
      cols.forEach((c,i)=>{ b+=`<rect x="${x0+i*w}" y="${y-0.5*s}" width="${w+0.6}" height="${1.0*s}" fill="${c}"/>`; });
      b+=`<rect x="${x-0.28*s}" y="${y-0.5*s}" width="${0.05*s}" height="${1.0*s}" fill="#1b2440"/>`;
      b+=`<rect x="${x+0.16*s}" y="${y-0.5*s}" width="${0.05*s}" height="${1.0*s}" fill="#1b2440"/>`;
      return b; },
  // --- Klasse 9: Mechanik, Druck, Elektrizität ---
  tacho:(x,y,s)=>`<path d="M${x-0.75*s},${y+0.35*s} A ${0.8*s} ${0.8*s} 0 1 1 ${x+0.75*s},${y+0.35*s}" fill="none" stroke="#5a6684" stroke-width="${0.12*s}"/>`+
    `<line x1="${x}" y1="${y+0.3*s}" x2="${x+0.42*s}" y2="${y-0.35*s}" stroke="#e5533c" stroke-width="${0.12*s}" stroke-linecap="round"/>`+
    `<circle cx="${x}" cy="${y+0.3*s}" r="${0.1*s}" fill="#1b2440"/>`,
  beschl:(x,y,s)=>`<line x1="${x-0.5*s}" y1="${y}" x2="${x+0.45*s}" y2="${y}" stroke="#2f6df6" stroke-width="${0.16*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.32*s},${y-0.28*s} L${x+0.78*s},${y} L${x+0.32*s},${y+0.28*s} Z" fill="#2f6df6"/>`+
    `<line x1="${x-0.88*s}" y1="${y-0.26*s}" x2="${x-0.58*s}" y2="${y-0.26*s}" stroke="#9aa3b5" stroke-width="${0.08*s}" stroke-linecap="round"/>`+
    `<line x1="${x-0.88*s}" y1="${y+0.26*s}" x2="${x-0.58*s}" y2="${y+0.26*s}" stroke="#9aa3b5" stroke-width="${0.08*s}" stroke-linecap="round"/>`,
  kraft:(x,y,s)=>`<rect x="${x-0.05*s}" y="${y-0.35*s}" width="${0.68*s}" height="${0.7*s}" rx="${0.08*s}" fill="rgba(90,102,132,.18)" stroke="#5a6684" stroke-width="${0.09*s}"/>`+
    `<line x1="${x-0.85*s}" y1="${y}" x2="${x-0.15*s}" y2="${y}" stroke="#e5533c" stroke-width="${0.14*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.32*s},${y-0.2*s} L${x-0.08*s},${y} L${x-0.32*s},${y+0.2*s} Z" fill="#e5533c"/>`,
  kraefte:(x,y,s)=>{ const ox=x-0.55*s, oy=y+0.5*s;
      const arr=(x2,y2,col,w)=>`<line x1="${ox}" y1="${oy}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="${w*s}" stroke-linecap="round"/><circle cx="${x2}" cy="${y2}" r="${0.09*s}" fill="${col}"/>`;
      return `<line x1="${x+0.6*s}" y1="${oy}" x2="${x+0.15*s}" y2="${y-0.55*s}" stroke="#c4cbdb" stroke-width="${0.05*s}" stroke-dasharray="${0.08*s},${0.07*s}"/>`+
        `<line x1="${x-0.1*s}" y1="${y-0.55*s}" x2="${x+0.15*s}" y2="${y-0.55*s}" stroke="#c4cbdb" stroke-width="${0.05*s}" stroke-dasharray="${0.08*s},${0.07*s}"/>`+
        arr(x+0.6*s, oy, '#2f6df6', 0.11) + arr(x-0.1*s, y-0.55*s, '#e5533c', 0.11) + arr(x+0.15*s, y-0.55*s, '#7a5cf0', 0.12); },
  hebel:(x,y,s)=>`<line x1="${x-0.85*s}" y1="${y-0.15*s}" x2="${x+0.85*s}" y2="${y+0.3*s}" stroke="#8a5a2b" stroke-width="${0.13*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.15*s},${y+0.5*s} L${x+0.15*s},${y+0.5*s} L${x},${y+0.12*s} Z" fill="#5a6684"/>`+
    `<rect x="${x-0.85*s}" y="${y-0.5*s}" width="${0.32*s}" height="${0.32*s}" rx="${0.04*s}" fill="#e5533c"/>`,
  energie:(x,y,s)=>`<path d="M${x-0.82*s},${y+0.5*s} Q${x-0.35*s},${y-0.6*s} ${x+0.15*s},${y+0.08*s} T${x+0.85*s},${y+0.5*s}" fill="none" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<circle cx="${x-0.5*s}" cy="${y-0.3*s}" r="${0.16*s}" fill="#f5b301"/>`,
  leistung:(x,y,s)=>`<circle cx="${x}" cy="${y+0.12*s}" r="${0.55*s}" fill="#fff" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<line x1="${x}" y1="${y-0.58*s}" x2="${x}" y2="${y-0.42*s}" stroke="#5a6684" stroke-width="${0.13*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.08*s},${y-0.18*s} L${x-0.16*s},${y+0.16*s} L${x+0.0*s},${y+0.16*s} L${x-0.08*s},${y+0.46*s} L${x+0.2*s},${y+0.02*s} L${x+0.02*s},${y+0.02*s} Z" fill="#f5b301"/>`,
  druck:(x,y,s)=>`<rect x="${x-0.72*s}" y="${y+0.36*s}" width="${1.44*s}" height="${0.2*s}" fill="#5a6684"/>`+
    `<line x1="${x}" y1="${y-0.6*s}" x2="${x}" y2="${y+0.26*s}" stroke="#e5533c" stroke-width="${0.14*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.22*s},${y+0.06*s} L${x},${y+0.32*s} L${x+0.22*s},${y+0.06*s} Z" fill="#e5533c"/>`,
  auftrieb:(x,y,s)=>`<rect x="${x-0.28*s}" y="${y-0.58*s}" width="${0.56*s}" height="${0.5*s}" rx="${0.05*s}" fill="#8a5a2b"/>`+
    `<path d="M${x-0.85*s},${y+0.18*s} q${0.21*s},${-0.18*s} ${0.42*s},0 t${0.42*s},0 t${0.42*s},0 t${0.42*s},0" fill="none" stroke="#2f6df6" stroke-width="${0.08*s}"/>`+
    `<line x1="${x+0.58*s}" y1="${y+0.52*s}" x2="${x+0.58*s}" y2="${y-0.18*s}" stroke="#2fb672" stroke-width="${0.11*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.43*s},${y+0.02*s} L${x+0.58*s},${y-0.2*s} L${x+0.73*s},${y+0.02*s} Z" fill="#2fb672"/>`,
  ladung:(x,y,s)=>`<circle cx="${x-0.4*s}" cy="${y}" r="${0.38*s}" fill="#e5533c"/>`+
    `<path d="M${x-0.4*s},${y-0.18*s} v${0.36*s} M${x-0.58*s},${y} h${0.36*s}" stroke="#fff" stroke-width="${0.09*s}" stroke-linecap="round"/>`+
    `<circle cx="${x+0.4*s}" cy="${y}" r="${0.38*s}" fill="#2f6df6"/>`+
    `<path d="M${x+0.22*s},${y} h${0.36*s}" stroke="#fff" stroke-width="${0.09*s}" stroke-linecap="round"/>`,
  stromkreis:(x,y,s)=>`<rect x="${x-0.62*s}" y="${y-0.45*s}" width="${1.24*s}" height="${0.9*s}" rx="${0.1*s}" fill="none" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<circle cx="${x+0.62*s}" cy="${y-0.05*s}" r="${0.1*s}" fill="#2f6df6"/>`+
    `<circle cx="${x-0.2*s}" cy="${y-0.45*s}" r="${0.1*s}" fill="#2f6df6"/>`+
    `<circle cx="${x-0.62*s}" cy="${y+0.25*s}" r="${0.1*s}" fill="#2f6df6"/>`,
  widerstand:(x,y,s)=>`<line x1="${x-0.85*s}" y1="${y}" x2="${x-0.45*s}" y2="${y}" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<rect x="${x-0.45*s}" y="${y-0.28*s}" width="${0.9*s}" height="${0.56*s}" rx="${0.04*s}" fill="#fff" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<line x1="${x+0.45*s}" y1="${y}" x2="${x+0.85*s}" y2="${y}" stroke="#5a6684" stroke-width="${0.1*s}"/>`,
  traegheit:(x,y,s)=>`<rect x="${x-0.55*s}" y="${y-0.3*s}" width="${0.6*s}" height="${0.6*s}" rx="${0.06*s}" fill="rgba(90,102,132,.18)" stroke="#5a6684" stroke-width="${0.09*s}"/>`+
    `<line x1="${x+0.12*s}" y1="${y}" x2="${x+0.8*s}" y2="${y}" stroke="#2f6df6" stroke-width="${0.12*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.6*s},${y-0.16*s} L${x+0.85*s},${y} L${x+0.6*s},${y+0.16*s} Z" fill="#2f6df6"/>`,
  wechsel:(x,y,s)=>`<rect x="${x-0.62*s}" y="${y-0.28*s}" width="${0.5*s}" height="${0.56*s}" rx="${0.05*s}" fill="rgba(90,102,132,.18)" stroke="#5a6684" stroke-width="${0.08*s}"/>`+
    `<rect x="${x+0.12*s}" y="${y-0.28*s}" width="${0.5*s}" height="${0.56*s}" rx="${0.05*s}" fill="rgba(90,102,132,.18)" stroke="#5a6684" stroke-width="${0.08*s}"/>`+
    `<line x1="${x-0.15*s}" y1="${y}" x2="${x-0.55*s}" y2="${y}" stroke="#e5533c" stroke-width="${0.1*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.45*s},${y-0.13*s} L${x-0.62*s},${y} L${x-0.45*s},${y+0.13*s} Z" fill="#e5533c"/>`+
    `<line x1="${x+0.15*s}" y1="${y}" x2="${x+0.55*s}" y2="${y}" stroke="#e5533c" stroke-width="${0.1*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.45*s},${y-0.13*s} L${x+0.62*s},${y} L${x+0.45*s},${y+0.13*s} Z" fill="#e5533c"/>`,
  alltag:(x,y,s)=>`<circle cx="${x}" cy="${y}" r="${0.6*s}" fill="#fff" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<path d="M${x+0.2*s},${y-0.24*s} a ${0.3*s} ${0.3*s} 0 1 0 0 ${0.48*s}" fill="none" stroke="#1f7a34" stroke-width="${0.1*s}"/>`+
    `<line x1="${x-0.3*s}" y1="${y-0.07*s}" x2="${x+0.1*s}" y2="${y-0.07*s}" stroke="#1f7a34" stroke-width="${0.09*s}" stroke-linecap="round"/>`+
    `<line x1="${x-0.3*s}" y1="${y+0.09*s}" x2="${x+0.04*s}" y2="${y+0.09*s}" stroke="#1f7a34" stroke-width="${0.09*s}" stroke-linecap="round"/>`,
  // --- Klasse 10: Elektromagnetismus ---
  magnet:(x,y,s)=>`<path d="M${x-0.45*s},${y-0.55*s} v${0.7*s} a ${0.45*s} ${0.45*s} 0 0 0 ${0.9*s} 0 v${-0.7*s} h${-0.28*s} v${0.7*s} a ${0.17*s} ${0.17*s} 0 0 1 ${-0.34*s} 0 v${-0.7*s} Z" fill="#e5533c" stroke="#b23a26" stroke-width="${0.04*s}"/>`+
    `<rect x="${x-0.45*s}" y="${y-0.55*s}" width="${0.28*s}" height="${0.22*s}" fill="#2f6df6"/>`+
    `<rect x="${x+0.17*s}" y="${y-0.55*s}" width="${0.28*s}" height="${0.22*s}" fill="#2f6df6"/>`,
  spule:(x,y,s)=>{ let p=`M${x-0.8*s},${y}`; for(let i=0;i<4;i++){ const cx=x-0.6*s+i*0.4*s; p+=` a ${0.2*s} ${0.32*s} 0 1 1 ${0.4*s} 0`; } return `<path d="${p}" fill="none" stroke="#5a6684" stroke-width="${0.1*s}"/>`; },
  induktion:(x,y,s)=>`<ellipse cx="${x-0.15*s}" cy="${y}" rx="${0.3*s}" ry="${0.6*s}" fill="none" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<line x1="${x-0.15*s}" y1="${y-0.75*s}" x2="${x-0.15*s}" y2="${y+0.75*s}" stroke="#e5533c" stroke-width="${0.1*s}"/>`+
    `<path d="M${x-0.15*s},${y-0.75*s} l${-0.1*s},${0.18*s} m${0.1*s},${-0.18*s} l${0.1*s},${0.18*s}" stroke="#e5533c" stroke-width="${0.09*s}" fill="none"/>`+
    `<path d="M${x+0.5*s},${y-0.3*s} a ${0.35*s} ${0.35*s} 0 1 0 ${0.02*s} 0" fill="none" stroke="#2f6df6" stroke-width="${0.09*s}"/>`,
  generator:(x,y,s)=>`<circle cx="${x}" cy="${y}" r="${0.6*s}" fill="#fff" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<path d="M${x-0.32*s},${y+0.1*s} q${0.16*s},${-0.4*s} ${0.32*s},0 q${0.16*s},${0.4*s} ${0.32*s},0" fill="none" stroke="#1b2440" stroke-width="${0.09*s}"/>`,
  kraftwerk:(x,y,s)=>`<rect x="${x-0.6*s}" y="${y-0.1*s}" width="${1.2*s}" height="${0.65*s}" fill="#c3ccdd" stroke="#5a6684" stroke-width="${0.06*s}"/>`+
    `<rect x="${x-0.4*s}" y="${y-0.55*s}" width="${0.22*s}" height="${0.5*s}" fill="#8a94a8"/>`+
    `<rect x="${x+0.02*s}" y="${y-0.7*s}" width="${0.22*s}" height="${0.65*s}" fill="#8a94a8"/>`+
    `<path d="M${x-0.29*s},${y-0.6*s} q${-0.12*s},${-0.15*s} 0,${-0.3*s}" fill="none" stroke="#9aa3b5" stroke-width="${0.06*s}"/>`,
  motor:(x,y,s)=>`<circle cx="${x}" cy="${y}" r="${0.6*s}" fill="#fff" stroke="#5a6684" stroke-width="${0.1*s}"/>`+
    `<text x="${x}" y="${y+0.02*s}" font-size="${0.7*s}" text-anchor="middle" dominant-baseline="central" font-weight="800" fill="#1b2440">M</text>`,
  lorentz:(x,y,s)=>`<line x1="${x-0.6*s}" y1="${y+0.5*s}" x2="${x-0.6*s}" y2="${y-0.5*s}" stroke="#1b2440" stroke-width="${0.11*s}" stroke-linecap="round"/>`+
    `<path d="M${x-0.6*s},${y-0.5*s} l${-0.12*s},${0.2*s} m${0.12*s},${-0.2*s} l${0.12*s},${0.2*s}" stroke="#1b2440" stroke-width="${0.09*s}" fill="none"/>`+
    `<line x1="${x-0.6*s}" y1="${y}" x2="${x+0.5*s}" y2="${y}" stroke="#e5533c" stroke-width="${0.11*s}" stroke-linecap="round"/>`+
    `<path d="M${x+0.5*s},${y} l${-0.2*s},${-0.12*s} m${0.2*s},${0.12*s} l${-0.2*s},${0.12*s}" stroke="#e5533c" stroke-width="${0.09*s}" fill="none"/>`+
    `<circle cx="${x+0.1*s}" cy="${y-0.4*s}" r="${0.12*s}" fill="none" stroke="#2f6df6" stroke-width="${0.08*s}"/><circle cx="${x+0.1*s}" cy="${y-0.4*s}" r="${0.03*s}" fill="#2f6df6"/>`,
  atom:(x,y,s)=>`<circle cx="${x}" cy="${y}" r="${0.14*s}" fill="#e5533c"/>`+
    `<ellipse cx="${x}" cy="${y}" rx="${0.7*s}" ry="${0.28*s}" fill="none" stroke="#5a6684" stroke-width="${0.06*s}"/>`+
    `<ellipse cx="${x}" cy="${y}" rx="${0.7*s}" ry="${0.28*s}" fill="none" stroke="#5a6684" stroke-width="${0.06*s}" transform="rotate(60 ${x} ${y})"/>`+
    `<ellipse cx="${x}" cy="${y}" rx="${0.7*s}" ry="${0.28*s}" fill="none" stroke="#5a6684" stroke-width="${0.06*s}" transform="rotate(120 ${x} ${y})"/>`,
  trafo:(x,y,s)=>`<rect x="${x-0.62*s}" y="${y-0.4*s}" width="${0.3*s}" height="${0.8*s}" rx="${0.05*s}" fill="none" stroke="#e5533c" stroke-width="${0.09*s}"/>`+
    `<rect x="${x+0.32*s}" y="${y-0.4*s}" width="${0.3*s}" height="${0.8*s}" rx="${0.05*s}" fill="none" stroke="#2f6df6" stroke-width="${0.09*s}"/>`+
    `<line x1="${x-0.1*s}" y1="${y-0.55*s}" x2="${x-0.1*s}" y2="${y+0.55*s}" stroke="#5a6684" stroke-width="${0.07*s}"/>`+
    `<line x1="${x+0.1*s}" y1="${y-0.55*s}" x2="${x+0.1*s}" y2="${y+0.55*s}" stroke="#5a6684" stroke-width="${0.07*s}"/>`,
  strahlung:(x,y,s)=>{ let w=''; for(let k=0;k<3;k++){ const a=(-90+k*120)*Math.PI/180;
      const p1x=x+Math.cos(a-0.42)*0.72*s, p1y=y+Math.sin(a-0.42)*0.72*s, p2x=x+Math.cos(a+0.42)*0.72*s, p2y=y+Math.sin(a+0.42)*0.72*s;
      w+=`<path d="M${x},${y} L${p1x},${p1y} L${p2x},${p2y} Z" fill="#f2a521"/>`; }
    return w+`<circle cx="${x}" cy="${y}" r="${0.18*s}" fill="#1b2440"/>`; },
  kern:(x,y,s)=>`<circle cx="${x-0.26*s}" cy="${y}" r="${0.3*s}" fill="#e5533c"/><circle cx="${x+0.26*s}" cy="${y}" r="${0.3*s}" fill="#e5533c"/>`+
    `<circle cx="${x-0.78*s}" cy="${y-0.42*s}" r="${0.09*s}" fill="#2f6df6"/>`+
    `<circle cx="${x+0.78*s}" cy="${y+0.42*s}" r="${0.09*s}" fill="#2f6df6"/>`+
    `<circle cx="${x+0.72*s}" cy="${y-0.5*s}" r="${0.09*s}" fill="#2f6df6"/>`,
  nachhaltig:(x,y,s)=>`<path d="M${x-0.5*s},${y+0.5*s} C${x-0.55*s},${y-0.35*s} ${x+0.25*s},${y-0.62*s} ${x+0.55*s},${y-0.5*s} C${x+0.5*s},${y+0.3*s} ${x-0.2*s},${y+0.58*s} ${x-0.5*s},${y+0.5*s} Z" fill="#2fb672"/>`+
    `<path d="M${x-0.42*s},${y+0.42*s} C${x-0.1*s},${y+0.1*s} ${x+0.2*s},${y-0.12*s} ${x+0.46*s},${y-0.42*s}" fill="none" stroke="#eafaf1" stroke-width="${0.06*s}"/>`
};
function icon(key,x,y,s){ return ICONS[key]?ICONS[key](x,y,s):''; }

function badge(st,cx,cy){
  if(st==='done') return `<circle cx="${cx}" cy="${cy}" r="13" fill="#25b071"/>`+
    `<path d="M${cx-6},${cy} l4,4 l7,-8" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`;
  if(st==='avail') return `<circle cx="${cx}" cy="${cy}" r="13" fill="#2f6df6"/>`+
    `<path d="M${cx-6},${cy} h12 M${cx},${cy-6} v12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>`;
  return `<rect x="${cx-8}" y="${cy-2}" width="16" height="12" rx="2.5" fill="#9aa3b5"/>`+
    `<path d="M${cx-4.5},${cy-2} v-3 a4.5 4.5 0 0 1 9 0 v3" fill="none" stroke="#9aa3b5" stroke-width="2.4"/>`;
}

function addTap(el, fn){
  let sx=0, sy=0, moved=false;
  el.addEventListener('pointerdown', e=>{ sx=e.clientX; sy=e.clientY; moved=false; });
  el.addEventListener('pointermove', e=>{ if(Math.abs(e.clientX-sx)>12||Math.abs(e.clientY-sy)>12) moved=true; });
  el.addEventListener('pointerup', e=>{ if(!moved) fn(e); });
}

// Zwei-Finger-Zoom und (bei Zoom) Verschieben über das viewBox. Doppeltipp setzt zurück.
function enableZoom(svg){
  const a=svg.getAttribute('viewBox').split(/\s+/).map(Number), base={x:a[0],y:a[1],w:a[2],h:a[3]};
  let vb={...base}; const set=()=>svg.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.h);
  const R=()=>svg.getBoundingClientRect();
  const toS=(cx,cy)=>{ const r=R(); return {x:vb.x+(cx-r.left)/r.width*vb.w, y:vb.y+(cy-r.top)/r.height*vb.h}; };
  const pts=new Map(); let lastD=0, lastMid=null, lastPan=null, lastTap=0;
  svg.addEventListener('pointerdown',e=>{ pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pts.size===1) lastPan={x:e.clientX,y:e.clientY}; lastD=0; lastMid=null;
    const now=Date.now(); if(now-lastTap<300 && pts.size===1){ vb={...base}; set(); } lastTap=now; });
  svg.addEventListener('pointermove',e=>{ if(!pts.has(e.pointerId)) return; pts.set(e.pointerId,{x:e.clientX,y:e.clientY});
    const arr=[...pts.values()];
    if(arr.length>=2){ const p=arr[0],q=arr[1], d=Math.hypot(p.x-q.x,p.y-q.y), mid={x:(p.x+q.x)/2,y:(p.y+q.y)/2};
      if(lastD){ const s=toS(mid.x,mid.y); let nw=vb.w*(lastD/d);
        nw=Math.min(base.w, Math.max(base.w*0.25, nw)); const nh=nw*(base.h/base.w), r=R();
        vb.x=s.x-(mid.x-r.left)/r.width*nw; vb.y=s.y-(mid.y-r.top)/r.height*nh; vb.w=nw; vb.h=nh;
        if(lastMid){ vb.x-=(mid.x-lastMid.x)/r.width*vb.w; vb.y-=(mid.y-lastMid.y)/r.height*vb.h; } set(); }
      lastD=d; lastMid=mid; lastPan=null; }
    else if(arr.length===1 && lastPan && vb.w<base.w-1){ const r=R();
      vb.x-=(e.clientX-lastPan.x)/r.width*vb.w; vb.y-=(e.clientY-lastPan.y)/r.height*vb.h;
      lastPan={x:e.clientX,y:e.clientY}; set(); } });
  const up=e=>{ pts.delete(e.pointerId); if(pts.size<2){ lastD=0; lastMid=null; }
    lastPan=pts.size===1?[...pts.values()][0]:null; };
  svg.addEventListener('pointerup',up); svg.addEventListener('pointercancel',up);
}

// Der Kopf sitzt im Flex-Layout und wird nicht skaliert; der Graph füllt den Rest.
function fitHead(){ const fit=document.querySelector('.head .head-fit'); if(fit) fit.style.transform='none'; }

function buildTree(){
  const svg=$('#tree');
  let edges='';
  TREE.forEach(n=> n.needs.forEach(src=>{
    const s=TREE.find(m=>m.id===src);
    const x1=s.x+NW, y1=s.y+NH/2, x2=n.x, y2=n.y+NH/2, mx=(x1+x2)/2;
    edges+=`<path class="edge ${done[src]?'active':''}" marker-end="url(#tri)" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}"/>`;
  }));
  let nodes='';
  TREE.forEach(n=>{
    const st=stateOf(n), cx=n.x+NW/2, bx=n.x+NW-22, by=n.y+22;
    const lines=wrapTitle(n.t);
    const ty0 = lines.length>1 ? n.y+NH-32 : n.y+NH-20;
    let tsvg=''; lines.forEach((ln,li)=> tsvg+=`<text class="t" x="${cx}" y="${ty0+li*19}" text-anchor="middle" font-size="16">${ln}</text>`);
    nodes+=`<g class="node ${st}${selId===n.id?' sel':''}" data-id="${n.id}">
      <rect class="box" x="${n.x}" y="${n.y}" width="${NW}" height="${NH}" rx="16" ry="16"/>
      <text class="tag" x="${n.x+14}" y="${n.y+24}">${n.tag}</text>
      ${icon(n.icon, cx, n.y+58, 20)}
      ${tsvg}
      <g class="badgehit" data-badge="${n.id}"><circle cx="${bx}" cy="${by}" r="20" fill="#fff" fill-opacity="0" pointer-events="all"/>${badge(st,bx,by)}</g>
    </g>`;
  });
  svg.innerHTML=`<defs><marker id="tri" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="12" refY="7" orient="auto">`+
    `<path d="M0,0 L12,7 L0,14 Z" fill="#7fa8ff"/></marker></defs>${edges}${nodes}`;
  svg.querySelectorAll('.node').forEach(g=>addTap(g, ()=>showDetail(g.dataset.id)));
  svg.querySelectorAll('[data-badge]').forEach(b=>addTap(b, e=>{ e.stopPropagation(); toggle(b.getAttribute('data-badge')); }));
  updateProgress();
}

function shake(id){ const g=$('#tree').querySelector('[data-id="'+id+'"]');
  if(g){ g.classList.add('shake'); setTimeout(()=>g.classList.remove('shake'),350); } }

function showDetail(id){
  selId=id;
  const n=TREE.find(m=>m.id===id), st=stateOf(n), d=$('#rm-detail'); if(!d) return;
  const big=`<svg viewBox="0 0 100 100" class="det-icon" aria-hidden="true">${icon(n.icon,50,50,32)}</svg>`;
  const subs=n.sub.map(s=>`<li>${s}</li>`).join('');
  let status;
  if(st==='done') status='<span class="pop-tag done">geschafft</span>';
  else if(st==='avail') status='<span class="pop-tag avail">jetzt möglich</span>';
  else { const miss=n.needs.filter(x=>!done[x]).map(x=>NAME[x]).join(', ');
    status='<span class="pop-tag lock">gesperrt</span> &nbsp;Erst nötig: '+miss; }
  d.innerHTML=big+`<div class="det-main"><div class="tag">${n.tag}</div><h3>${n.t}</h3>`+
    `<div class="pop-status">${status}</div><ul>${subs}</ul></div>`;
  buildTree(); fitHead();
}

function showIntro(){
  selId=null;
  const d=$('#rm-detail'); if(!d) return;
  d.innerHTML=`<div class="det-intro"><h3>${CFG.intro.h3}</h3><p>${CFG.intro.text}</p></div>`;
  buildTree(); fitHead();
}

function toggle(id){
  const n=TREE.find(m=>m.id===id), st=stateOf(n);
  if(st==='lock'){ shake(id); return; }
  if(done[id]){
    delete done[id];
    let ch=true; while(ch){ ch=false;
      TREE.forEach(m=>{ if(done[m.id] && !m.needs.every(x=>done[x])){ delete done[m.id]; ch=true; } }); }
  } else { done[id]=true; }
  saveDone();
  if(selId) showDetail(selId); else buildTree();
}
function updateProgress(){
  $('#prog-num').textContent=TREE.filter(m=>done[m.id]).length;
  $('#prog-tot').textContent=TREE.length;
}

document.title=CFG.title;
$('#tree').setAttribute('viewBox', CFG.viewBox);
$('#tree').setAttribute('aria-label', CFG.title);
showIntro();
addTap($('#tree'), e=>{ if(!e.target.closest('.node')) showIntro(); });
enableZoom($('#tree'));
fitHead();
window.addEventListener('resize', fitHead);
