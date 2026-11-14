// Lokasi: src/components/CharacterSprite.jsx
import React from 'react';

export default function CharacterSprite({ character = {}, size = 96, expression }) {
  if (!character) return null;

  const {
    gender = 'girl',
    hairstyle = gender === 'girl' ? 'long' : 'textured',
    hairColor = 'black',
    outfit = 'formal',
    accessory = 'none',
    expression: savedExpression = 'happy'
  } = character;

  const activeExpression = expression || savedExpression;

  // Palet warna rambut dengan outline gelap, warna utama, bayangan, dan kilau
  const hairPalettes = {
    black: { outline: '#1A181B', main: '#2B292D', shadow: '#1F1D21', highlight: '#48454D' },
    darkbrown: { outline: '#24150E', main: '#4E3122', shadow: '#382217', highlight: '#734B36' },
    ashbrown: { outline: '#2E2A25', main: '#7B7062', shadow: '#5C5348', highlight: '#9E9180' }
  };
  const h = hairPalettes[hairColor] || hairPalettes.black;

  // Palet kulit lembut ala referensi chibi
  const skin = {
    outline: '#8C6258',
    base: '#FFE8DC',
    shadow: '#F5CBBF',
    blush: '#FF9EAA'
  };

  // Palet pakaian korporat 4SHO COMPANY
  const outfitStyles = {
    formal: { outline: '#152238', top: '#243D69', inner: '#FFFFFF', bottom: '#1E293B', accent: '#739BCB' },
    semiformal: { outline: '#243D69', top: '#F5F1E8', inner: '#FFFFFF', bottom: '#2B292D', accent: '#739BCB' },
    casual: { outline: '#1E293B', top: '#2B292D', inner: '#C6D9F1', bottom: '#94A3B8', accent: '#FFFFFF' }
  };
  const o = outfitStyles[outfit] || outfitStyles.formal;

  return (
    <div style={{ ...styles.wrapper, width: size, height: size }}>
      <div style={styles.bobbing}>
        <svg
          viewBox="0 0 48 64"
          width="100%"
          height="100%"
          shapeRendering="crispEdges"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* ================= LAYER 1: BAYANGAN LANTAI ================= */}
          <rect x="16" y="60" width="16" height="2" fill="rgba(36, 61, 105, 0.15)" />

          {/* ================= LAYER 2: BACK HAIR (RAMBUT BELAKANG) ================= */}
          {gender === 'girl' && hairstyle === 'long' && (
            <g>
              {/* Outline belakang */}
              <rect x="10" y="12" width="28" height="36" fill={h.outline} />
              <rect x="9" y="16" width="30" height="30" fill={h.outline} />
              <rect x="8" y="24" width="32" height="20" fill={h.outline} />
              {/* Isi rambut panjang menjuntai melewati bahu */}
              <rect x="11" y="13" width="26" height="34" fill={h.main} />
              <rect x="10" y="17" width="28" height="28" fill={h.main} />
              <rect x="9" y="25" width="30" height="18" fill={h.shadow} />
              {/* Ujung helaian bawah */}
              <rect x="10" y="45" width="4" height="3" fill={h.main} />
              <rect x="34" y="45" width="4" height="3" fill={h.main} />
            </g>
          )}

          {gender === 'girl' && (hairstyle === 'short' || hairstyle === 'bob') && (
            <g>
              <rect x="11" y="12" width="26" height="24" fill={h.outline} />
              <rect x="10" y="16" width="28" height="18" fill={h.outline} />
              <rect x="12" y="13" width="24" height="22" fill={h.shadow} />
              <rect x="11" y="17" width="26" height="16" fill={h.main} />
            </g>
          )}

          {/* ================= LAYER 3: BASE BODY, LEGS & SHOES ================= */}
          <g>
            {/* Leher */}
            <rect x="21" y="32" width="6" height="4" fill={skin.shadow} />
            
            {/* Lengan & Tangan Chibi */}
            <rect x="13" y="36" width="4" height="11" fill={skin.outline} />
            <rect x="31" y="36" width="4" height="11" fill={skin.outline} />
            <rect x="14" y="37" width="2" height="9" fill={skin.base} />
            <rect x="32" y="37" width="2" height="9" fill={skin.base} />

            {/* Kaki & Kaus Kaki / Sepatu */}
            {gender === 'girl' ? (
              <>
                {/* Paha/Kaki */}
                <rect x="17" y="48" width="5" height="6" fill={skin.outline} />
                <rect x="26" y="48" width="5" height="6" fill={skin.outline} />
                <rect x="18" y="48" width="3" height="6" fill={skin.base} />
                <rect x="27" y="48" width="3" height="6" fill={skin.base} />
                {/* Kaus Kaki Putih */}
                <rect x="17" y="53" width="5" height="4" fill="#CBD5E1" />
                <rect x="26" y="53" width="5" height="4" fill="#CBD5E1" />
                <rect x="18" y="53" width="3" height="4" fill="#FFFFFF" />
                <rect x="27" y="53" width="3" height="4" fill="#FFFFFF" />
                {/* Sepatu Mary Jane Navy */}
                <rect x="16" y="57" width="6" height="4" fill="#152238" />
                <rect x="26" y="57" width="6" height="4" fill="#152238" />
                <rect x="17" y="58" width="4" height="2" fill="#243D69" />
                <rect x="27" y="58" width="4" height="2" fill="#243D69" />
                <rect x="18" y="57" width="2" height="1" fill="#FFFFFF" />
                <rect x="28" y="57" width="2" height="1" fill="#FFFFFF" />
              </>
            ) : (
              <>
                {/* Sepatu Pantofel / Sneakers Laki-laki */}
                <rect x="16" y="56" width="6" height="5" fill="#111827" />
                <rect x="26" y="56" width="6" height="5" fill="#111827" />
                <rect x="17" y="57" width="4" height="3" fill="#2B292D" />
                <rect x="27" y="57" width="4" height="3" fill="#2B292D" />
                <rect x="18" y="57" width="2" height="1" fill="#94A3B8" />
                <rect x="28" y="57" width="2" height="1" fill="#94A3B8" />
              </>
            )}
          </g>

          {/* ================= LAYER 4: OUTFIT (PAKAIAN FULL-BODY) ================= */}
          <g>
            {/* Lengan Pakaian Atas */}
            <rect x="13" y="36" width="4" height="6" fill={o.outline} />
            <rect x="31" y="36" width="4" height="6" fill={o.outline} />
            <rect x="14" y="37" width="2" height="4" fill={o.top} />
            <rect x="32" y="37" width="2" height="4" fill={o.top} />

            {/* Badan / Torso */}
            <rect x="16" y="35" width="16" height="12" fill={o.outline} />
            <rect x="17" y="36" width="14" height="10" fill={o.top} />

            {/* Detail Kerah & Inner */}
            {outfit === 'formal' && (
              <>
                <rect x="21" y="36" width="6" height="7" fill={o.inner} />
                <rect x="23" y="37" width="2" height="6" fill={o.accent} />
                <rect x="20" y="36" width="1" height="5" fill="#152238" />
                <rect x="27" y="36" width="1" height="5" fill="#152238" />
              </>
            )}

            {outfit === 'semiformal' && (
              <>
                <rect x="20" y="36" width="8" height="4" fill={o.inner} />
                <rect x="23" y="40" width="2" height="5" fill={o.accent} />
                <rect x="23" y="41" width="1" height="1" fill="#243D69" />
                <rect x="23" y="43" width="1" height="1" fill="#243D69" />
              </>
            )}

            {outfit === 'casual' && (
              <>
                <rect x="20" y="36" width="8" height="2" fill={o.inner} />
                <rect x="17" y="44" width="14" height="2" fill={o.accent} />
              </>
            )}

            {/* Bawahan: Rok untuk Girl / Celana Panjang untuk Boy */}
            {gender === 'girl' ? (
              <>
                <rect x="16" y="45" width="16" height="5" fill={o.outline} />
                <rect x="17" y="46" width="14" height="3" fill={o.bottom} />
                {/* Lipatan Rok */}
                <rect x="21" y="46" width="1" height="3" fill="#0F172A" />
                <rect x="26" y="46" width="1" height="3" fill="#0F172A" />
              </>
            ) : (
              <>
                <rect x="16" y="45" width="16" height="12" fill={o.outline} />
                <rect x="17" y="46" width="6" height="10" fill={o.bottom} />
                <rect x="25" y="46" width="6" height="10" fill={o.bottom} />
                <rect x="23" y="46" width="2" height="3" fill={o.bottom} />
              </>
            )}
          </g>

          {/* ================= LAYER 5: HEAD & FACE (KEPALA CHIBI) ================= */}
          <g>
            {/* Outline Kepala */}
            <rect x="14" y="11" width="20" height="22" fill={skin.outline} />
            <rect x="12" y="14" width="24" height="17" fill={skin.outline} />
            <rect x="16" y="32" width="16" height="2" fill={skin.outline} />
            {/* Telinga */}
            <rect x="11" y="22" width="2" height="4" fill={skin.outline} />
            <rect x="35" y="22" width="2" height="4" fill={skin.outline} />
            <rect x="12" y="23" width="1" height="2" fill={skin.base} />
            <rect x="35" y="23" width="1" height="2" fill={skin.base} />

            {/* Isi Wajah */}
            <rect x="15" y="12" width="18" height="20" fill={skin.base} />
            <rect x="13" y="15" width="22" height="15" fill={skin.base} />
            <rect x="17" y="31" width="14" height="2" fill={skin.base} />
            {/* Shading Dagu */}
            <rect x="18" y="32" width="12" height="1" fill={skin.shadow} />

            {/* Pipi Merona (Blush) */}
            <rect x="14" y="26" width="4" height="2" fill={skin.blush} opacity="0.7" />
            <rect x="30" y="26" width="4" height="2" fill={skin.blush} opacity="0.7" />

            {/* MATA & EKSPRESI */}
            {activeExpression === 'happy' && (
              <>
                {/* Mata Kiri */}
                <rect x="16" y="21" width="4" height="5" fill="#1A181B" />
                <rect x="17" y="22" width="2" height="2" fill="#FFFFFF" />
                <rect x="19" y="24" width="1" height="1" fill="#FFFFFF" />
                {/* Mata Kanan */}
                <rect x="28" y="21" width="4" height="5" fill="#1A181B" />
                <rect x="29" y="22" width="2" height="2" fill="#FFFFFF" />
                <rect x="31" y="24" width="1" height="1" fill="#FFFFFF" />
                {/* Mulut Senyum Kecil */}
                <rect x="22" y="28" width="4" height="1" fill="#E07A88" />
                <rect x="23" y="29" width="2" height="1" fill="#E07A88" />
              </>
            )}

            {activeExpression === 'thinking' && (
              <>
                {/* Mata Fokus */}
                <rect x="16" y="22" width="4" height="4" fill="#1A181B" />
                <rect x="17" y="22" width="1" height="1" fill="#FFFFFF" />
                <rect x="28" y="22" width="4" height="4" fill="#1A181B" />
                <rect x="29" y="22" width="1" height="1" fill="#FFFFFF" />
                {/* Alis Berpikir */}
                <rect x="16" y="19" width="4" height="1" fill={h.outline} />
                <rect x="28" y="20" width="4" height="1" fill={h.outline} />
                {/* Mulut Mikir */}
                <rect x="23" y="28" width="3" height="1" fill="#8C6258" />
              </>
            )}

            {activeExpression === 'confused' && (
              <>
                {/* Mata Kaget/Bingung */}
                <rect x="16" y="21" width="4" height="5" fill="#1A181B" />
                <rect x="17" y="23" width="2" height="2" fill="#FFFFFF" />
                <rect x="28" y="22" width="4" height="3" fill="#1A181B" />
                <rect x="29" y="22" width="1" height="1" fill="#FFFFFF" />
                {/* Alis Miring */}
                <rect x="16" y="20" width="4" height="1" fill={h.outline} />
                <rect x="28" y="19" width="4" height="1" fill={h.outline} />
                {/* Mulut Bergelombang */}
                <rect x="22" y="29" width="2" height="1" fill="#8C6258" />
                <rect x="24" y="28" width="2" height="1" fill="#8C6258" />
              </>
            )}
          </g>

          {/* ================= LAYER 6: FRONT HAIR & BANGS (PONI & SISI) ================= */}
          {gender === 'girl' && (
            <g>
              {/* Mahkota Atas Kepala */}
              <rect x="14" y="8" width="20" height="4" fill={h.outline} />
              <rect x="12" y="10" width="24" height="5" fill={h.outline} />
              <rect x="15" y="9" width="18" height="6" fill={h.main} />
              <rect x="13" y="11" width="22" height="5" fill={h.main} />

              {/* Highlight Kilau Rambut */}
              <rect x="17" y="12" width="4" height="1" fill={h.highlight} />
              <rect x="27" y="12" width="4" height="1" fill={h.highlight} />

              {/* Poni Depan Natural & Berlapis */}
              {hairstyle === 'bob' ? (
                /* Classic Bob: Poni rata penuh & rapi */
                <>
                  <rect x="14" y="15" width="20" height="5" fill={h.main} />
                  <rect x="14" y="20" width="20" height="1" fill={h.outline} />
                </>
              ) : (
                /* Short Bob & Long Layer: Poni berhelai lembut */
                <>
                  <rect x="14" y="15" width="20" height="4" fill={h.main} />
                  <rect x="15" y="19" width="3" height="2" fill={h.main} />
                  <rect x="20" y="19" width="4" height="2" fill={h.main} />
                  <rect x="26" y="19" width="3" height="2" fill={h.main} />
                  <rect x="30" y="19" width="3" height="2" fill={h.main} />
                </>
              )}

              {/* Sisi Rambut Membingkai Pipi */}
              {hairstyle === 'long' ? (
                <>
                  <rect x="11" y="15" width="3" height="31" fill={h.main} />
                  <rect x="34" y="15" width="3" height="31" fill={h.main} />
                  <rect x="10" y="18" width="1" height="28" fill={h.outline} />
                  <rect x="37" y="18" width="1" height="28" fill={h.outline} />
                </>
              ) : (
                <>
                  <rect x="11" y="15" width="3" height="19" fill={h.main} />
                  <rect x="34" y="15" width="3" height="19" fill={h.main} />
                  <rect x="10" y="18" width="1" height="15" fill={h.outline} />
                  <rect x="37" y="18" width="1" height="15" fill={h.outline} />
                  <rect x="11" y="34" width="3" height="1" fill={h.outline} />
                  <rect x="34" y="34" width="3" height="1" fill={h.outline} />
                </>
              )}
            </g>
          )}

          {gender === 'boy' && (
            <g>
              {/* Mahkota Rambut Laki-laki Bervolume Ala Referensi */}
              <rect x="16" y="7" width="16" height="3" fill={h.outline} />
              <rect x="13" y="9" width="22" height="5" fill={h.outline} />
              <rect x="11" y="12" width="26" height="8" fill={h.outline} />

              <rect x="17" y="8" width="14" height="4" fill={h.main} />
              <rect x="14" y="10" width="20" height="6" fill={h.main} />
              <rect x="12" y="13" width="24" height="6" fill={h.main} />

              {/* Jambul & Tekstur Poni */}
              {hairstyle === 'neat' ? (
                /* Neat Corporate: Poni belah samping rapi */
                <>
                  <rect x="14" y="16" width="9" height="3" fill={h.main} />
                  <rect x="26" y="16" width="8" height="3" fill={h.main} />
                  <rect x="16" y="12" width="6" height="1" fill={h.highlight} />
                </>
              ) : hairstyle === 'fringe' ? (
                /* Casual Fringe: Poni depan berhelai penuh */
                <>
                  <rect x="14" y="16" width="20" height="4" fill={h.main} />
                  <rect x="16" y="20" width="3" height="1" fill={h.main} />
                  <rect x="22" y="20" width="4" height="2" fill={h.main} />
                  <rect x="29" y="20" width="3" height="1" fill={h.main} />
                </>
              ) : (
                /* Short Textured (Default ala Referensi): Poni bertekstur organik */
                <>
                  <rect x="14" y="16" width="20" height="3" fill={h.main} />
                  <rect x="15" y="19" width="4" height="2" fill={h.main} />
                  <rect x="21" y="19" width="5" height="2" fill={h.main} />
                  <rect x="28" y="19" width="4" height="2" fill={h.main} />
                  <rect x="10" y="16" width="2" height="2" fill={h.outline} />
                  <rect x="36" y="16" width="2" height="2" fill={h.outline} />
                </>
              )}

              {/* Highlight Atas */}
              <rect x="18" y="11" width="5" height="1" fill={h.highlight} />
              <rect x="26" y="12" width="4" height="1" fill={h.highlight} />

              {/* Jambang Samping */}
              <rect x="12" y="19" width="2" height="5" fill={h.main} />
              <rect x="34" y="19" width="2" height="5" fill={h.main} />
            </g>
          )}

          {/* ================= LAYER 7: ACCESSORIES ================= */}
          {accessory === 'glasses' && (
            <g>
              {/* Frame Kacamata Kiri & Kanan */}
              <rect x="15" y="20" width="6" height="6" fill="none" stroke="#1E293B" strokeWidth="1" />
              <rect x="27" y="20" width="6" height="6" fill="none" stroke="#1E293B" strokeWidth="1" />
              {/* Bridge Tengah */}
              <rect x="21" y="22" width="6" height="1" fill="#1E293B" />
              {/* Kilau Lensa */}
              <rect x="16" y="21" width="1" height="2" fill="rgba(255,255,255,0.6)" />
              <rect x="28" y="21" width="1" height="2" fill="rgba(255,255,255,0.6)" />
            </g>
          )}

          {accessory === 'lanyard' && (
            <g>
              {/* Tali Lanyard 4SHO */}
              <rect x="20" y="36" width="1" height="5" fill="#739BCB" />
              <rect x="27" y="36" width="1" height="5" fill="#739BCB" />
              {/* Kartu ID Badge */}
              <rect x="21" y="40" width="6" height="4" fill="#FFFFFF" stroke="#243D69" strokeWidth="0.8" />
              <rect x="22" y="41" width="2" height="2" fill="#739BCB" />
            </g>
          )}

          {accessory === 'coffee' && (
            <g>
              {/* Cup Kopi Takeaway di Tangan Kanan */}
              <rect x="33" y="41" width="5" height="6" fill="#FFFFFF" stroke="#243D69" strokeWidth="0.8" />
              <rect x="32" y="40" width="7" height="1.5" fill="#243D69" />
              <rect x="33" y="43" width="5" height="2" fill="#C69C6D" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bobbing: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: 'chibiIdle 2.8s ease-in-out infinite',
  }
};

if (typeof document !== 'undefined' && !document.getElementById('chibi-idle-anim')) {
  const styleSheet = document.createElement('style');
  styleSheet.id = 'chibi-idle-anim';
  styleSheet.innerHTML = `
    @keyframes chibiIdle {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-2px); }
    }
  `;
  document.head.appendChild(styleSheet);
}